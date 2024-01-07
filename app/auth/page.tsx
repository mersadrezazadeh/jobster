import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

async function AuthPage() {
  const { data } = await readUserSession();

  if (data.session) return redirect("/add-job");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-8">
      <header>
        <Image src={Logo} alt="Jobster Logo" />
      </header>
      <div className="w-96 px-4">
        <AuthForm />
      </div>
    </main>
  );
}

export default AuthPage;
