"use client";

import { Button } from "./ui/button";
import { toast } from "@/components/ui/use-toast";
import { useTransition } from "react";
import { deleteJob } from "@/utils/actions";

function DeleteJobButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      const result = await deleteJob(id);

      const { error } = JSON.parse(result);

      if (error)
        toast({ variant: "destructive", description: "Something went wrong!" });
      else toast({ title: "Job deleted successfully" });
    });
  }

  return (
    <form action={handleDelete}>
      <Button
        type="submit"
        disabled={isPending}
        variant="destructive"
        size="sm"
      >
        Delete
      </Button>
    </form>
  );
}

export default DeleteJobButton;
