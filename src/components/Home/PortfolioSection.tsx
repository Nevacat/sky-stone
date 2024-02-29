import React from 'react'
import Title from '../Title'
import PortfolioCard from './PortfolioCard'

const portfolioData = [
  {
    img: "/onyeon.webp",
    title: "온연",
    desc: "충남 예산에 위치한 프라이빗 온천으로 SNS에서 매우 핫한 명소이며 커플 온천으로 유명합니다.",
  },
  {
    img: "/cafe220v.webp",
    title: "카페 드 220볼트",
    desc: "춘천에 위치한 대형 카페로 고급스로운 인테리어와 풍미 있는 메뉴들로 인기를 끌고 있는 유명한 곳 입니다.",
  },
  {
    img: "/house.webp",
    title: "전원 주택",
    desc: "많은 전원 주택들이 하늘 스톤을 거쳐가며 퀄리티 높은 결과물에 매우 만족하고 있습니다.",
  },
]

const PortfolioSection = () => {
  return (
    <div className='max-w-[1200px] w-full flex justify-between py-40 gap-20 m-auto'>
      <div className='w-[200px]'>
        <Title text="PORTFOLIO" />
        <p className='text-2xl font-bold mt-10 break-keep'>20년 경험이 만든 결과물 입니다.</p>
      </div>
      <div className="flex gap-10">
        {
          portfolioData.map((data) => {
            return(
              <PortfolioCard img={data.img} title={data.title} desc={data.desc} />
            )
          })
        }
      </div>
    </div>
  )
}

export default PortfolioSection