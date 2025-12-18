import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "About us", href: "../about-us" },
    { name: "Services", href: "/" },
    { name: "Projects", href: "/" },
    { name: "Reviews", href: "/" },
    { name: "Contact us", href: "../contact-us" },
  ];

  return (
    <header className="relative z-30">
      <div className="flex justify-between items-center p-4 pr-6 md:p-8 md:px-10">
        {/* Logo */}
        <div className="w-32 md:w-40">
          <Image src="/logo.png" alt="Rodem Logo" height={175} width={175} />
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <RxHamburgerMenu className="text-3xl text-white" />
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <Link href={link.href} className="cursor-pointer text-white">
                {link.name}
              </Link>
              <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:hidden bg-white/10 backdrop-blur-2xl z-40 transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top Bar */}
        <div className="flex justify-between items-center p-6">
          <div>
            <Image src="/logo.png" alt="Rodem Logo" height={70} width={120} />
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
            className="text-white text-3xl"
          >
            <IoMdClose />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col divide-y divide-white/30 mt-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex justify-between items-center px-6 py-4 text-white text-lg font-medium hover:text-gray-300 transition-colors duration-300"
            >
              <span>{link.name}</span>
              <HiArrowNarrowRight className="ml-4 text-white text-xl" />
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
