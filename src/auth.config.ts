import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    GitHub({}),
    Credentials({
      // 自定义名称，将在登录页显示
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // 这里添加你的验证逻辑
        const user = await validateUser(
          credentials.email,
          credentials.password
        );

        if (user) {
          // 返回的对象将保存在JWT中
          return user;
        } else {
          return null;
        }
      },
    }),
  ], // 确保调用为 Provider 实例
} satisfies NextAuthConfig;
