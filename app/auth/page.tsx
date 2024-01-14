import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

async function AuthPage() {
  const { data } = await readUserSession();

  if (data.session) return redirect("/dashboard");

  return (
    <main className="min-h-screen space-y-6 px-4 py-8">
      <header>
        <Image src={Logo} alt="Jobster Logo" className="mx-auto" />
      </header>
      <div className="mx-auto max-w-96 rounded-lg border p-4">
        <AuthForm />
      </div>
    </main>
  );
}

export default AuthPage;
