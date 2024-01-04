import createSupabaseServerClient from "@/utils/supabase/server";
import { Button } from "./button";
import { signOut } from "@/utils/actions";

function SignOut() {
  return (
    <form action={signOut}>
      <Button>SignOut</Button>
    </form>
  );
}

export default SignOut;
