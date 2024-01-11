import { redirect } from "next/navigation";
import { readAllJobs, readUserSession } from "@/utils/actions";
import SearchForm from "@/components/SearchForm";
import JobsFilters from "@/components/JobsFilters";
import JobsList from "@/components/JobsList";

type JobsPageProps = {
  searchParams?: {
    page?: string;
    search?: string;
    status?: string;
    mode?: string;
    remote?: string;
    salary?: string;
  };
};

async function JobsPage({ searchParams }: JobsPageProps) {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/add-job");

  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";
  const status = searchParams?.status || "All";
  const mode = searchParams?.mode || "All";
  const remote = searchParams?.remote || "All";
  const salary = searchParams?.salary || "All";

  const { data: jobs, count, error } = await readAllJobs(page, search);

  const totalPages = Math.ceil((count || 0) / 10);

  return (
    <>
      <SearchForm />
      <JobsFilters />
      <JobsList
        jobs={jobs}
        count={count || 0}
        page={page}
        totalPages={totalPages}
      />
    </>
  );
}

export default JobsPage;
