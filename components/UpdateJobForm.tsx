"use client";

import {
  JobType,
  JobStatus,
  JobMode,
  CreateAndUpdateJobSchema,
  CreateAndUpdateJobType,
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

function UpdateJobForm({ job }: { job: JobType }) {
  const { id, position, company, location, status, mode } = job;
  const [isPending, startTransition] = useTransition();

  const form = useForm<CreateAndUpdateJobType>({
    resolver: zodResolver(CreateAndUpdateJobSchema),
    defaultValues: {
      position: position || "",
      company: company || "",
      location: location || "",
      status: (status as JobStatus) || JobStatus.Pending,
      mode: (mode as JobMode) || JobMode.FullTime,
    },
  });

  function onSubmit(values: CreateAndUpdateJobType) {
    startTransition(async () => {
      const result = await updateJob(id, values);

      const { error } = JSON.parse(result);

      if (error)
        toast({ variant: "destructive", description: "Something went wrong!" });
      else toast({ title: "Job updated successfully" });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <h2 className="mb-6 text-4xl font-semibold capitalize">edit job</h2>

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

          <Button
            type="submit"
            disabled={isPending}
            className="flex gap-2 self-end capitalize"
          >
            Edit job
            <Loader2 className={cn("animate-spin", { hidden: !isPending })} />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default UpdateJobForm;
