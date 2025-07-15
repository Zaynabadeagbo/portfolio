"use client";

import { RxHamburgerMenu } from "react-icons/rx";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HeaderComponent = () => {
  const [toggleMobileNav, setToggleMobileNav] = useState(false);
  const currentPage = usePathname();

  const handleToggleMobileNav = () => {
    setToggleMobileNav(!toggleMobileNav);
  };

  return (
    <header className="w-full flex items-center justify-between h-[86px]">
      <div className="w-fit flex items-center-safe justify-start">
        <Link href="/">
          <h1 className="font-bold text-xl text-black">ZEE-HOME</h1>
        </Link>
      </div>
      <div className="w-full flex sm:hidden items-center justify-end px-2.5 relative">
        <button type="button" onClick={handleToggleMobileNav}>
          <RxHamburgerMenu size="30px" height="18px" />
        </button>
        {toggleMobileNav && (
          <div className="w-[360px] p-6 mx-auto absolute top-7 right-6 z-10 bg-white shadow-lg">
            <nav className="w-full flex flex-col items-center justify-between gap-6">
              <Link
                className="text-[#000000] text-xl font-medium cursor-pointer"
                href="/work"
              >
                Works
              </Link>
              <Link
                className="text-[#000000] text-xl font-medium cursor-pointer"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="text-[#000000] text-xl font-medium cursor-pointer"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
      <nav className="w-[236px] hidden sm:flex items-center justify-between ">
        <Link
          className={` ${
            currentPage.includes("work") ? "text-[#FF6464]" : "text-[#000000]"
          } text-xl font-medium cursor-pointer`}
          href="/work"
        >
          Works
        </Link>
        <Link
          className={` ${
            currentPage.includes("blog") ? "text-[#FF6464]" : "text-[#000000]"
          } text-xl font-medium cursor-pointer`}
          href="/blog"
        >
          Blog
        </Link>
        <Link
          className={` ${
            currentPage.includes("contact") ? "text-[#FF6464]" : "text-[#000000]"
          } text-xl font-medium cursor-pointer`}
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;