import Image from 'next/image';

interface Company {
  id: number;
  name: string;
  logo: string;       // logo image path
  background: string; // background image path
}

const companies: Company[] = [
  {
    id: 1,
    name: 'Company One',
    logo: '/partners/partner1-logo.png',
    background: '/partners/partner1.jpg',
  },
  {
    id: 2,
    name: 'Company Two',
    logo: '/partners/partner2-logo.png',
    background: '/partners/partner2.jpg',
  },
  {
    id: 3,
    name: 'Company Three',
    logo: '/partners/partner3-logo.png',
    background: '/partners/partner3.jpg',
  },
   {
    id: 4,
    name: 'Company Three',
    logo: '/partners/partner4-logo.png',
    background: '/partners/partner4.jpg',
  },
];

const PartnerGrid = () => {
  return (
    <section className="px-4 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="relative h-64 rounded-xl overflow-hidden shadow-md group"
            style={{
              backgroundImage: `url(${company.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300 flex flex-col items-center justify-center text-center text-white px-4">
              <Image
                src={company.logo}
                alt={company.name}
                width={80}
                height={80}
                className="mb-2 object-contain"
              />
              <h3 className="text-lg font-semibold">{company.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerGrid;
