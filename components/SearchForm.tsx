"use client";

import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import ClearFilters from "./ClearFilters";

function SearchForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const search = searchParams.get("search") || "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let params = new URLSearchParams();
    const formData = new FormData(e.currentTarget);

    const searchValue = formData.get("search") as string;

    if (!searchValue) return;

    params.set("search", searchValue);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 grid grid-cols-[auto,1fr] gap-4 rounded-lg bg-muted p-8 shadow-lg md:grid-cols-[2fr,auto,0.5fr]"
    >
      <Input
        type="text"
        name="search"
        placeholder="Search Jobs..."
        defaultValue={search}
        className="col-span-full md:col-span-1"
      />
      <ClearFilters path="/jobs" disabled={search === ""} />

      <Button type="submit">
        <Search />
      </Button>
    </form>
  );
}

export default SearchForm;
