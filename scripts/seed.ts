// scripts/seed.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 添加示例数据
  await prisma.item.createMany({
    data: [
      {
        source: {
          preview: "http://localhost:3334/template/preset/template-230001.png",
          json: {
            attrs: {
              width: 279.2134831460674,
              height: 497,
              scaleX: 0.9979919678714859,
              scaleY: 0.9979919678714859,
            },
            className: "Stage",
            children: [
              {
                attrs: {},
                className: "Layer",
                children: [
                  {
                    attrs: {
                      width: 280,
                      height: 498,
                      name: "image",
                      draggable: true,
                      imageSource:
                        "http://localhost:3334/template/20230129.jpg",
                    },
                    className: "Image",
                  },
                  {
                    attrs: {
                      enabledAnchors: ["middle-left", "middle-right"],
                    },
                    className: "Transformer",
                  },
                  {
                    attrs: {
                      x: 72.96611297095083,
                      y: 30.8611670020121,
                    },
                    className: "Transformer",
                  },
                  {
                    attrs: {
                      x: 25.90712443890237,
                      y: 30.861167002012067,
                      text: "想\n\n都\n是\n问\n题",
                      fontFamily: "font23001",
                      fill: "rgba(0, 0, 0, 1)",
                      fontSize: 30,
                      draggable: true,
                    },
                    className: "Text",
                  },
                  {
                    attrs: {
                      x: 76.9711332715507,
                      y: 29.85915492957749,
                      text: "做\n\n都\n是\n答\n案",
                      fontFamily: "font23001",
                      fill: "#000000",
                      fontSize: 30,
                      draggable: true,
                    },
                    className: "Text",
                  },
                ],
              },
            ],
          },
        },
        table: "template", // 新增字段
      },
      {
        source: {
          preview:
            "http://localhost:3334/template/text/preview/text_preview_2023021101.png?imageView2/2/w/200",
          config: [
            {
              x: 100,
              y: 100,
              text: "双击编辑文字",
              fontFamily: "font23002",
              fill: "#000000",
              fontSize: 30,
              draggable: true,
            },
          ],
        },
        title: "标题粗体",
        table: "text",
      },
      {
        source: {
          preview:
            "http://localhost:3334/template/text/preview/text_preview_2023021102.png?imageView2/2/w/200",
          config: [
            {
              x: 100,
              y: 100,
              text: "双击编辑文字",
              fontFamily: "font23002",
              fill: "#000000",
              fontSize: 18,
              draggable: true,
            },
          ],
        },
        title: "正文普通",
        table: "text",
      },
      {
        title: "描边镂空粗体",
        source: {
          preview:
            "http://localhost:3334/template/text/preview/text_preview_2023020701.png?imageView2/2/w/200",
          config: [
            {
              y: 100,
              stroke: "#3C5EF3",
              fillAfterStrokeEnabled: true,
              fill: "#ffffff",
              draggable: true,
              strokeWidth: 7,
              x: 100,
              fontSize: 30,
              text: "描边",
            },
          ],
        },
        table: "text",
      },
      {
        title: "质感背景填充粗体",
        source: {
          preview:
            "http://localhost:3334/template/text/preview/text_preview_2023020702.png?imageView2/2/w/200",
          config: [
            {
              x: 100,
              y: 100,
              text: "质感",
              fontSize: 30,
              fontFamily: "font23001",
              draggable: true,
              fillPatternImage:
                "http://localhost:3334/template/text/fill/text_bg_23020701.png",
            },
          ],
        },
        table: "text",
      },
      {
        title: "渐变颜色填充",
        source: {
          preview:
            "http://localhost:3334/template/text/preview/text_preview_2023020703.png?imageView2/2/w/200",
          config: [
            {
              y: 100,
              fillLinearGradientStartPoint: {
                x: 0,
                y: 0,
              },
              fillLinearGradientEndPoint: {
                x: 150,
                y: 150,
              },
              fontFamily: "font23002",
              draggable: true,
              x: 100,
              fontSize: 30,
              fillLinearGradientColorStops: [0, "#fd2d79", 1, "#febe52"],
              text: "双击编辑文字",
            },
          ],
        },
        table: "text",
      },
      {
        title: "叠加力量粗体",
        source: {
          preview:
            "http://localhost:3334/template/text/preview/text_preview_2023020704.png?imageView2/2/w/200",
          config: [
            {
              x: 102,
              y: 102,
              text: "力量",
              fontSize: 30,
              fill: "#FFEF00",
            },
            {
              x: 100,
              y: 100,
              text: "力量",
              fontSize: 30,
              fill: "#000000",
            },
          ],
        },
        table: "text",
      },
      {
        title: "青春粗体阳光",
        source: {
          preview:
            "http://localhost:3334/template/text/preview/text_preview_2023020705.png?imageView2/2/w/200",
          config: [
            {
              x: 100,
              y: 100,
              text: "青春",
              fontFamily: "font23001",
              fontSize: 30,
              draggable: true,
              fillPatternImage:
                "http://localhost:3334/template/text/fill/text_bg_2023020901.png",
            },
          ],
        },
        table: "text",
      },
      {
        title: "daydaymoment标志Logo",
        source: {
          preview:
            "http://localhost:3334/template/material/daydaymoment.png??imageView2/2/w/200",
          url: "http://localhost:3334/template/material/daydaymoment.png?imageslim",
        },
        table: "material",
      },
      {
        title: "太空火箭上升宇航员",
        source: {
          preview:
            "http://localhost:3334/template/material/2023020615.png?imageView2/2/w/200",
          url: "http://localhost:3334/template/material/2023020615.png?imageslim",
        },
        table: "material",
      },
      {
        title: "撒花开心小女孩可爱",
        source: {
          preview:
            "http://localhost:3334/template/material/2023020619.png?imageView2/2/w/200",
          url: "http://localhost:3334/template/material/2023020619.png?imageslim",
        },
        table: "material",
      },
      {
        title: "日历便签提示工作",
        source: {
          preview:
            "http://localhost:3334/template/material/2023020620.png?imageView2/2/w/200",
          url: "http://localhost:3334/template/material/2023020620.png?imageslim",
        },
        table: "material",
      },
    ],
  });

  console.log("数据添加成功");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
