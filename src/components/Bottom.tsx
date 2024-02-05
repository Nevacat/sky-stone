import Image from 'next/image'
import React from 'react'

const Bottom = () => {

  const year = new Date().getFullYear()

  return (
    <div className='w-full min-h-[285px] h-full bg-[#fafafa] flex items-center justify-between px-20'>
      <Image src='/sky-logo.webp' alt='로고' width={248} height={142}/>
      <div className='text-right text-lg text-[#181818]'>
        <p>대표자: 박상욱</p>
        <p>Tel. 010 9155 3566</p>
        <p>Mail. test@naver.com</p>
        <p className='mt-10'>
          {
            `ⓒ ${year} 하늘스톤. ALL RIGHT RESERVED`
          }
        </p>
      </div>
    </div>
  )
}

export default Bottom