import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signInWithEmailPassword } from "@/utils/actions";
import { useTransition } from "react";
import { LoginSchema, LoginType } from "@/utils/types";

function LoginForm() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "demo@example.com",
      password: "123456",
    },
  });

  function onSubmit(data: LoginType) {
    startTransition(async () => {
      const result = await signInWithEmailPassword(data);

      const { error } = JSON.parse(result);

      if (error?.message)
        toast({ variant: "destructive", title: error.message });
      else toast({ title: "Logged in successfully" });
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="example@gmail.com"
                  {...field}
                  type="email"
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="password"
                  {...field}
                  type="password"
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending} className="w-full">
          {!isPending ? "Login" : <Loader2 className={cn("animate-spin")} />}
        </Button>
      </form>
    </Form>
  );
}

export default LoginForm;
