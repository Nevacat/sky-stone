import React from "react";
import Title from "../Title";
import CompareImage from "./CompareImage";

const ImageData = [
  {
    img: "/service_1.webp",
    text: "일반 돌",
    sky: false,
  },
  {
    img: "/service_1.webp",
    text: "하늘 스톤",
    sky: true,
  },
];

const Compare = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-40">
      <Title text="COMPARE" />
      <p className="mb-20">하늘 스톤은 일정한 간격과 깔끔한 라인만을 추구합니다.</p>
      <div className="w-full flex justify-center items-center gap-[100px]">
        {ImageData.map((data) => {
          return (
            <CompareImage img={data.img} text={data.text} sky={data.sky} />
          );
        })}
      </div>
    </div>
  );
};

export default Compare;
