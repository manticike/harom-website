// app/page.tsx
import HeroSlider from "../components/Hero/HeroSlider";
import CareerSection from "../components/HomePage/CareerSection";
import CEOMessage from "../components/HomePage/CEOMessage";
import LocationSection from "../components/HomePage/LocationSection";
import PartnerGrid from "../components/HomePage/PartnerSection";
import VideoSection from "../components/HomePage/VideoSection";

export default function Home() {
  const slides = [
    {
      imageSrc: '/slide1.jpg',
      title: 'First Slide Title',
      description: 'This is the description for the first slide.',
      link: '/blog/first-post'
    },
    {
      imageSrc: '/slide2.jpg',
      title: 'Second Slide Title',
      description: 'This is the description for the second slide.',
      link: '/blog/second-post'
    },
    {
      imageSrc: '/slide3.jpg',
      title: 'Third Slide Title',
      description: 'This is the description for the third slide.',
      link: '/blog/third-post'
    }
  ];

  return (
    <main>
      <HeroSlider slides={slides} autoPlay={true} interval={5000} />
      {/* Rest of your page content */}
      <VideoSection />
      <CEOMessage />
      <PartnerGrid />
      <LocationSection />
      <CareerSection />
    </main>
  );
}