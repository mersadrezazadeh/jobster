import { Card, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function CreateJobLoading() {
  return (
    <Card>
      <Skeleton className="ml-8 mt-8 h-10 w-64" />
      <CardHeader className="grid items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
        <Skeleton className="h-10" />
      </CardHeader>
    </Card>
  );
}

export default CreateJobLoading;
