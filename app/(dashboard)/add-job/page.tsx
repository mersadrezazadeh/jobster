import SignOut from "@/components/SignOut";
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";

async function AddJobPage() {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/auth");

  return (
    <main>
      ADD JOB
      <SignOut />
    </main>
  );
}

export default AddJobPage;
