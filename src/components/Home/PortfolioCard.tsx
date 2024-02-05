import Image from "next/image";
import React from "react";

interface PortfolioCardProps {
  img: string;
  title: string;
  desc: string;
}

const PortfolioCard = ({ img, title, desc }: PortfolioCardProps) => {
  return (
    <div className="shadow-xl min-h-[380px]
      hover:translate-y-[-10px] transition-all duration-300 ease-in-out overflow-hidden
    ">
      <div className="w-[250px] h-[210px] relative">
        <Image src={img} alt="포트폴리오 이미지" fill />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
