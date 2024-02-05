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
              E-MAIL. XXXX@naver.com
            </h1>
            <p className="text-xl">이것은 완벽한 테스트를 위해 적은 문장입니다.</p>
          </div>
        </div>
      </div>
      <ServiceSection img={'/service_1.webp'} title={'이것은 테스트로 써놓은 어떤 것들에 대한 내용입니다.'} desc={'다양한 테스트 내용을 아무렇게나 쓰고 있음'} />
      <Compare/>
      <ServiceSection img={'/service_1.webp'} title={'이것은 테스트로 써놓은 어떤 것들에 대한 내용'} desc={'다양한 테스트 내용을 아무렇게나 쓰고 있음'} reverse />
      <PortfolioSection/>
    </Container>
  );
};

export default Home;
