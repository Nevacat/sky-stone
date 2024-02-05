import Image from "next/image";
import React from "react";
import NavItem from "./NavItem";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="relative z-10 w-full">
      <Link href="/" className="w-full flex justify-center py-5">
        <Image src="/sky-logo.webp" alt="로고" width={288} height={162} />
      </Link>
      <hr className="w-[1280px] h-0.5 bg-gray-300 mx-auto mb-5" />
      <NavItem />
    </div>
  );
};

export default Navbar;
