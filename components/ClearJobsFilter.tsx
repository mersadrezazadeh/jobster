"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { FilterX } from "lucide-react";

function ClearJobsFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const hasFilter = searchParams.get("search");

  return (
    <Button
      size="icon"
      variant="destructive"
      disabled={!hasFilter}
      onClick={() => router.push("/jobs")}
      className="self-end"
    >
      <FilterX />
    </Button>
  );
}

export default ClearJobsFilter;
