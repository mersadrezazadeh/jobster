import { Card, CardHeader } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

function UpdateJobLoading() {
  return (
    <Card>
      <CardHeader>
        <div className="mb-6 flex justify-between">
          <Skeleton className="h-10 w-40" />
          <Skeleton className="h-10 w-14" />
        </div>
        <div className="grid items-start gap-x-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
          <Skeleton className="h-10" />
        </div>
      </CardHeader>
    </Card>
  );
}

export default UpdateJobLoading;
