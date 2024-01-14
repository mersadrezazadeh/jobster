"use client";

import { Button } from "@/components/ui/button";
import createSupabaseBrowserClient from "@/utils/supabase/client";
import { Github } from "lucide-react";

function OAuthForm() {
  const supabase = createSupabaseBrowserClient();

  function signInWithGithub() {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo: `${location.origin}/auth/v1/callback/` },
    });
  }

  return (
    <Button onClick={signInWithGithub} className="flex w-full gap-2">
      <Github />
      Login With GitHub
    </Button>
  );
}

export default OAuthForm;
