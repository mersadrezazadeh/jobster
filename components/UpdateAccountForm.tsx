"use client";

import { UpdateAccountType, UpdateAccountSchema } from "@/utils/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "@/components/CustomFormField";
import { Form, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { updateUser } from "@/utils/actions";
import { toast } from "./ui/use-toast";
import { Loader2, Save } from "lucide-react";
import { cn } from "@/lib/utils";

function UpdateAccountForm({ userData }: { userData: any }) {
  const [isPending, startTransition] = useTransition();

  const {
    email,
    user_metadata: { fullName },
  } = userData.user;

  const form = useForm<UpdateAccountType>({
    resolver: zodResolver(UpdateAccountSchema),
    defaultValues: {
      fullName: fullName,
    },
  });

  function onSubmit(data: UpdateAccountType) {
    startTransition(async () => {
      const result = await updateUser(data);

      const { error } = JSON.parse(result);

      if (error)
        toast({
          variant: "destructive",
          title: "Something went wrong!",
        });
      else toast({ title: "Account updated successfully" });
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="rounded bg-muted p-8 shadow-lg"
      >
        <h2 className="mb-6 text-4xl font-semibold capitalize">
          Update account
        </h2>

        <div className="flex flex-col gap-4">
          <div className="max-w-[400px]">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input disabled name="email" value={email} />
          </div>

          <div className="max-w-[400px]">
            <CustomFormField
              name="fullName"
              control={form.control}
              labelText="Full name"
            />
          </div>
          <Button type="submit" disabled={isPending} className="self-end">
            {!isPending ? <Save /> : <Loader2 className={cn("animate-spin")} />}
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default UpdateAccountForm;
