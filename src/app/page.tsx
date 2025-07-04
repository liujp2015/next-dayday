import Nav from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      {/** 最外层容器设置背景颜色*/}
      <div className=" bg-gray-400 pt-20">
        {/** 内层容器*/}
        <div className="max-w-screen-xl flex items-center px-4 pb-10 m-auto lg:px-10  lg:pb-20">
          <div className="w-full lg:w-1/2">
            <h1 className="text-center text-3xl pt-10 lg:text-5xl lg:pt-20 lg:text-left">
              每日朋友圈
            </h1>
            <div className="text-center lg:text-left mt-8 text-gray-600">
              每日名言、节日祝福、朋友圈文案配图，打造个性化朋友圈。
            </div>
            <div className="mt-10 flex justify-center lg:justify-start">
              <a className="bg-[#EB455F] text-white px-4 py-3 rounded w-48 text-center ">
                免费使用
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <Image
              src="/main.svg"
              alt="示例"
              width={500} // 使用 viewBox 的宽度
              height={500} // 使用 viewBox 的高度
              className="w-full max-w-screen-md m-auto" // 宽度撑满，高度自适应
            />
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl  lg:px-10 px-4 py-20 flex lg:flex-row flex-col-reverse m-auto items-center">
        <div className="w-full lg:w-1/2 lg:pr-20">
          <Image
            src="/block-1.svg"
            alt="示例"
            width={500} // 使用 viewBox 的宽度
            height={500} // 使用 viewBox 的高度
            className="w-full max-w-screen-md m-auto" // 宽度撑满，高度自适应
          />
        </div>
        <div className="w-full lg:w-1/2 lg:text-left text-center">
          <h2 className="text-4xl">轻松编辑，简单操作</h2>

          <div className="mt-8 text-gray-600">
            拒绝千篇一律，让你的朋友圈与众不同...
          </div>
        </div>
      </div>
    </>
  );
}
