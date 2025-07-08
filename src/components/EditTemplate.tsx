"use client";
import { getTemplateList } from "@/actions/item";
import clsx from "clsx";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Search, SearchIcon } from "lucide-react"; // 或其他 Lucide 图标

const templateList = async () => {
  const res = await getTemplateList();
  console.log(res.data);
  return res;
};

export default function EditTemplate() {
  const [templateQueryModel, setTemplateQueryModel] = useState<string>("");
  const [templateQueryLoading, setTemplateQueryLoading] =
    useState<boolean>(false);
  const [templateQueryState, setTemplateQueryState] = useState({
    meta: { limit: 10, next: 0, hasNext: true },
    active: "input",
  });

  const [templateList, setTemplateList] = useState([]);
  const [switchTab, setSwitthTab] = useState<string>("");

  const templateScrollContainer = useRef<HTMLDivElement>(null);

  // 预制模板的搜索：关键字查询
  const templateQuerySelect = async (initFlag: boolean = false) => {
    if (templateQueryLoading!) return false;
    if (!templateQueryState.meta.hasNext) return false;

    // 重置搜索内容
    if (initFlag) {
      templateQueryState.meta = { limit: 10, next: 0, hasNext: true };
      setTemplateList([]);
    }

    const params = {
      limit: templateQueryState.meta.limit,
      next: templateQueryState.meta.next,
    };
    // params["input"] = templateQueryModel;
    // setTemplateQueryLoading(true);

    // const result = await axios.get(`/api/item/template`, { params });
    // if (result.status == 200 && result.data.data) {
    //   templateList.value = templateList.value.concat(result.data.data);
    //   templateQueryState.meta = result.data.meta;
    // }
    setTemplateQueryLoading(false);
  };

  const templateScroll = async () => {
    // const scrollHeight = templateScrollContainer.current?.scrollHeight;
    // const clientHeight = templateScrollContainer.current?.clientHeight;
    // const scrollTop = templateScrollContainer.current?.scrollTop;
    // if (scrollHeight - (scrollTop + clientHeight) <= 1) {
    // }
    const templateScrollContainerCurrent = templateScrollContainer.current;
    if (!templateScrollContainerCurrent) return;
    const { scrollHeight, clientHeight, scrollTop } =
      templateScrollContainerCurrent;
    if (scrollHeight - (scrollTop + clientHeight) <= 1) {
      templateQuerySelect();
    }
  };
  return (
    <div className="w-full flex h-screen border-r">
      <div className="w-24 border-r ">
        <div className="flex flex-col">
          <div className="py-4">
            <Link href="/" className="px-1 flex items-center">
              <img src="/logo.png" alt="logo" />
            </Link>
          </div>
          {/** 最外层容器 用于扩大点击范围*/}
          <div
            className={clsx("text-center cursor-pointer mt-2 py-4", {
              "bg-red-600": switchTab === "A",
            })}
            onClick={() => setSwitthTab("A")}
          >
            <div className="flex justify-center">
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2801"
                width="28"
                height="28"
              >
                <path
                  d="M734.016 723.104V640.32h-59.904v36.992l-35.712 9.696 15.712 57.792z m-59.904-246.4h59.904v81.792h-59.904z m59.904-180.896l-95.616 26.016 15.712 57.792 20-5.408v20.704h59.904z m132.096 468.896v36.992l-35.712 9.696 7.904 28.896 7.808 28.896 79.904-21.696v-82.784h-29.888z m-125.216 71.008l-89.504 24.288 7.904 28.896 7.808 28.992 89.504-24.384-7.808-28.896z m0-721.408l-89.504 24.288 7.904 28.896 7.808 28.896 89.504-24.288-7.808-28.896z m89.504-24.288l7.904 28.896 7.808 28.896 20-5.504v20.8h59.904V64z m35.712 193.376v120.288h59.904V283.392h-29.888z m0 240.704v120.288h59.904v-120.288h-29.888zM541.888 230.4l35.712-9.696-15.616-57.792-50.016 13.6L97.952 64v783.488L511.968 960l65.6-17.792-15.616-57.792-20 5.408v-114.592l35.712-9.696-15.712-57.792-20 5.408v-303.104l35.712-9.696-15.712-57.792-20 5.408V230.464z m-59.776 659.392L157.92 801.696V142.304L482.112 230.4v117.6l-192-52.192v427.296l192 52.192v114.496z m0-360.896v184.288l-132.192-35.904v-303.104l132.192 35.904v118.784z"
                  p-id="2802"
                ></path>
              </svg>
            </div>
            <div className="text-xs mt-1">模板</div>
          </div>
          <div className="text-center cursor-pointer  py-4">
            <div className="flex justify-center">
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2801"
                width="28"
                height="28"
              >
                <path
                  d="M734.016 723.104V640.32h-59.904v36.992l-35.712 9.696 15.712 57.792z m-59.904-246.4h59.904v81.792h-59.904z m59.904-180.896l-95.616 26.016 15.712 57.792 20-5.408v20.704h59.904z m132.096 468.896v36.992l-35.712 9.696 7.904 28.896 7.808 28.896 79.904-21.696v-82.784h-29.888z m-125.216 71.008l-89.504 24.288 7.904 28.896 7.808 28.992 89.504-24.384-7.808-28.896z m0-721.408l-89.504 24.288 7.904 28.896 7.808 28.896 89.504-24.288-7.808-28.896z m89.504-24.288l7.904 28.896 7.808 28.896 20-5.504v20.8h59.904V64z m35.712 193.376v120.288h59.904V283.392h-29.888z m0 240.704v120.288h59.904v-120.288h-29.888zM541.888 230.4l35.712-9.696-15.616-57.792-50.016 13.6L97.952 64v783.488L511.968 960l65.6-17.792-15.616-57.792-20 5.408v-114.592l35.712-9.696-15.712-57.792-20 5.408v-303.104l35.712-9.696-15.712-57.792-20 5.408V230.464z m-59.776 659.392L157.92 801.696V142.304L482.112 230.4v117.6l-192-52.192v427.296l192 52.192v114.496z m0-360.896v184.288l-132.192-35.904v-303.104l132.192 35.904v118.784z"
                  p-id="2802"
                ></path>
              </svg>
            </div>
            <div className="text-xs mt-1">模板</div>
          </div>
          <div className="text-center cursor-pointer mt-2 py-4">
            <div className="flex justify-center">
              <svg
                className="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="2801"
                width="28"
                height="28"
              >
                <path
                  d="M734.016 723.104V640.32h-59.904v36.992l-35.712 9.696 15.712 57.792z m-59.904-246.4h59.904v81.792h-59.904z m59.904-180.896l-95.616 26.016 15.712 57.792 20-5.408v20.704h59.904z m132.096 468.896v36.992l-35.712 9.696 7.904 28.896 7.808 28.896 79.904-21.696v-82.784h-29.888z m-125.216 71.008l-89.504 24.288 7.904 28.896 7.808 28.992 89.504-24.384-7.808-28.896z m0-721.408l-89.504 24.288 7.904 28.896 7.808 28.896 89.504-24.288-7.808-28.896z m89.504-24.288l7.904 28.896 7.808 28.896 20-5.504v20.8h59.904V64z m35.712 193.376v120.288h59.904V283.392h-29.888z m0 240.704v120.288h59.904v-120.288h-29.888zM541.888 230.4l35.712-9.696-15.616-57.792-50.016 13.6L97.952 64v783.488L511.968 960l65.6-17.792-15.616-57.792-20 5.408v-114.592l35.712-9.696-15.712-57.792-20 5.408v-303.104l35.712-9.696-15.712-57.792-20 5.408V230.464z m-59.776 659.392L157.92 801.696V142.304L482.112 230.4v117.6l-192-52.192v427.296l192 52.192v114.496z m0-360.896v184.288l-132.192-35.904v-303.104l132.192 35.904v118.784z"
                  p-id="2802"
                ></path>
              </svg>
            </div>
            <div className="text-xs mt-1">模板</div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full h-screen">
          <div className="pt-2 px-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                className=" focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 pl-8"
                type="email"
                placeholder="Email"
                value={templateQueryModel}
                onChange={(e) => setTemplateQueryModel(e.target.value)}
              />
            </div>
          </div>
          <div
            className="w-full h-[calc(100%-44px)] flex "
            ref={templateScrollContainer}
            onScroll={templateScroll}
          >
            <div>
              <img></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
