import Image from "next/image";
import React from "react";
import Title from "../Title";

const ImageSlide = () => {
  return (
    <div className="w-full xl:h-[700px] xs:h-[200px]">
      <div className="relative w-full h-full ">
        <div className="absolute z-10 w-full h-full bg-black/55 flex justify-center items-center">
          <div className="flex flex-col justify-center items-center w-[1100px] xl:h-[300px] xs:h-[200px] text-center  border-x-[2.5px] border-white ">
            <Title text="ABOUT US" reverse />
            <h2 className="xl:text-5xl xs:text-base font-bold text-white leading-relaxed xl:mb-10 xs:mb-4">
              베테랑 노하우를 가진 기술과
              <br />
              섬세한 손길로 완벽한 결과물을 만듭니다.
            </h2>
            <p className="xl:text-lg xs:text-xs text-white">
              정성이 담긴 결과물은 시공사진을 참고해주세요.
            </p>
          </div>
        </div>
        <Image
          src="/intro_image.webp"
          alt="인트로 이미지"
          fill
          className="
        object-cover
        object-center
        w-full
        h-full
        top-0
      "
        />
      </div>
    </div>
  );
};

export default ImageSlide;
