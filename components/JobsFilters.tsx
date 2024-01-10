"use client";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { JobMode, JobRemote, JobSalary, JobStatus } from "@/utils/types";
import { Label } from "./ui/label";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import JobsFilterItem from "./JobsFilterItem";
import ClearFilters from "./ClearFilters";
import { Filter } from "lucide-react";

function JobsFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // const jobStatus = searchParams.get("job_status") || "All";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let params = new URLSearchParams();
    const formData = new FormData(e.currentTarget);

    const jobStatusValue = formData.get("job-status") as string;
    const jobModeValue = formData.get("job-mode") as string;
    const jobRemoteValue = formData.get("job-remote") as string;
    const jobSalaryValue = formData.get("job-salary") as string;

    params.set("job_status", jobStatusValue);
    params.set("job_mode", jobModeValue);
    params.set("job_remote", jobRemoteValue);
    params.set("job_salary", jobSalaryValue);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 grid grid-cols-[1fr,1fr,1fr,1fr] grid-rows-[auto,1fr] items-center gap-x-4 gap-y-2"
    >
      <JobsFilterItem
        name="job-status"
        labelText="Status"
        items={["All", ...Object.values(JobStatus)]}
      />

      <JobsFilterItem
        name="job-mode"
        labelText="Mode"
        items={["All", ...Object.values(JobMode)]}
      />

      <JobsFilterItem
        name="job-remote"
        labelText="Remote"
        items={[...Object.values(JobRemote), "All"].reverse()}
      />

      <JobsFilterItem
        name="job-salary"
        labelText="Salary"
        items={["All", ...Object.values(JobSalary)]}
      />

      <div className="col-start-4 flex justify-end gap-2">
        <ClearFilters disabled={true} path="/" />

        <Button type="submit" size="icon">
          <Filter />
        </Button>
      </div>
    </form>
  );
}

export default JobsFilters;
