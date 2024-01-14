"use client";

import { Button } from "./ui/button";
import { toast } from "@/components/ui/use-toast";
import { useTransition } from "react";
import { deleteJob } from "@/utils/actions";
import { Loader2, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

function DeleteJob({ id }: { id: string }) {
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
        {!isPending ? <Trash2 /> : <Loader2 className={cn("animate-spin")} />}
      </Button>
    </form>
  );
}

export default DeleteJob;
