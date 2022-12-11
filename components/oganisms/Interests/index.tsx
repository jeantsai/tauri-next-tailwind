import React from "react";
import InterestCard from "../../molecules/InterestCard";

type Props = {};

const Interests = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col lg:flex-row justify-evenly items-center
    px-10">
      <h3 className="absolute top-24 text-gray-400 text-xl tracking-[20px]">
        兴趣
        </h3>
        <div className="w-full flex space-x-6 overflow-x-scroll snap-x snap-mandatory">
          <InterestCard
            image='/images/nextjs-react.png'
            title='Next.js 和 React'
            subTitle='用于生产的 React 开箱即用应用框架'
            items={[
              '注重开发者体验',
              '丰富多样的页面渲染策略',
              '对图片文件缺省进行优化处理',
              '简化路由为目录约定',
              '支持 CSS 模块化',
            ]}
           />
          <InterestCard
            image='/images/graalvm.png'
            title='GraalVM, Quarkus 和 Spring'
            subTitle='Java 向云原生迈出关键一步'
            items={[
              '应用启动时间进入毫秒时代',
              'Java 微服务自动伸缩成为可能',
              '内存占用大幅减少',
              '突破性能瓶颈',
              '必将带来巨大经济效益',
            ]}
           />
          <InterestCard
            image='/images/rust-wasm-2.webp'
            title='Rust 和 WebAssembly'
            subTitle='用于生产的 React 开箱即用应用框架'
            items={[
              '注重开发者体验',
              '丰富多样的页面渲染策略',
              '对图片文件缺省进行优化处理',
              '简化路由为目录约定',
              '支持 CSS 模块化',
            ]}
           />
          <InterestCard
            image=''
            title='Next.js 和 React'
            subTitle='用于生产的 React 开箱即用应用框架'
            items={[
              '注重开发者体验',
              '丰富多样的页面渲染策略',
              '对图片文件缺省进行优化处理',
              '简化路由为目录约定',
              '支持 CSS 模块化',
            ]}
           />
        </div>
    </div>
  );
};

export default Interests;
