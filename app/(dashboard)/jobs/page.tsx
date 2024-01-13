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

  if (!data.session) return redirect("/auth");

  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";
  const status = searchParams?.status || "All";

  const { data: jobs, count, error } = await readAllJobs(page, search, status);

  const totalPages = Math.ceil((count || 0) / 10);

  return (
    <>
      <div className="mb-4 grid grid-cols-[144px,1fr] gap-4">
        <JobsFilters />
        <SearchForm />
      </div>
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
