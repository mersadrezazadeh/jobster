import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

function MonthlyApplicationsLoading() {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-4">
        <Skeleton className="mx-auto h-10 w-64" />
        <Skeleton className="h-[300px] w-full" />
      </CardHeader>
    </Card>
  );
}

export default MonthlyApplicationsLoading;
