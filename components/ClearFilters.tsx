"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { FilterX } from "lucide-react";

function ClearFilters({ path, disabled }: { path: string; disabled: boolean }) {
  const router = useRouter();

  return (
    <Button
      type="button"
      variant="destructive"
      size="icon"
      disabled={disabled}
      onClick={() => router.push(path)}
    >
      <FilterX />
    </Button>
  );
}

export default ClearFilters;
