'use client'
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Header = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center">
      <div className="main-container inner">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={132} height={40} />
        </Link>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link className={pathname === "/" ? "text-white" : "text-gray-500"} href="/">Home</Link>
            </li>
            <li>
              <p className="text-gray-500">search</p>
            </li>
            <li>
              <Link className={pathname === "/coins" ? "text-white" : "text-gray-500"} href="/coins">Tokens</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
