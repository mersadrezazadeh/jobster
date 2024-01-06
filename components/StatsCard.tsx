import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function StatsCard({ title, value }: { title: string; value: number }) {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="capitalize">{title}</CardTitle>
        <CardDescription className="mt-[0px!important] text-4xl font-extrabold text-primary">
          {value}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default StatsCard;
