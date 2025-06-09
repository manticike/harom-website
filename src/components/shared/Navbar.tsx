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
    setHoveredLink(null); // Reset hover state when menu closes
  };

  const navLinks = [
    { name: "Home", href: "/", image: "/home-image.jpg" },
    { name: "Products", href: "/products", image: "/product-image.jpg" },
    { name: "About", href: "/about", image: "/aboutUs-image.jpg" },
    { name: "Contact", href: "/contact", image: "/contact-image.jpg" },
    { name: "Careers", href: "/careers", image: "/careers-image.jpg" }
  ];

  // Default image when no link is hovered
  const defaultImage = "/home-image.jpg";

  return (
    <div className="relative">
      <nav className="flex items-center justify-between w-full bg-transparent py-20 px-40">
        {/* Logo */}
        <div>
          <Link href="/" className="flex items-start">
            <Image 
              src="/logo.jpeg"
              alt="Harom fertilizer's logo"
              width={120}
              height={40}
            />
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={toggleMenu}
          className="cursor-pointer bg-white p-2 rounded-full border-none shadow-sm hover:shadow-md transition-all z-50"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <FiX className="w-6 h-6 text-black" /> : <FiMenu className="w-6 h-6 text-black" />}
        </button>
      </nav>

      {/* Full-width dropdown menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu}>
          <div 
            className="fixed top-0 left-0 w-full bg-teal-500 shadow-xl z-50 py-12 px-40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Logo at top of dropdown - now with original color */}
            <div className="mb-12">
              <Link href="/" className="flex items-start" onClick={() => setIsOpen(false)}>
                <Image 
                  src="/logo.jpeg"
                  alt="Harom fertilizer's logo"
                  width={160}
                  height={53}
                />
              </Link>
            </div>

            <div className="flex">
              {/* Links section - left side */}
              <div className="w-1/2 pr-8 flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-white text-3xl font-medium py-4 hover:text-yellow-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              
              {/* Image section - right side - now changes on hover */}
              <div className="w-1/2 flex items-center justify-center transition-all duration-300">
                <Image
                  src={hoveredLink 
                    ? navLinks.find(link => link.name === hoveredLink)?.image || defaultImage
                    : defaultImage}
                  alt="Menu visual"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg transition-opacity duration-300"
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