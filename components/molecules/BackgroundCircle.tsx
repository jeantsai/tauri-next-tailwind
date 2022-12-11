import React from "react";

type Props = {};

const BackgroundCircle = (props: Props) => {
  return (
    <div className="flex relative justify-center items-center">
      {/* <div className="absolute border border-gray-500 rounded-full w-[200px] h-[200px] animate-pulse mt-48" /> */}
      <div className="absolute border border-rose-300 rounded-full w-[200px] h-[200px] animate-ping mt-48" />
      <div className="absolute border border-gray-500 rounded-full w-[600px] h-[600px] animate-pulse mt-48" />

    </div>
  );
};

export default BackgroundCircle;
