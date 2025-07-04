"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { startTransition, useActionState } from "react";
import { signIn1 } from "@/actions/signIn";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters.",
  }),
});

export default function Page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      // ✅ 明确设置初始值
      email: "",
      password: "",
    },
  });
  const [state, formAction] = useActionState(signIn1, null);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const formData = new FormData();
    formData.append("email", data.email);

    startTransition(async () => {
      formAction(formData); // 手动触发 Action
    });
  }

  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign Up</Button>
            </CardAction>
          </CardHeader>
          {state?.message && (
            <div className="text-red-500">{state.message}</div>
          )}
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <FormField
                      name="email" // 指定字段名即可
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>邮箱</FormLabel>
                          <FormControl>
                            <Input placeholder="m@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid gap-2">
                    <FormField
                      name="password" // 指定字段名即可
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>密码</FormLabel>
                          <FormControl>
                            <Input type="password" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <CardFooter className="flex-col gap-2 mt-5 p-0">
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                  <Button variant="outline" className="w-full">
                    Login with Google
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
