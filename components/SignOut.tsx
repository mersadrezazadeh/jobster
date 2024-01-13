"use client";

import { Loader2, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { signOut } from "@/utils/actions";
import { useTransition } from "react";
import { cn } from "@/lib/utils";

function SignOut() {
  const [isPending, startTransition] = useTransition();
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    startTransition(async () => {
      await signOut();
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Button variant="destructive">
        {!isPending ? <LogOut /> : <Loader2 className={cn("animate-spin")} />}
      </Button>
    </form>
  );
}

export default SignOut;
