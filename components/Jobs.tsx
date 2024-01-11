"use client";

import { JobType } from "@/utils/types";
import JobsFilters from "./JobsFilters";
import JobsList from "./JobsList";
import { useEffect, useState } from "react";

function Jobs({
  jobs,
  count,
  page,
  totalPages,
}: {
  jobs: JobType[] | null;
  count: number;
  page: number;
  totalPages: number;
}) {
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [filters, setFilters] = useState({
    status: "All",
    mode: "All",
    remote: "All",
    salary: "All",
  });

  useEffect(() => {
    const filteredJobs = jobs?.filter((job) => {
      if (
        (filters.status === "All" || job.status === filters.status) &&
        (filters.mode === "All" || job.mode === filters.mode) &&
        (filters.remote === "All" || job.remote === filters.remote) &&
        (filters.salary === "All" || job.salary === filters.salary)
      ) {
        return true;
      }
      return false;
    });

    setFilteredJobs(filteredJobs || null);
  }, [filters.status, filters.mode, filters.remote, filters.salary, jobs]);

  return (
    <>
      <JobsFilters setFilters={setFilters} />
      <JobsList
        jobs={filteredJobs}
        count={count || 0}
        page={page}
        totalPages={totalPages}
      />
    </>
  );
}

export default Jobs;
