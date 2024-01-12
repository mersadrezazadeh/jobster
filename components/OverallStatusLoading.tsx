import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

function OverallStatusLoading() {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-10">
        <Skeleton className="mx-auto h-10 w-64" />
        <div className="flex items-center justify-center">
          <Skeleton className="size-64 rounded-full" />
        </div>
      </CardHeader>
    </Card>
  );
}

export default OverallStatusLoading;
