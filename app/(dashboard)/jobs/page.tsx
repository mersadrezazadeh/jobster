import JobsList from "@/components/JobsList";
import SearchForm from "@/components/ui/SearchForm";
import { readUserSession } from "@/utils/actions";
import { redirect } from "next/navigation";
async function JobsPage() {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/add-job");

  return (
    <main>
      <SearchForm />
      <JobsList />
    </main>
  );
}

export default JobsPage;
