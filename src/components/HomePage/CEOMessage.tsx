import React from 'react';
import Image from 'next/image';
import ReadMoreButton from '../Hero/ReadMoreButton';

const CEOMessage = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* CEO Message Header */}
        <div className="text-center mb-12">
          <p className="text-sm justify-start font-medium text-gray-600 tracking-wide uppercase mb-4">
            CEO MESSAGE
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            Our Vision is to Lead the World in its Transition to a Carbon-Free Future
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CEO Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              {/* Placeholder for CEO image - replace src with actual image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                      <Image 
                    src="/ceo.jpg"
                    alt="Our CEO"
                    fill
                     />
                  </div>
      
                </div>
              </div>
              
              {/* CEO Info Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-lg">
                <h3 className="font-bold text-gray-900 text-lg">WESAM Y. ALGHAMDI</h3>
                <p className="text-sm text-gray-600 font-medium">CHIEF EXECUTIVE OFFICER</p>
                <p className="text-sm text-gray-500">NEOM GREEN HYDROGEN COMPANY</p>
              </div>
            </div>
          </div>

          {/* Quote and Content */}
          <div className="space-y-6">
            {/* Quote Icon */}
            <div className="text-6xl text-red-300 font-serif leading-none">"</div>
            
            {/* Quote Text */}
            <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
              NGHC is leading the global energy transition from Saudi Arabia and in line with Saudi Vision 2030. By harnessing the power of nature, our strong partnerships, and innovative technology, we are striving to build a carbon free world for future generations.
            </blockquote>
            
            {/* Closing Quote */}
            <div className="text-right">
              <span className="text-6xl text-red-300 font-serif leading-none">"</span>
            </div>

            {/* Learn More Button */}
            <div className="pt-6">
          <ReadMoreButton 
            href="/careers"
            children="View Vacancies"
            className="uppercase bg-[#133e27] cursor-pointer text-white font-semibold px-6 py-3 rounded-full hover:bg-yellow-600 transition"
          />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEOMessage;