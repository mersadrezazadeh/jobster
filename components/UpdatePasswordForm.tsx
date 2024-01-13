"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "@/components/CustomFormField";
import { Form } from "./ui/form";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { updateUser } from "@/utils/actions";
import { toast } from "./ui/use-toast";
import { Loader2, Save } from "lucide-react";
import { cn } from "@/lib/utils";
import { UpdatePasswordSchema, UpdatePasswordType } from "@/utils/types";

function UpdatePasswordForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<UpdatePasswordType>({
    resolver: zodResolver(UpdatePasswordSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  function onSubmit({ password }: UpdatePasswordType) {
    startTransition(async () => {
      const result = await updateUser(password);

      const { error } = JSON.parse(result);

      if (error)
        toast({ variant: "destructive", title: "Something went wrong!" });
      else toast({ title: "Password updated successfully" });
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded bg-muted p-8 shadow-lg"
      >
        <h2 className="mb-6 text-4xl font-semibold capitalize">
          Update password
        </h2>

        <CustomFormField name="password" control={form.control} />
        <CustomFormField
          name="confirm"
          control={form.control}
          labelText="Confirm password"
        />
        <Button type="submit" disabled={isPending}>
          {!isPending ? <Save /> : <Loader2 className={cn("animate-spin")} />}
        </Button>
      </form>
    </Form>
  );
}

export default UpdatePasswordForm;
