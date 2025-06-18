// components/LocationSection.tsx
import React from 'react';
import Image from 'next/image';
import ReadMoreButton from '../Hero/ReadMoreButton';

const LocationSection = () => {
  return (
    <div className="bg-[#002B3D] text-white">
      {/* Section 1 */}
      <section className="relative w-full min-h-screen">
        <Image
          src="/product-image.jpg" 
          alt="Green Hydrogen Map"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 via-black/50 to-transparent px-6 md:px-16 py-20 flex flex-col justify-center">
          <div className="max-w-3xl">
            <p className="text-lg mb-4">
              Located at Oxagon in Saudi Arabia’s region of NEOM, NGHC is aligned with Saudi{' '}
              <span className="text-yellow-400 font-semibold">Vision 2030</span> and Saudi Green Initiative.
            </p>
            <p className="text-lg mb-4">
              Operating entirely on around <span className="text-yellow-400 font-semibold">4 GW</span> of renewable electricity,
              generated from dedicated on-site wind and solar plants.
            </p>
            <p className="text-lg">
              Covering an area of over <span className="text-yellow-400 font-semibold">300km²</span> of land.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#012936] text-white py-20 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          Producing up to 600 tonnes of carbon-free hydrogen daily by the end of 2026
        </h2>
        <div className="grid md:grid-cols-3 gap-12 text-lg">
          <div>
            <div className="mb-4 text-teal-300 text-4xl">🚌</div>
            <p>Enough to run around 20,000 hydrogen-fueled buses.</p>
          </div>
          <div>
            <div className="mb-4 text-teal-300 text-4xl">🌱</div>
            <p>Saving the world up to 5 million tonnes of CO₂ every year</p>
          </div>
          <div>
            <div className="mb-4 text-teal-300 text-4xl">👥</div>
            <p>Creating 300 jobs when fully operational</p>
          </div>
        </div>
         <ReadMoreButton 
            href="/careers"
            className="mt-4 uppercase cursor-pointer bg-white text-[#012936] font-semibold px-6 py-3 rounded-full hover:bg-yellow-400 transition"
          >View Vacancies</ReadMoreButton>
      </section>
    </div>
  );
};

export default LocationSection;
