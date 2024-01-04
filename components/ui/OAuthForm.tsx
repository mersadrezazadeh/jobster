"use client";

import { Button } from "@/components/ui/button";
import createSupabaseBrowserClient from "@/utils/supabase/client";
import React from "react";

export default function OAuthForm() {
  const supabase = createSupabaseBrowserClient();

  function signInWithGithub() {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${location.origin}/auth/callback/` },
    });
  }

  return (
    <Button onClick={signInWithGithub} className="w-full">
      Login With Github
    </Button>
  );
}
