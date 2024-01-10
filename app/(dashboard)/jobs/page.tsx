import JobsFilters from "@/components/JobsFilters";
import JobsList from "@/components/JobsList";
import SearchForm from "@/components/SearchForm";
import { readAllJobs, readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";

type JobsPageProps = {
  searchParams?: {
    page?: string;
    search?: string;
    job_status?: string;
    job_mode?: string;
    job_remote?: string;
    job_salary?: string;
  };
};

async function JobsPage({ searchParams }: JobsPageProps) {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/add-job");

  const page = Number(searchParams?.page) || 1;
  const search = searchParams?.search || "";
  const jobStatus = searchParams?.job_status || "all";
  const jobMode = searchParams?.job_mode || "all";
  const jobRemote = searchParams?.job_remote || "all";
  const jobSalary = searchParams?.job_salary || "all";

  const {
    data: jobs,
    count,
    error,
  } = await readAllJobs(page, search, jobStatus, jobMode, jobRemote, jobSalary);

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
