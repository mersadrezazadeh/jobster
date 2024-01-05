"use server";

import { redirect } from "next/navigation";
import createSupabaseServerClient from "./supabase/server";
import { createAndUpdateJobType } from "./types";

export async function signUpWithEmailAndPassword({
  email,
  password,
  confirm,
}: {
  email: string;
  password: string;
  confirm: string;
}) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signUp({ email, password });

  return JSON.stringify(result);
}

export async function signInWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signInWithPassword({
    email: data.email,
    password: data.password,
  });

  return JSON.stringify(result);
}

export async function readUserSession() {
  const supabase = await createSupabaseServerClient();

  return supabase.auth.getSession();
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();

  await supabase.auth.signOut();

  redirect("/auth");
}

export async function createJob(newJob: createAndUpdateJobType) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.from("jobs").insert([newJob]).select().single();

  return JSON.stringify(result);
}
