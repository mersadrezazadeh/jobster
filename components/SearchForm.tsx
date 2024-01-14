"use client";

import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

function SearchForm() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const search = searchParams.get("search") || "";
  const status = searchParams.get("status") || "All";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let params = new URLSearchParams();
    const formData = new FormData(e.currentTarget);

    const searchValue = formData.get("search") as string;

    if (!searchValue) return;

    params.set("search", searchValue);
    params.set("status", status);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex self-end">
      <Input
        type="text"
        name="search"
        placeholder="Position & Company..."
        defaultValue={search}
        className="rounded-r-none"
      />

      <Button size="icon" type="submit" className="rounded-l-none">
        <Search />
      </Button>
    </form>
  );
}

export default SearchForm;
