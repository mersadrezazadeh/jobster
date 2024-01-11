import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

function GoBack({ path }: { path: string }) {
  const router = useRouter();

  return (
    <Button onClick={() => router.push(`/${path}`)}>
      <ArrowRight />
    </Button>
  );
}

export default GoBack;
