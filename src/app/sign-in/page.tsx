"use client";

import { signIn } from "@/actions/signIn";
import React, { startTransition, useActionState } from "react";

import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignButton from "@/components/sign-button";

const signInSchema = z.object({
  name: z.string().min(6, "最小长度为6").max(10, "最大程度为10"),
});

type FormData = z.infer<typeof signInSchema>;

export default function Page() {
  const [state, formAction] = useActionState(signIn, null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  });
  const onSubmit = (data: FormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    startTransition(() => {
      formAction(formData); // 手动触发 Action
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        {errors.name && <p>{errors.name.message}</p>}
        <button type="submit">提交</button>
      </form>
    </div>
  );
}
