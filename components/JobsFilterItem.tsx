import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "./ui/label";

type JobsFilterItemProps = {
  name: string;
  labelText: string;
  items: string[];
};

function JobsFilterItem({ name, labelText, items }: JobsFilterItemProps) {
  return (
    <div className="row-start-2">
      <Label htmlFor={name}>{labelText}</Label>
      <Select name={name} defaultValue="All">
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {items.map((value) => (
            <SelectItem key={value} value={value}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default JobsFilterItem;
