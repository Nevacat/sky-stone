import Container from "@/components/Container";
import Compare from "@/components/Home/Compare";
import ImageSlide from "@/components/Home/ImageSlide";
import PortfolioSection from "@/components/Home/PortfolioSection";
import ServiceSection from "@/components/Home/ServiceSection";
import Title from "@/components/Title";
import React from "react";

const Home = () => {
  return (
    <Container>
      <ImageSlide />
      <div className="pt-[100px] pb-40 flex justify-center items-center">
        <div className="max-w-[1200px] w-full">
          <Title text="CONTACT" />
          <div className="w-full text-center leading-relaxed mt-10">
            <p className="text-lg mb-4">24시간 문의 가능합니다.</p>
            <h1 className="text-3xl font-bold mb-8">
              TEL. 010-9155-3566 <br />
              E-MAIL. nevacattery217@naver.com
            </h1>
            <p className="text-xl">지금 바로 만나보세요!.<br/>날씨 좋은 계절에는 예약이 마감 될 수 있습니다.</p>
          </div>
        </div>
      </div>
      <ServiceSection img={'/service_1.webp'} title={'고객의 집을 내 집 처럼'} desc={'작업하는 모두가 내 집을 시공하는 마음가짐으로 작업에 임하여 하자없는 깔끔하고 만족스러운 결과물을 만듭니다.'} />
      <Compare/>
      <ServiceSection img={'/service_2.webp'} title={'평일 주말 구분없이'} desc={'기상 악화만 아니라면, 평일과 주말에 구분을 두지 않습니다. 빠른 시공을 위해 최선을 다합니다.'} reverse />
      <PortfolioSection/>
    </Container>
  );
};

export default Home;
