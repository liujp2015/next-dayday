import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import bcrypt from "bcryptjs";
import { id } from "zod/v4/locales";
import { root } from "postcss";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    GitHub({}),
    Credentials({
      // 自定义名称，将在登录页显示
      name: "Credentials",
      credentials: {
        id: { label: "ID", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        name: { label: "Name", type: "text" },
        role: { label: "Role", type: "text" },
      },
      async authorize(credentials) {
        // if (!credentials?.email || !credentials?.password) {
        //   throw new Error("Missing credentials");
        // }
        // const user = await prisma.user.findUnique({
        //   where: { email: credentials.email as string },
        // });

        // if (!user) return null;

        // // 验证密码
        // const isValid = await bcrypt.compare(
        //   credentials.password as string,
        //   user.password
        // );

        // if (!isValid) return null;
        const user = { email: "test@test.com" };

        return {
          id: "1", // 必需（唯一标识）
          name: "1", // 可选
          email: user.email, // 可选
          // 其他自定义字段（如 role）
          role: "1",
        };
      },
    }),
  ], // 确保调用为 Provider 实例
  callbacks: {
    async session({ session, token }) {
      // 确保 token.sub 是字符串再赋值
      if (typeof token.sub === "string") {
        session.user.id = token.sub;
      } else {
        // 或者抛出错误、记录日志、设置默认值等
        session.user.id = "unknown";
      }

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.role = "test";
      }
      return token;
    },
  },
} satisfies NextAuthConfig;
