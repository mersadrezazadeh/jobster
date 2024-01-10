"use client";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { JobStatus } from "@/utils/types";
import ClearFilters from "./ClearFilters";

function SearchForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const search = searchParams.get("search") || "";
  // const jobStatus = searchParams.get("job_status") || "All";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let params = new URLSearchParams();
    const formData = new FormData(e.currentTarget);

    const searchValue = formData.get("search") as string;
    const jobStatusValue = formData.get("job-status") as string;

    if (!searchValue) return;

    params.set("search", searchValue);
    params.set("job_status", jobStatusValue);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-16 grid grid-cols-[auto,1fr] gap-4 rounded-lg bg-muted p-8 shadow-lg md:grid-cols-[2fr,auto,1fr]"
    >
      <Input
        type="text"
        name="search"
        placeholder="Search Jobs..."
        defaultValue={search}
        className="col-span-full md:col-span-1"
      />

      {/* <Select name="job-status" defaultValue="All">
        <SelectTrigger className="col-span-full md:col-span-1">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {["All", ...Object.values(JobStatus)].map((status) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
        </SelectContent>
      </Select> */}
      <ClearFilters path="/jobs" disabled={search === ""} />

      <Button type="submit">
        <Search />
      </Button>
    </form>
  );
}

export default SearchForm;
