"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setHoveredLink(null);
  };

  const navLinks = [
    { name: "Home", href: "/", image: "/home-image.jpg" },
    { name: "Products", href: "/products", image: "/product-image.jpg" },
    { name: "About", href: "/about", image: "/aboutUs-image.jpg" },
    { name: "Contact", href: "/contact", image: "/contact-image.jpg" },
    { name: "Careers", href: "/careers", image: "/careers-image.jpg" }
  ];

  const defaultImage = "/home-image.jpg";

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Transparent navbar with glass morphism effect */}
      <nav className="flex items-center justify-between w-full py-8 px-6 md:py-12 md:px-12 lg:py-6 lg:px-40">
        <div>
          <Link href="/" className="flex items-start">
            <Image 
              src="/logo.jpeg"
              alt="Harom fertilizer's logo"
              width={120}
              height={40}
              className="w-24 lg:w-32"
            />
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="cursor-pointer bg-white/90 p-2 rounded-full border-none shadow-sm hover:shadow-md transition-all"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX className="w-6 h-6 text-black" /> : <FiMenu className="w-6 h-6 text-black" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 z-40" onClick={toggleMenu}>
          <div 
            className="fixed top-0 left-0 w-full bg-teal-500 shadow-xl z-50 py-8 px-6 md:py-12 md:px-12 lg:py-12 lg:px-40 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-8 md:mb-12">
              <Link href="/" className="flex items-start" onClick={() => setIsOpen(false)}>
                <Image 
                  src="/logo.jpeg"
                  alt="Harom fertilizer's logo"
                  width={160}
                  height={53}
                  className="w-32 lg:w-40"
                />
              </Link>
            </div>

            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 lg:pr-8 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white text-xl md:text-2xl lg:text-3xl font-medium py-3 md:py-4 hover:text-yellow-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              <div className="w-full lg:w-1/2 flex items-center justify-center mt-8 lg:mt-0">
                <Image
                  src={hoveredLink 
                    ? navLinks.find(link => link.name === hoveredLink)?.image || defaultImage
                    : defaultImage}
                  alt="Menu visual"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg transition-opacity duration-300 w-full max-w-md"
                  style={{
                    opacity: hoveredLink ? 1 : 0.8,
                    transform: hoveredLink ? 'scale(1.02)' : 'scale(1)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;