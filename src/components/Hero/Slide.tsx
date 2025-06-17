"use client";

import React from "react";
import Image from "next/image";
import ReadMoreButton from "./ReadMoreButton";
import { SlideProps } from "@/types";

const Slide: React.FC<SlideProps> = ({
  imageSrc,
  title,
  description,
  link,
  isActive
}) => {
  return (
    <div className="relative w-full h-screen flex-shrink-0">
      {/* Image container with full viewport height */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={title || 'Hero slide image'}
          fill
          className="object-cover"
          priority={isActive}
          quality={100}
          sizes="100vw"
          onError={(e) => {
            console.error('Image failed to load:', imageSrc);
            (e.target as HTMLImageElement).style.display = 'none';
          }}
        />
      </div>
      
      {/* Content overlay positioned bottom left */}
      <div className="absolute inset-0 bg-black/40 flex items-end justify-start p-6 md:p-12">
        <div className="text-left text-white max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl mb-4 md:mb-6">
            {description}
          </p>
          <ReadMoreButton 
            href={link} 
            className="text-base bg-[#133e27] cursor-pointer px-6 py-2 md:px-8 md:py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;