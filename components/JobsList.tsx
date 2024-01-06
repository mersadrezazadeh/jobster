import { readAllJobs } from "@/utils/actions";
import { JobType } from "@/utils/types";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";
import JobCard from "./JobCard";

function JobsList({ jobs }: { jobs: JobType[] | null }) {
  if (jobs !== null && !jobs.length)
    return <h2 className="text-xl">No Jobs Found...</h2>;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {jobs?.map((job) => <JobCard key={job.id} job={job} />)}
    </div>
  );
}

export default JobsList;
