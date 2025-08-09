import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className=" fixed flex items-center gap-3 left-1/2 -translate-x-1/2  justify-center py-3 ">
      <div className=" border-2 border-gray-200 rounded-full py-2 px-4 flex gap-2 text-black">
        <Link href="/" className="py-1 px-2 hover:text-blue-400">
          Home
        </Link>
        <Link className="py-1 px-2 hover:text-blue-400" href="/About">
          About
        </Link>

        <Link className="py-1 px-2 hover:text-blue-400" href="/Work">
          Work
        </Link>
      </div>
    </div>
  );
};

export default Navbar;