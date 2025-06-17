import Link from 'next/link';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-lg font-semibold text-gray-500">
        <div>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/insights">News & Insights</Link></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li><Link href="/leadership">Leadership</Link></li>
            <li><Link href="/newsroom">Newsroom</Link></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li><Link href="/partners">Partners</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            <li><Link href="/hydrogen">Why Green Hydrogen?</Link></li>
            <li><Link href="/plant">The Plant</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
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
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/cookies">Cookie Policy</Link>
        </div>
        <div>© {new Date().getFullYear()} NEOM Green Hydrogen Company</div>
      </div>
    </footer>
  );
};

export default Footer;
