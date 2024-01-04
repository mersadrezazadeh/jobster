import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";

async function StatsPage() {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/add-job");

  return <main>STATS</main>;
}

export default StatsPage;
