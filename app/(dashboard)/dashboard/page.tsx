import {
  readApplies,
  readDates,
  readStatus,
  readUserSession,
} from "@/utils/actions";
import MonthlyApplications from "@/components/MonthlyApplications";
import RecentApplies from "@/components/RecentApplies";
import StatsCards from "@/components/StatsCards";
import OverallStatus from "@/components/OverallStatus";
import { redirect } from "next/navigation";

async function DashboardPage() {
  const { data } = await readUserSession();

  if (!data.session) return redirect("/auth");

  const { data: status, error: statusError } = await readStatus();
  const { data: dates, error: datesError } = await readDates();
  const { data: applies, error: appliesError } = await readApplies();

  if (statusError || datesError || appliesError)
    return (
      <div>
        {statusError?.message || datesError?.message || appliesError?.message}
      </div>
    );

  return (
    <main className="space-y-8 md:space-y-16">
      <StatsCards status={status} />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
        <OverallStatus status={status} />
        <RecentApplies applies={applies} />
      </div>
      <MonthlyApplications dates={dates} />
    </main>
  );
}

export default DashboardPage;
