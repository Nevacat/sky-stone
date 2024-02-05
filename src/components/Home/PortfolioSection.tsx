import React from 'react'
import Title from '../Title'
import PortfolioCard from './PortfolioCard'

const portfolioData = [
  {
    img: "/service_1.webp",
    title: "일반 돌",
    desc: "일반 돌에 대한 설명입니다.",
  },
  {
    img: "/service_1.webp",
    title: "하늘 스톤",
    desc: "일반 돌에 대한 설명입니다.",
  },
  {
    img: "/service_1.webp",
    title: "하늘 스톤",
    desc: "일반 돌에 대한 설명입니다.",
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