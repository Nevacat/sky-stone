import Image from "next/image";
import React from "react";
import Title from "../Title";

interface ServiceSectionProps {
  reverse?: boolean;
  title: string;
  desc?: string;
  img: string;
}

const ServiceSection = ({ reverse, title, desc, img }: ServiceSectionProps) => {
  return (
    <div className={`w-full h-full py-6 flex ${reverse?"flex-row-reverse":"flex-row"} justify-center items-center`}>
      <div className="relative max-w-[1200px] max-h-[800px] w-[960px] h-[640px]">
        <Image
          src={img}
          alt="서비스 이미지"
          fill
          classNmame="
          object-cover
          object-center
          w-full
          h-full
        "
        />
      </div>
      <div className={`w-[746px] h-[670px] overflow-hidden py-8 ${reverse?"mr-[-240px]":"ml-[-240px]"} relative`}>
        <div
          className={`
        w-full
        h-full
        bg-[#fcfcfc]
        shadow-[4px_2px_40px_0px_rgba(30,183,223,0.2)]
        ${reverse?"skew-x-[10deg] translate-x-[-65px]":"skew-x-[-10deg] translate-x-[65px]"}

      `}
        >
        </div>
        <div className={`
          absolute
          w-[400px]
          h-full
          flex
          flex-col
          justify-center
          items-start
          top-0
          ${reverse?"right-60":"left-60"}
          z-10
        `}>
          <Title text="SERVICE" />
          <h2 className="text-2xl font-bold mb-10">{title}</h2>
          <p className="text-md font-medium ">{desc}</p>
        </div>
        </div>
    </div>
  );
};

export default ServiceSection;
