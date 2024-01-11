import { JobMode, JobRemote, JobSalary, JobStatus } from "@/utils/types";
import { Button } from "./ui/button";
import JobsFilterItem from "./JobsFilterItem";
import ClearFilters from "./ClearFilters";
import { Filter } from "lucide-react";

function JobsFilters({
  setFilters,
}: {
  setFilters: React.Dispatch<
    React.SetStateAction<{
      status: string;
      mode: string;
      remote: string;
      salary: string;
    }>
  >;
}) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const status = formData.get("status") as string;
    const mode = formData.get("mode") as string;
    const remote = formData.get("remote") as string;
    const salary = formData.get("salary") as string;

    setFilters({ status, mode, remote, salary });
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
