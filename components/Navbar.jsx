"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed flex items-center gap-3 left-1/2 -translate-x-1/2 justify-center py-3">
      <div className="bg-slate-100/10 rounded-full py-2 px-4 flex gap-2">
        {pathname === "/" ? (
          <span className="py-1 px-2 text-blue-400">Home</span>
        ) : (
          <Link href="/" className="py-1 px-2 hover:text-blue-400">
            Home
          </Link>
        )}

        <Link href="/About" className="py-1 px-2 hover:text-blue-400">
          About
        </Link>
        <Link href="/Work" className="py-1 px-2 hover:text-blue-400">
          Work
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
