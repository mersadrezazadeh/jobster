import JobsList from "@/components/JobsList";
import SearchForm from "@/components/SearchForm";
import { readAllJobs, readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
async function JobsPage({
  searchParams,
}: {
  searchParams?: { search?: string; job_status?: string; page?: string };
}) {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/add-job");

  const search = searchParams?.search || "";
  const jobStatus = searchParams?.job_status || "all";
  const page = Number(searchParams?.page) || 1;

  const {
    data: jobs,
    count,
    error,
  } = await readAllJobs(search, jobStatus, page);

  const totalPages = Math.ceil((count || 0) / 10);

  return (
    <main>
      <SearchForm />
      <JobsList
        jobs={jobs}
        count={count || 0}
        page={page}
        totalPages={totalPages}
      />
    </main>
  );
}

export default JobsPage;
