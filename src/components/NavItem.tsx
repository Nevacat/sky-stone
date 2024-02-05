"use client"
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const links = [
  {
    name: '시공사진',
    href: '/photos'
  },
  {
    name: '자제정보',
    href: '/about'
  },
  {
    name: '채용정보',
    href: '/recruit'
  },
  {
    name: '문의하기',
    href: '/contact'
  }
]

const NavItem = () => {

  const pathname = usePathname()

  return (
    <ul className='text-md flex justify-center gap-40 w-full items-center'>
      {
        links.map((link, index) => {
          return(
            <li key={index} className={`text-center text-[18px] font-medium cursor-pointer
              hover:text-[#1bc3e0] transition duration-300 ease-in-out
              ${pathname === link.href ? 'border-b-2 border-[#1bc3e0]' : ''}
            `}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          )
        })
      }
    </ul>
  )
}

export default NavItem