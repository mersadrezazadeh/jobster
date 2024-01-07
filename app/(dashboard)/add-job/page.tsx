import CreateJobForm from "@/components/CreateJobForm";
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";

async function AddJobPage() {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/auth");

  return <CreateJobForm />;
}

export default AddJobPage;
