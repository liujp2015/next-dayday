import Nav from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Nav></Nav>
      {/** 最外层容器设置背景颜色*/}
      <div className=" bg-[#fff8f4] pt-20 bg-gradient-to-b from-[#FFF8F2] to-[#FFF8F2]/69">
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
              className="w-full" // 宽度撑满，高度自适应
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
            className="w-full" // 宽度撑满，高度自适应
          />
        </div>
        <div className="w-full lg:w-1/2 lg:text-left text-center">
          <h2 className="text-4xl">轻松编辑，简单操作</h2>

          <div className="mt-8 text-gray-600">
            拒绝千篇一律，让你的朋友圈与众不同...
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#FFF8F2] to-[#FFF8F2]/69 bg-[#fafafa]">
        <div className="max-w-screen-xl m-auto  lg:px-10 px-4 py-20 flex text-center lg:text-left ">
          <div className="w-full lg:w-1/2 ">
            <h2 className="text-4xl">每一天都是新鲜的，美好每时每刻</h2>
            <div className="mt-8 text-gray-600">
              每天新内容，有爱、有温度...
            </div>
          </div>
          <div className=" w-full lg:w-1/2">
            <Image
              src="/block-2.svg"
              alt="示例"
              width={500} // 使用 viewBox 的宽度
              height={500} // 使用 viewBox 的高度
              className="w-full" // 宽度撑满，高度自适应
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-[#FFF8F2] to-[#FFF8F2]/69 bg-[#fff8f4]">
        <div className="max-w-screen-xl m-auto flex flex-wrap items-center text-center px-4 lg:px-10 py-20">
          <div className="w-full">
            <h2 className="text-3xl">如何使用</h2>
          </div>

          <div className="w-full flex justify-between mt-10 flex-wrap">
            <div className="w-full lg:w-1/3 flex items-center">
              <div className="w-16 h-16 leading-[4rem] border-2 border-[#EB455F] rounded-full text-center font-bold">
                1
              </div>
              <div className="ml-6 text-left">
                <div className="text-xl font-bold">注册账号</div>
                <div className="mt-3 text-sm text-gray-600">
                  注册自己的专属账号
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex items-center">
              <div className="w-16 h-16 leading-[4rem] border-2 border-[#EB455F] rounded-full text-center font-bold">
                2
              </div>
              <div className="ml-6 text-left">
                <div className="text-xl font-bold">选择模板</div>
                <div className="mt-3 text-sm text-gray-600">多模板可供选择</div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex items-center">
              <div className="w-16 h-16 leading-[4rem] border-2 border-[#EB455F] rounded-full text-center font-bold">
                3
              </div>
              <div className="ml-6 text-left">
                <div className="text-xl font-bold">下载分享</div>
                <div className="mt-3 text-sm text-gray-600">轻松下载分享</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl flex items-center px-4 pb-10 m-auto lg:px-10  lg:pb-20">
        <div className="w-full lg:w-1/2">
          <Image
            src="/block-3.svg"
            alt="示例"
            width={500} // 使用 viewBox 的宽度
            height={500} // 使用 viewBox 的高度
            className="w-full" // 宽度撑满，高度自适应
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="text-center text-3xl pt-10 lg:text-4xl lg:pt-20 lg:text-left">
            马上体验，快人一步
          </h1>
          <div className="text-center lg:text-left mt-8 text-gray-600">
            即可打开新世界的大门
          </div>
          <div className="mt-10 flex justify-center lg:justify-start">
            <a className="bg-[#EB455F] text-white px-4 py-3 rounded w-48 text-center ">
              免费使用
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
