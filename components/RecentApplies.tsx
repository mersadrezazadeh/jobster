import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "./ui/badge";

type RecentAppliesProps = {
  applies: { id: string; company: string; position: string; mode: string }[];
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
            <div className="p-2 py-4">
              {applies.map((apply) => (
                <>
                  <p
                    key={apply.id}
                    className="grid grid-cols-[62px,1fr,0.2fr] justify-between"
                  >
                    <Badge
                      variant={
                        (apply.mode === "Full-Time" && "default") ||
                        (apply.mode === "Part-Time" && "violet") ||
                        (apply.mode === "Internship" && "green") ||
                        null
                      }
                      className="mr-1 justify-center whitespace-nowrap px-1 text-[11px]"
                    >
                      {apply.mode}
                    </Badge>
                    <span className="text-sm">{apply.position}</span>
                    <span className="text-xs font-medium text-muted-foreground">
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
