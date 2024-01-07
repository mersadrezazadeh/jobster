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
import { FilterX, Search } from "lucide-react";

function SearchForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const search = searchParams.get("search") || "";
  const jobStatus = searchParams.get("job_status") || "all";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let params = new URLSearchParams();
    const formData = new FormData(e.currentTarget);

    const searchValue = formData.get("search") as string;
    const jobStatusValue = formData.get("job_status") as string;

    params.set("search", searchValue);
    params.set("job_status", jobStatusValue);

    router.push(`${pathname}?${params.toString()}`);
  }

  function handleClearFilter() {
    router.push("/jobs");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-16 grid grid-cols-[auto,1fr] gap-4 rounded-lg bg-muted p-8 md:grid-cols-[1fr,1fr,auto,1fr]"
    >
      <Input
        type="text"
        name="search"
        placeholder="Search Jobs..."
        defaultValue={search}
        className="col-span-full md:col-span-1"
      />
      <Select>
        <SelectTrigger className="col-span-full md:col-span-1">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {["all", ...Object.values(jobStatus)].map((status) => (
            <SelectItem key={status} value={status}>
              {status}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        type="button"
        variant="destructive"
        size="icon"
        disabled={search === ""}
        onClick={handleClearFilter}
      >
        <FilterX />
      </Button>
      <Button type="submit">
        <Search />
      </Button>
    </form>
  );
}

export default SearchForm;
