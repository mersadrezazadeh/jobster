"use client";

import {
  JobMode,
  JobStatus,
  createAndUpdateJobSchema,
  createAndUpdateJobType,
} from "@/utils/types";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import CustomFormField from "./CustomFormField";
import CustomFormSelect from "./CustomFormSelect";
import { createJob } from "@/utils/actions";
import { useTransition } from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

function CreateJobForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<createAndUpdateJobType>({
    resolver: zodResolver(createAndUpdateJobSchema),
    defaultValues: {
      position: "",
      company: "",
      location: "",
      status: JobStatus.Pending,
      mode: JobMode.FullTime,
    },
  });

  function onSubmit(data: createAndUpdateJobType) {
    startTransition(async () => {
      const result = await createJob(data);

      const { error } = JSON.parse(result);

      if (error?.message) console.log(error.message);
      else console.log("success");

      form.reset();
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded bg-muted p-8"
      >
        <h2 className="mb-6 text-4xl font-semibold capitalize">Add job</h2>
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
            className="flex w-full gap-2 self-end capitalize"
          >
            Add job
            <Loader2 className={cn("animate-spin", { hidden: !isPending })} />
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default CreateJobForm;
