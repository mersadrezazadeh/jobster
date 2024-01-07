"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function PaginationControl({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const pageButtons = Array.from({ length: totalPages }, (_, i) => i++);

  function handlePageChange(page: number) {
    const defaultParams = {
      search: searchParams.get("search") || "",
      jobStatus: searchParams.get("job_status") || "all",
      page: String(page),
    };

    let params = new URLSearchParams(defaultParams);

    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex gap-x-2">
      {pageButtons.map((page) => (
        <Button
          key={page}
          size="icon"
          variant={currentPage === page + 1 ? "default" : "outline"}
          onClick={() => handlePageChange(page + 1)}
        >
          {page + 1}
        </Button>
      ))}
    </div>
  );
}

export default PaginationControl;
