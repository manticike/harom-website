'use client';

import { useState } from 'react';
import ReadMoreButton from '../Hero/ReadMoreButton';

const VideoSection = () => {
  return (
    <section className="bg-[#e6edf5] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-[#003049] leading-snug mb-8">
            World’s Largest Green Hydrogen Plant <br className="hidden sm:block" /> Reaches 80% Completion
          </h2>

          <div className="text-[#003049] space-y-5 text-base leading-relaxed">
            <p>
              Construction of our green hydrogen plant is advancing rapidly, with milestone equipment being received and installed,
              including wind turbines, hydrogen storage vessels, electrolysers, the cold box and pipe racks.
            </p>
            <p>
              We are proud to report that we reached 80% completion at the start of Q1 2025 across all sites – the green hydrogen facility,
              the wind garden, the solar farm and the transmission grid.
            </p>
            <p>
              Construction continues at pace – the plant remains on track with our 4 GW solar and wind power generation sites to be completed by mid-2026,
              followed by commissioning of the electrolysers, with expected product availability in 2027.
            </p>
          </div>

          <div className="mt-8">
            <ReadMoreButton href="/">LEARN MORE</ReadMoreButton>
          </div>
        </div>

        {/* Video Embed */}
        <div className="w-full overflow-hidden rounded-xl shadow-lg border border-[#d0dae3] min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
  <iframe
    src="https://www.youtube.com/watch?v=-EzlAitDjQU&list=RD-EzlAitDjQU&start_radio=1"
    title="Green Hydrogen Video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="w-full h-full rounded-xl"
  />
</div>

      </div>
    </section>
  );
};

export default VideoSection;
