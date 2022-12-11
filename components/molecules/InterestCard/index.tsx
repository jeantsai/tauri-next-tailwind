import React from "react";
import Image from 'next/image';

type InterestCardProps = {
  image: string,
  title: string,
  subTitle: string,
  items: string[],
};

const InterestCard = ({ image, title, subTitle, items}: InterestCardProps) => {
  return (
    <article
      className="flex flex-col flex-shrink-0 items-center snap-center
    w-[500px] lg:w-[900px]"
    >
      <Image
        className="w-32 h-32 rounded-full object-center object-cover
        lg:w-[200px] lg:h-[200px]"
        src={image}
        alt="next.js logo"
        width={200}
        height={200}
      ></Image>
      <div className="p-4">
        <h2 className="text-2xl text-orange-300">{title}</h2>
        <div className="text-lg text-gray-400">{subTitle}</div>
        <ul className="mt-2 text-gray-300">
          {items.map((v, k) => <li key={k}>{v}</li>)}
        </ul>
      </div>
    </article>
  );
};

export default InterestCard;
