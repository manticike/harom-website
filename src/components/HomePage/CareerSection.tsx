"use client";
import React from "react";
import ReadMoreButton from "../Hero/ReadMoreButton";
import Image from "next/image";

const CareerSection = () => {
  return (
    <section className="w-full">
      {/* Top section: text on colored background */}
      <div className="bg-[#133e27] w-full py-16 px-6 lg:px-40">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center">
          <p className="text-yellow-500 uppercase tracking-wide font-semibold mb-2">Careers</p>
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-6">
            Join our growing team of experts
          </h2>
          <p className="text-white text-base md:text-lg mb-6 max-w-lg">
            <strong>Explore rewarding career opportunities with us,</strong> 
            where innovation, collaboration, and personal growth are nurtured.
            <br /><br />
            Join us today and help build a greener tomorrow.
          </p>
          <ReadMoreButton 
            href="/careers"
            className="uppercase cursor-pointer bg-white text-green-950 font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
          > View Vacancies</ReadMoreButton>
        </div>
      </div>

      {/* Full-width image */}
      <div className="w-full aspect-[16/6] relative">
        <Image
          src="/careers-image.jpg"
          alt="Our team of experts on site"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default CareerSection;
