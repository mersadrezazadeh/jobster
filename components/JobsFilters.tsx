"use client";

import { JobMode, JobRemote, JobSalary, JobStatus } from "@/utils/types";
import { Button } from "./ui/button";
import JobsFilterItem from "./JobsFilterItem";
import ClearFilters from "./ClearFilters";
import { Filter } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

function JobsFilters() {
  const pathname = usePathname();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let params = new URLSearchParams();
    const formData = new FormData(e.currentTarget);

    const status = formData.get("status") as string;
    const mode = formData.get("mode") as string;
    const remote = formData.get("remote") as string;
    const salary = formData.get("salary") as string;

    params.set("status", status);
    params.set("mode", mode);
    params.set("remote", remote);
    params.set("salary", salary);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 grid grid-cols-[1fr,1fr,1fr,1fr] grid-rows-[auto,1fr] items-center gap-x-4 gap-y-2"
    >
      <JobsFilterItem
        name="status"
        labelText="Status"
        items={["All", ...Object.values(JobStatus)]}
      />

      <JobsFilterItem
        name="mode"
        labelText="Mode"
        items={["All", ...Object.values(JobMode)]}
      />

      <JobsFilterItem
        name="remote"
        labelText="Remote"
        items={[...Object.values(JobRemote), "All"].reverse()}
      />

      <JobsFilterItem
        name="salary"
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
