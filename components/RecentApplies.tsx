import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type RecentAppliesProps = {
  applies: { id: string; company: string; position: string }[];
};

function RecentApplies({ applies }: RecentAppliesProps) {
  return (
    <section>
      <Card className="bg-muted pt-6">
        <CardTitle className="text-center text-4xl font-semibold">
          Recent Applies
        </CardTitle>
        <CardContent>
          <ScrollArea className="mt-10 h-72 rounded-md bg-card">
            <div className="p-4">
              {applies.map((apply) => (
                <>
                  <p
                    key={apply.id}
                    className="grid grid-cols-[1fr,0.3fr] justify-between gap-2"
                  >
                    <span className="text-md">{apply.position}</span>
                    <span className="text-sm text-muted-foreground">
                      {apply.company}
                    </span>
                  </p>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </section>
  );
}

export default RecentApplies;
