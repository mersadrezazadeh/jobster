import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
async function JobsPage() {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/add-job");

  return <main>JOBS</main>;
}

export default JobsPage;
