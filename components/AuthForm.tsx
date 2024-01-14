"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SingUpForm from "./SingUpForm";
import LoginForm from "./LoginForm";
import OAuthForm from "./OAuthForm";

function AuthForm() {
  return (
    <div className="w-full space-y-4">
      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="Signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm />
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
