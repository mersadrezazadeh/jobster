import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import AuthForm from "@/components/AuthForm";

async function AuthPage() {
  const { data } = await readUserSession();

  if (data.session) return redirect("/add-job");

  return (
    <main className="flex h-screen items-center justify-center">
      <div className="w-96">
        <AuthForm />
      </div>
    </main>
  );
}

export default AuthPage;
