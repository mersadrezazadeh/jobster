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
  const page = searchParams?.page || 1;

  const { data: jobs, error } = await readAllJobs(search, jobStatus, +page);

  return (
    <main>
      <SearchForm />
      <JobsList jobs={jobs} />
    </main>
  );
}

export default JobsPage;
