"use server";

import createSupabaseServerClient from "./supabase/server";
import { CreateAndUpdateJobType } from "./types";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import dayjs from "dayjs";

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
  jobStatus?: string,
  jobMode?: string,
  jobRemote?: string,
  jobSalary?: string,
) {
  const from = (page - 1) * 10;
  const to = from + 10 - 1;

  const supabase = await createSupabaseServerClient();

  let query = supabase.from("jobs").select("*", { count: "exact" });

  if (search)
    query
      .or(`or(position.ilike.%${search}%,company.ilike.%${search}%)`)
      .range(from, to);
  else if (jobStatus && jobStatus !== "all")
    query.ilike("status", `%${jobStatus}%`).range(from, to);
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
    .select("created_at")
    .gte("created_at", sixMonthsAgo);

  return result;
}
