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

  function handlePageChange(page: number) {
    const defaultParams = {
      search: searchParams.get("search") || "",
      status: searchParams.get("status") || "All",
      page: String(page),
    };

    let params = new URLSearchParams(defaultParams);

    router.push(`${pathname}?${params.toString()}`);
  }

  function addPageButton({
    page,
    activeClass,
  }: {
    page: number;
    activeClass: boolean;
  }) {
    return (
      <Button
        key={page}
        size="icon"
        variant={activeClass ? "default" : "outline"}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Button>
    );
  }

  function renderPageButtons() {
    const pageButtons = [];

    // first page
    pageButtons.push(
      addPageButton({ page: 1, activeClass: currentPage === 1 }),
    );

    // dots
    if (currentPage > 3) {
      pageButtons.push(
        <Button size="icon" variant="outline" key="dots-1">
          ...
        </Button>,
      );
    }

    // one before current page
    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(
        addPageButton({
          page: currentPage - 1,
          activeClass: false,
        }),
      );
    }

    // current page
    if (currentPage !== 1 && currentPage !== totalPages) {
      pageButtons.push(
        addPageButton({
          page: currentPage,
          activeClass: true,
        }),
      );
    }

    // one after current page
    if (currentPage !== totalPages && currentPage !== totalPages - 1) {
      pageButtons.push(
        addPageButton({
          page: currentPage + 1,
          activeClass: false,
        }),
      );
    }

    if (currentPage < totalPages - 2) {
      pageButtons.push(
        <Button className="pointer-events-none" size="icon" variant="ghost">
          ...
        </Button>,
      );
    }
    pageButtons.push(
      addPageButton({
        page: totalPages,
        activeClass: currentPage === totalPages,
      }),
    );
    return pageButtons;
  }

  return (
    <div className="flex  gap-x-2">
      <Button
        className="flex items-center gap-x-2 "
        variant="outline"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = totalPages;
          handlePageChange(prevPage);
        }}
      >
        <ChevronLeft />
      </Button>

      {renderPageButtons()}

      <Button
        className="flex items-center gap-x-2 "
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > totalPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
        variant="outline"
      >
        <ChevronRight />
      </Button>
    </div>
  );
}

export default PaginationControl;
