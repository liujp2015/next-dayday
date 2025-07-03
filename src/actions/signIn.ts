// "use server";
// export async function signIn(
//   prevState: { message: string } | null,
//   formData: FormData
// ) {
//   console.log(formData.get("name"));
//   return {
//     message: "Code must be longer",
//   };
// }
"use server";
import { prisma } from "@/prisma";
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("请输入有效的邮箱地址"),
  password: z.string().min(8, "密码至少需要8个字符"),
});

export async function signIn(
  prevState: { message: string } | null | undefined,
  formData: FormData
) {
  // 1. 从 FormData 提取数据
  const rawData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  // 2. Zod 验证
  const result = loginSchema.safeParse(rawData);

  if (!result.success) {
    // 返回验证错误
    return {
      errors: result.error.flatten().fieldErrors,
      message: "表单验证失败",
    };
  }
  // 3. 验证通过后处理业务逻辑
  try {
    const user = await prisma.user.findUnique({
      where: { email: result.data.email },
    });

    if (!user) {
      return { message: "用户不存在" };
    }

    // ...密码验证等其他逻辑

    // redirect("/dashboard");
  } catch (error) {
    return { message: "登录失败，请稍后再试" };
  }
}
