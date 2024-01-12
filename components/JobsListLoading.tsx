import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

function JobsListLoading() {
  return (
    <>
      <Card>
        <CardHeader className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-5 w-20" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="h-8 w-12" />
            <Skeleton className="h-8 w-12" />
          </div>
        </CardHeader>
      </Card>
    </>
  );
}

export default JobsListLoading;
