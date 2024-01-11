import Jobs from "@/components/Jobs";
import SearchForm from "@/components/SearchForm";
import { readAllJobs, readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";

type JobsPageProps = {
  searchParams?: {
    page?: string;
    search?: string;
  };
};

async function JobsPage({ searchParams }: JobsPageProps) {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/add-job");

  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";

  const { data: jobs, count, error } = await readAllJobs(page, search);

  const totalPages = Math.ceil((count || 0) / 10);

  return (
    <>
      <SearchForm />
      <Jobs
        jobs={jobs}
        count={count || 0}
        page={page}
        totalPages={totalPages}
      />
    </>
  );
}

export default JobsPage;
