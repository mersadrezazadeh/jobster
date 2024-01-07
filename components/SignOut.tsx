import { LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { signOut } from "@/utils/actions";

function SignOut() {
  return (
    <form action={signOut}>
      <Button variant="destructive">
        <LogOut />
      </Button>
    </form>
  );
}

export default SignOut;
