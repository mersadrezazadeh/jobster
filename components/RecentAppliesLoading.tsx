import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

function RecentAppliesLoading() {
  return (
    <Card className="h-[481px]">
      <CardHeader className="flex flex-col gap-10">
        <Skeleton className="mx-auto h-10 w-64" />
        <Skeleton className="h-[340px] w-full" />
      </CardHeader>
    </Card>
  );
}

export default RecentAppliesLoading;
