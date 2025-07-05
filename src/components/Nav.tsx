"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

export default function Nav() {
  const { data: session, status } = useSession();
  console.log("==============", session?.user);
  return (
    <div className="flex justify-between w-full py-4 px-4 fixed">
      <a className="flex h-14 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          className="h-10 lg:h-14  object-contain"
          width={240}
          height={240}
        />
        <span className="ml-2 text-xl font-bold  lg:block">天天朋友圈</span>
      </a>
      <div className="flex gap-10 items-center ">
        <Link href="/" className="hidden lg:block">
          主页
        </Link>
        <Link href="/sign-in" className="hidden lg:block">
          登录
        </Link>
        <Link href="/sign-up" className="hidden lg:block">
          注册
        </Link>
      </div>
    </div>
  );
}
