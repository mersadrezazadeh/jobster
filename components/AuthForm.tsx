"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SingUpForm from "./SingUpForm";
import SignInForm from "./SignInForm";
import OAuthForm from "./OAuthForm";

function AuthForm() {
  return (
    <div className="w-full space-y-5">
      <Tabs defaultValue="signin" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="Signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SignInForm />
        </TabsContent>
        <TabsContent value="Signup">
          <SingUpForm />
        </TabsContent>
      </Tabs>

      <OAuthForm />
    </div>
  );
}

export default AuthForm;
