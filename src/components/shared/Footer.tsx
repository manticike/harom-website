import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-lg font-semibold text-gray-500">
        <div>
          <ul className="space-y-2">
            <li><a href="/about">About</a></li>
            <li><a href="/insights">News & Insights</a></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li><a href="/leadership">Leadership</a></li>
            <li><a href="/newsroom">Newsroom</a></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li><a href="/partners">Partners</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li><a href="/hydrogen">Why Green Hydrogen?</a></li>
            <li><a href="/plant">The Plant</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Logo + Social */}
      <div className="w-full bg-[#133e27] mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between text-white text-sm">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Link
            href="/"
          >
            <Image 
            src="/logo.jpeg"
            alt="harom logo"
            width={120}
            height={48}
          />
          </Link>
        </div>

        {/* Social */}
        <div className="text-center md:text-right">
          <p className="mb-2">FOLLOW NGHC ON SOCIAL MEDIA</p>
          <div className="flex gap-4 justify-center md:justify-end">
            <a href="#" className="w-8 h-8 rounded-full bg-[#002f3f] flex items-center justify-center text-white">📷</a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#002f3f] flex items-center justify-center text-white">X</a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#002f3f] flex items-center justify-center text-white">▶</a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#002f3f] flex items-center justify-center text-white">in</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#133e27] text-white text-sm px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-4 mb-2 md:mb-0">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Use</a>
          <a href="/cookies">Cookie Policy</a>
        </div>
        <div>© {new Date().getFullYear()} NEOM Green Hydrogen Company</div>
      </div>
    </footer>
  );
};

export default Footer;
