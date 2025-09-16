
import Link from 'next/link';

const StudyAbroad = () => {
  const destinations = [
    { name: 'UK', href: '/study-abroad/uk' },
    { name: 'USA', href: '/study-abroad/usa' },
    { name: 'Germany', href: '/study-abroad/germany' },
    { name: 'Canada', href: '/study-abroad/canada' },
    { name: 'New Zealand', href: '/study-abroad/new-zealand' },
    { name: 'France', href: '/study-abroad/france' },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: '#08bcb4' }}>Study Abroad Destinations</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Link key={destination.name} href={destination.href}>
              <div className="block bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                {/* Placeholder: Image for {destination.name} */}
                <div className="w-full h-32 bg-gray-200 mb-4 flex items-center justify-center text-gray-500">{destination.name} Image</div>
                <h3 className="text-xl font-bold mb-2">{destination.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudyAbroad;
