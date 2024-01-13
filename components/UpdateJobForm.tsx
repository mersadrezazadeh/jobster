"use client";

import {
  JobType,
  JobStatus,
  JobMode,
  CreateAndUpdateJobSchema,
  CreateAndUpdateJobType,
  JobRemote,
  JobSalary,
} from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { useTransition } from "react";
import { updateJob } from "@/utils/actions";
import CustomFormField from "./CustomFormField";
import CustomFormSelect from "./CustomFormSelect";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import CustomDatePicker from "./CustomDatePicker";
import { Pencil } from "lucide-react";
import GoBack from "./GoBack";
import { redirect } from "next/navigation";

function UpdateJobForm({ job }: { job: JobType }) {
  const {
    id,
    position,
    company,
    location,
    status,
    mode,
    remote,
    salary,
    date,
  } = job;
  const [isPending, startTransition] = useTransition();

  const form = useForm<CreateAndUpdateJobType>({
    resolver: zodResolver(CreateAndUpdateJobSchema),
    defaultValues: {
      position: position || "",
      company: company || "",
      location: location || "",
      status: (status as JobStatus) || JobStatus.Applied,
      mode: (mode as JobMode) || JobMode.FullTime,
      remote: (remote as JobRemote) || JobRemote.No,
      salary: (salary as JobSalary) || JobSalary.Entry,
      date: new Date(date) || new Date(),
    },
  });

  function onSubmit(values: CreateAndUpdateJobType) {
    startTransition(async () => {
      const result = await updateJob(id, values);

      const { error } = JSON.parse(result);

      if (error)
        toast({ variant: "destructive", description: "Something went wrong!" });
      else {
        toast({ title: "Job Edited successfully" });
        redirect("/jobs");
      }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded bg-muted p-8 shadow-lg"
      >
        <div className="mb-6 flex justify-between">
          <h2 className="text-4xl font-semibold capitalize">Edit job</h2>
          <GoBack path="jobs" />
        </div>

        <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CustomFormField name="position" control={form.control} />

          <CustomFormField name="company" control={form.control} />

          <CustomFormField name="location" control={form.control} />

          <CustomFormSelect
            name="status"
            control={form.control}
            labelText="status"
            items={Object.values(JobStatus)}
          />

          <CustomFormSelect
            name="mode"
            control={form.control}
            labelText="mode"
            items={Object.values(JobMode)}
          />

          <CustomFormSelect
            name="remote"
            control={form.control}
            labelText="remote"
            items={Object.values(JobRemote)}
          />

          <CustomFormSelect
            name="salary"
            control={form.control}
            labelText="salary"
            items={Object.values(JobSalary)}
          />

          <CustomDatePicker
            name="date"
            control={form.control}
            labelText="date"
          />

          <Button
            type="submit"
            disabled={isPending}
            className="flex gap-2 self-end capitalize"
          >
            {!isPending ? (
              <Pencil />
            ) : (
              <Loader2 className={cn("animate-spin")} />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default UpdateJobForm;
