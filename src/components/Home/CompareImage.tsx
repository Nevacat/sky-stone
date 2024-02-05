import Image from 'next/image'
import React from 'react'

interface CompareImageProps {
  img: string
  text: string
  sky: boolean
}

const CompareImage = ({img,text,sky}:CompareImageProps) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className={`${sky?"text-xl font-bold":"text-md text-neutral-500"}`}>{text}</p>
      <div className={`relative ${sky?"border-2 border-[#1bc3e0]":""} w-[450px] h-[240px]`}>
        <Image src={img} alt="비교 이미지" fill className="object-cover" />
      </div>
    </div>
  )
}

export default CompareImage