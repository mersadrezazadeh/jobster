import MonthlyApplicationsLoading from "@/components/MonthlyApplicationsLoading";
import OverallStatusLoading from "@/components/OverallStatusLoading";
import RecentAppliesLoading from "@/components/RecentAppliesLoading";
import StatsLoadingCard from "@/components/StatsLoadingCard";

function loading() {
  return (
    <div className="space-y-8 md:space-y-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatsLoadingCard />
        <StatsLoadingCard />
        <StatsLoadingCard />
        <StatsLoadingCard />
        <StatsLoadingCard />
        <StatsLoadingCard />
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4">
        <OverallStatusLoading />
        <RecentAppliesLoading />
      </div>
      <MonthlyApplicationsLoading />
    </div>
  );
}

export default loading;
