import UpdateAccountForm from "@/components/UpdateAccountForm";
import UpdatePasswordForm from "@/components/UpdatePasswordForm";
import { readUser, readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";

async function SettingsPage() {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/auth");

  const { data: userData, error } = (await readUser()) || {};

  if (error) return <div>{error?.message}</div>;

  return (
    <main className="space-y-8">
      <UpdateAccountForm userData={userData} />
      <UpdatePasswordForm />
    </main>
  );
}

export default SettingsPage;
