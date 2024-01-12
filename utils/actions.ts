"use server";

import createSupabaseServerClient from "./supabase/server";
import { CreateAndUpdateJobType } from "./types";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import dayjs from "dayjs";
import { PAGE_SIZE } from "./constants";

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

export async function createJob(newJob: CreateAndUpdateJobType) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.from("jobs").insert([newJob]).select().single();

  return JSON.stringify(result);
}

export async function readAllJobs(
  page: number = 1,
  search?: string,
  status?: string,
  mode?: string,
  remote?: string,
  salary?: string,
) {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const supabase = await createSupabaseServerClient();

  let query = supabase.from("jobs").select("*", { count: "exact" });

  if (search)
    query
      .or(`or(position.ilike.%${search}%,company.ilike.%${search}%)`)
      .range(from, to);
  else query.range(from, to);

  const result = await query;

  return result;
}

export async function deleteJob(id: string) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.from("jobs").delete().eq("id", id);

  revalidatePath("/jobs");

  return JSON.stringify(result);
}

export async function readSingleJob(id: string) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.from("jobs").select().eq("id", id).single();

  return result;
}

export async function updateJob(id: string, newJob: CreateAndUpdateJobType) {
  const supabase = await createSupabaseServerClient();

  const result = await supabase
    .from("jobs")
    .update(newJob)
    .eq("id", id)
    .single();

  return JSON.stringify(result);
}

export async function readStatus() {
  const supabase = await createSupabaseServerClient();

  const result = await supabase.from("jobs").select("status");

  return result;
}

export async function readDates() {
  const supabase = await createSupabaseServerClient();

  const sixMonthsAgo = dayjs().subtract(6, "month").toISOString();

  const result = await supabase
    .from("jobs")
    .select("date")
    .gte("date", sixMonthsAgo);

  return result;
}
export async function readApplied() {
  const supabase = await createSupabaseServerClient();

  const result = await supabase
    .from("jobs")
    .select("company, position")
    .eq("status", "Applied");

  return result;
}
