import { JobType } from "@/utils/types";
import JobCard from "./JobCard";
import PaginationControl from "./PaginationControl";

function JobsList({
  jobs,
  page,
  totalPages,
}: {
  jobs: JobType[] | null | undefined;
  page: number;
  totalPages: number;
}) {
  if (jobs !== null && !jobs?.length)
    return <h2 className="text-xl">No Jobs Found...</h2>;

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2">
        {jobs?.map((job) => <JobCard key={job.id} job={job} />)}
      </div>

      {totalPages > 1 && (
        <PaginationControl currentPage={page} totalPages={totalPages} />
      )}
    </>
  );
}

export default JobsList;
