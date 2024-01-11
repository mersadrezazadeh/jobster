import { JobType } from "@/utils/types";
import JobCard from "./JobCard";
import PaginationControl from "./PaginationControl";

function JobsList({
  jobs,
  count,
  page,
  totalPages,
}: {
  jobs: JobType[] | null | undefined;
  count: number;
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

      <div className="flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold capitalize ">
          {count} jobs found
        </h2>
        {totalPages > 1 && (
          <PaginationControl currentPage={page} totalPages={totalPages} />
        )}
      </div>
    </>
  );
}

export default JobsList;
