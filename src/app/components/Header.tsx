import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function home(){
  return(
    <div className="flex justify-between items-center p-8 px-10 z-20">
      <div>
        <Image
        src="/3.png"
        alt=""
        height={175}
        width={175} />
      </div>
      <div>
      <ul className="flex space-x-8">
        
                  <li className="relative group">
                    <Link href="/" className="cursor-pointer">
                      About us
                    </Link>
                    <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </li>
                  <li className="relative group">
                    <Link href="/" className="cursor-pointer">
                      Services
                    </Link>
                    <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </li>
                  <li className="relative group">
                    <Link href="/" className="cursor-pointer">
                      Projects
                    </Link>
                    <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </li>
                  <li className="relative group">
                    <Link href="/" className="cursor-pointer">
                      Reviews
                    </Link>
                    <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </li>
                  <li className="relative group">
                    <Link href="/" className="cursor-pointer">
                      Contact us
                    </Link>
                    <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </li>
                </ul>
      </div>
    </div>
  )
}