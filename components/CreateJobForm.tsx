"use client";

import {
  JobMode,
  JobStatus,
  JobRemote,
  CreateAndUpdateJobSchema,
  CreateAndUpdateJobType,
  JobSalary,
} from "@/utils/types";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomFormField from "./CustomFormField";
import CustomFormSelect from "./CustomFormSelect";
import { createJob } from "@/utils/actions";
import { useTransition } from "react";
import { Loader2, PlusCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import CustomDatePicker from "./CustomDatePicker";

function CreateJobForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<CreateAndUpdateJobType>({
    resolver: zodResolver(CreateAndUpdateJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Applied,
      mode: JobMode.FullTime,
      remote: JobRemote.No,
      salary: JobSalary.Entry,
      date: new Date(),
    },
  });

  function onSubmit(data: CreateAndUpdateJobType) {
    startTransition(async () => {
      const result = await createJob(data);

      const { error } = JSON.parse(result);

      if (error)
        toast({ variant: "destructive", description: "Something went wrong!" });
      else toast({ title: "Job added successfully" });

      form.reset();
      router.push("/jobs");
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded bg-muted p-8 shadow-lg"
      >
        <h2 className="mb-6 text-3xl font-semibold capitalize md:text-4xl">
          Add job
        </h2>
        <div className="grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
          <CustomFormField name="position" control={form.control} />

          <CustomFormField name="company" control={form.control} />

          <CustomFormField name="location" control={form.control} />

          <CustomFormSelect
            name="status"
            control={form.control}
            labelText="job status"
            items={Object.values(JobStatus)}
          />

          <CustomFormSelect
            name="mode"
            control={form.control}
            labelText="job mode"
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

          <CustomDatePicker name="date" control={form.control} />

          <Button
            type="submit"
            disabled={isPending}
            className="flex gap-2 self-end md:col-span-2 lg:col-span-1"
          >
            {isPending ? (
              <Loader2 className={cn("animate-spin")} />
            ) : (
              <PlusCircle />
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CreateJobForm;
