import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "@/components/CustomFormField";
import { Form, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { updateUser } from "@/utils/actions";
import { toast } from "./ui/use-toast";
import { Loader2, Save } from "lucide-react";
import { cn } from "@/lib/utils";

function UpdatePasswordForm() {
  const form = useForm<>({
    resolver:zodResolver(),
    defaultValues:{
      password:""
      confirmPassword:""
    }
  })

  return <Form></Form>;
}

export default UpdatePasswordForm;
