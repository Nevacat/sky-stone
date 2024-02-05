import React from 'react'

interface TitleProps {
  text: string
  reverse?: boolean
}

const Title = ({text,reverse}:TitleProps) => {
  return (
    <span className={`
      ${reverse? "text-white border-t-2 border-white":"text-black border-t-2 border-black"}
      mb-10
      font-bold
      text-xl
    `}>
      {text}
    </span>
  )
}

export default Title