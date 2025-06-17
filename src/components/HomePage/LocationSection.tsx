import React from 'react';
import { Wind, Sun, Factory, Ship, Bus, Leaf, Users } from 'lucide-react';

const LocationSection = () => {
  return (
    <div className="w-full">
      {/* First Section - Overview with large background and left text overlay */}
      <section className="relative w-full h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-900 overflow-hidden">
        {/* Background pattern and visual elements */}
        <div className="absolute inset-0">
          {/* Background decorative elements */}
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-white/10 rounded-full"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-white/10 rounded-full"></div>
          <div className="absolute top-1/3 left-1/3 w-16 h-16 border-2 border-white/10 rounded-full"></div>
        </div>

        {/* Right side - Visual representation */}
        <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
          <div className="relative w-96 h-5/6 bg-gray-300/10 rounded-lg backdrop-blur-sm border border-white/20">
            {/* Wind turbines */}
            <div className="absolute top-12 right-12 flex flex-col items-center text-white">
              <Wind size={36} className="mb-3" />
              <span className="text-sm font-semibold tracking-wide">WIND GARDEN</span>
            </div>

            {/* Solar farm */}
            <div className="absolute top-24 right-20 flex flex-col items-center text-white">
              <Sun size={32} className="mb-3" />
              <span className="text-sm font-semibold tracking-wide">SOLAR FARM</span>
            </div>

            {/* Hydrogen plant */}
            <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white">
              <Factory size={36} className="mb-3" />
              <span className="text-sm font-semibold text-yellow-400 tracking-wide">GREEN HYDROGEN</span>
              <span className="text-sm font-semibold text-yellow-400 tracking-wide">PLANT</span>
            </div>

            {/* Shipping */}
            <div className="absolute bottom-12 left-12 flex flex-col items-center text-white">
              <Ship size={32} className="mb-3" />
              <span className="text-sm font-semibold tracking-wide">SHIPPING</span>
            </div>

            {/* Connection lines */}
            <div className="absolute inset-0">
              <svg className="w-full h-full">
                <line x1="70%" y1="20%" x2="55%" y2="70%" stroke="rgb(251, 191, 36)" strokeWidth="3" strokeDasharray="8,4" />
                <line x1="75%" y1="30%" x2="55%" y2="70%" stroke="rgb(251, 191, 36)" strokeWidth="3" strokeDasharray="8,4" />
                <line x1="50%" y1="70%" x2="30%" y2="85%" stroke="rgb(251, 191, 36)" strokeWidth="3" strokeDasharray="8,4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Left side - Text overlay */}
        <div className="absolute left-0 top-0 w-1/2 h-full flex items-center">
          <div className="p-16 max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-12 leading-tight">
              Located at Oxagon in Saudi Arabia's region of NEOM, NGHC is aligned with Saudi{' '}
              <span className="text-yellow-400">Vision 2030</span> and Saudi Green Initiative.
            </h1>
            
            <div className="space-y-8 text-white">
              <p className="text-2xl leading-relaxed">
                Operating entirely on around <span className="text-yellow-400 font-bold text-3xl">4 GW</span> of 
                renewable electricity, generated from dedicated on-site wind and solar plants.
              </p>
              
              <p className="text-2xl leading-relaxed">
                Covering an area of over <span className="text-yellow-400 font-bold text-3xl">300km²</span> of land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Impact */}
      <section className="w-full min-h-screen bg-gradient-to-br from-teal-900 via-blue-900 to-blue-800 flex flex-col justify-center items-center py-20 px-12">
        <div className="max-w-7xl w-full">
          <h2 className="text-5xl font-bold text-white mb-16 text-center leading-tight">
            Producing up to <span className="text-yellow-400">600 tonnes</span> of carbon-free hydrogen daily by the end of 2026
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mt-20">
            {/* Bus icon and text */}
            <div className="text-center text-white">
              <div className="w-32 h-32 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Bus size={48} className="text-teal-300" />
              </div>
              <p className="text-xl font-medium leading-relaxed">
                Enough to run around <span className="text-yellow-400 font-bold text-2xl">20,000</span> hydrogen-fueled buses.
              </p>
            </div>

            {/* Leaf icon and text */}
            <div className="text-center text-white">
              <div className="w-32 h-32 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Leaf size={48} className="text-green-400" />
              </div>
              <p className="text-xl font-medium leading-relaxed">
                Saving the world up to <span className="text-yellow-400 font-bold text-2xl">5 million tonnes</span> of CO₂ every year
              </p>
            </div>

            {/* Users icon and text */}
            <div className="text-center text-white">
              <div className="w-32 h-32 mx-auto mb-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                <Users size={48} className="text-blue-300" />
              </div>
              <p className="text-xl font-medium leading-relaxed">
                Creating <span className="text-yellow-400 font-bold text-2xl">300 jobs</span> when fully operational
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="px-12 py-4 bg-white text-blue-900 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors shadow-lg">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Third Section - Distribution */}
      <section className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-teal-900 to-blue-800 py-20 px-12">
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Global Distribution Network</h2>
          
          <div className="flex-1 relative">
            {/* Map container */}
            <div className="relative w-full h-96 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/20 overflow-hidden">
              {/* Europe outline */}
              <div className="absolute top-12 left-1/4 w-40 h-32 bg-white/15 rounded-xl"></div>
              
              {/* UK */}
              <div className="absolute top-8 left-1/5 w-12 h-16 bg-white/25 rounded-lg"></div>
              
              {/* Mediterranean Sea */}
              <div className="absolute top-32 left-1/3 w-48 h-20 bg-blue-400/20 rounded-full"></div>
              
              {/* Middle East / Arabian Peninsula */}
              <div className="absolute bottom-20 right-1/3 w-24 h-20 bg-white/15 rounded-lg"></div>

              {/* Location markers with labels */}
              <div className="absolute top-16 left-1/6">
                <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-semibold whitespace-nowrap">
                  Immingham (UK)
                </div>
              </div>

              <div className="absolute top-20 left-1/3">
                <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-semibold whitespace-nowrap">
                  Hamburg (GER)
                </div>
              </div>

              <div className="absolute top-24 left-2/5">
                <div className="w-4 h-4 bg-teal-400 rounded-full animate-pulse shadow-lg"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-white font-semibold whitespace-nowrap">
                  Rotterdam (NL)
                </div>
              </div>

              <div className="absolute bottom-24 right-1/4">
                <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse shadow-xl"></div>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
                  <div className="text-sm text-yellow-400 font-bold whitespace-nowrap">NEOM GREEN</div>
                  <div className="text-sm text-yellow-400 font-bold whitespace-nowrap">HYDROGEN</div>
                  <div className="text-sm text-yellow-400 font-bold whitespace-nowrap">COMPANY</div>
                </div>
              </div>

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path 
                  d="M 17% 20% Q 40% 10% 75% 75%" 
                  stroke="rgb(251, 191, 36)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeDasharray="12,6"
                  filter="url(#glow)"
                />
                <path 
                  d="M 33% 25% Q 50% 15% 75% 75%" 
                  stroke="rgb(251, 191, 36)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeDasharray="12,6"
                  filter="url(#glow)"
                />
                <path 
                  d="M 40% 30% Q 55% 20% 75% 75%" 
                  stroke="rgb(251, 191, 36)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeDasharray="12,6"
                  filter="url(#glow)"
                />
              </svg>
            </div>

            {/* Air Products partnership */}
            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <div className="text-green-400 font-bold text-xl tracking-wide">
                AIR PRODUCTS
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationSection;