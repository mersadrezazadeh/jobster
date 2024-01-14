"use server";

import createSupabaseServerClient from "./supabase/server";
import { CreateAndUpdateJobType } from "./types";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import dayjs from "dayjs";
import { PAGE_SIZE } from "./constants";

export async function signUpWithEmailPassword({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const fullName = email.slice(0, email.indexOf("@"));

  const supabase = await createSupabaseServerClient();

  const result = await supabase.auth.signUp({
    email,
    password,
    options: { data: { fullName } },
  });

  return JSON.stringify(result);
}

export async function signInWithEmailPassword(data: {
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

export async function createUpdateJob(
  newJob: CreateAndUpdateJobType,
  id?: string,
) {
  const supabase = await createSupabaseServerClient();

  let query = supabase.from("jobs");

  if (!id) {
    await query.insert([newJob]).select().single();
  } else {
    await query.update(newJob).eq("id", id).single();
  }

  const result = query;

  return JSON.stringify(result);
}

export async function readAllJobs(
  page: number = 1,
  search: string,
  status: string,
) {
  const from = (page - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const supabase = await createSupabaseServerClient();

  let query = supabase.from("jobs").select("*", { count: "exact" });

  if (search && status === "All") {
    query
      .or(`or(position.ilike.%${search}%,company.ilike.%${search}%)`)
      .order("date", { ascending: false })
      .range(from, to);
  } else if (search && status !== "All") {
    query
      .eq("status", status)
      .or(`or(position.ilike.%${search}%,company.ilike.%${search}%)`)
      .order("date", { ascending: false })
      .range(from, to);
  } else if (status !== "All") {
    query
      .eq("status", status)
      .order("date", { ascending: false })
      .range(from, to);
  } else {
    query.order("date", { ascending: false }).range(from, to);
  }

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
export async function readApplies() {
  const supabase = await createSupabaseServerClient();

  const result = await supabase
    .from("jobs")
    .select("id, company, position, mode")
    .eq("status", "Applied");

  return result;
}

export async function readUser() {
  const supabase = await createSupabaseServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) return null;

  const result = await supabase.auth.getUser();

  return result;
}

export async function updateUser({
  fullName,
  password,
}: {
  fullName?: string;
  password?: string;
}) {
  let updateData = password ? { password } : { data: { fullName } };

  const supabase = await createSupabaseServerClient();

  const result = supabase.auth.updateUser(updateData);

  return JSON.stringify(result);
}
