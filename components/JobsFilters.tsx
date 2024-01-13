"use client";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "./ui/label";
import { JobStatus } from "@/utils/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function JobsFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const search = searchParams.get("search") || "";

  function handleFilter(value: string) {
    let params = new URLSearchParams();

    params.set("search", search);
    params.set("status", value);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      <Label htmlFor="status">Filter by status</Label>
      <Select
        name="status"
        defaultValue="All"
        onValueChange={(value) => handleFilter(value)}
      >
        <SelectTrigger id="status">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {["All", ...Object.values(JobStatus)].map((value) => (
            <SelectItem key={value} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* <JobsFilterItem
        name="status"
        labelText="Filter by status"
        items={["All", ...Object.values(JobStatus)]}
      /> */}

      {/* <JobsFilterItem
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
      /> */}
    </div>
  );
}

export default JobsFilters;
