import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Travel & Forex Services - Flight Booking, Forex Exchange | IAEC",
  description: "Complete travel services for students: flight booking, forex exchange, travel insurance, accommodation booking. Best rates for student travel needs.",
  keywords: "student travel services, flight booking, forex exchange, travel insurance, student accommodation, IAEC travel services, student forex rates"
};

const TravelForexPage = () => {
  return (
    <><main>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/all_images/travel_forex.jpg"
            alt="Travel & Forex Services"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
          <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">Travel & Forex Services</h1>
          <p className="text-2xl mb-8 text-white/90">Complete travel solutions for students - flights, forex, insurance, and accommodation at best rates</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#apply-now" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
              Start Your Travel Journey
            </a>
            <a href="#services" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
              View All Services
            </a>
          </div>
        </div>
    </section><section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">10,000+</h3>
              <p className="text-[#4a5568]">Students Assisted</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">50+</h3>
              <p className="text-[#4a5568]">Airline Partners</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">15+</h3>
              <p className="text-[#4a5568]">Currencies Supported</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">24/7</h3>
              <p className="text-[#4a5568]">Support Available</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
              <div className="text-center mb-4">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Flight Booking Services</h3>
              </div>
              <p className="text-[#4a5568] mb-4 text-center">
                Best airfare deals for students traveling abroad with flexible booking options and student discounts.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-[#1a202c] mb-2">Services Include:</h4>
                <ul className="text-[#4a5568] space-y-2 text-sm">
                  <li>• Student discount flights (up to 20% off)</li>
                  <li>• Flexible date change options</li>
                  <li>• Multi-city and stopover bookings</li>
                  <li>• Group booking discounts</li>
                  <li>• 24/7 booking support</li>
                  <li>• Free seat selection assistance</li>
                  <li>• Travel insurance integration</li>
                  <li>• Baggage allowance optimization</li>
                </ul>
              </div>
              <div className="bg-[#e6fffe] p-3 rounded text-center">
                <span className="text-[#08bcb4] font-semibold">Save up to ₹25,000 on student flights</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
              <div className="text-center mb-4">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💱</span>
                </div>
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Forex Exchange Services</h3>
              </div>
              <p className="text-[#4a5568] mb-4 text-center">
                Competitive forex rates for students with cash, forex cards, and wire transfer options.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-[#1a202c] mb-2">Currency Options:</h4>
                <ul className="text-[#4a5568] space-y-2 text-sm">
                  <li>• USD (US Dollar) - Best rates guaranteed</li>
                  <li>• GBP (British Pound)</li>
                  <li>• AUD (Australian Dollar)</li>
                  <li>• CAD (Canadian Dollar)</li>
                  <li>• EUR (Euro) - All European countries</li>
                  <li>• NZD (New Zealand Dollar)</li>
                  <li>• Student forex cards with chip & PIN</li>
                  <li>• Wire transfers for tuition payments</li>
                </ul>
              </div>
              <div className="bg-[#e6fffe] p-3 rounded text-center">
                <span className="text-[#08bcb4] font-semibold">Better rates than banks, zero margins</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
              <div className="text-center mb-4">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Travel Insurance</h3>
              </div>
              <p className="text-[#4a5568] mb-4 text-center">
                Comprehensive travel insurance coverage for students with medical, trip, and baggage protection.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-[#1a202c] mb-2">Coverage Options:</h4>
                <ul className="text-[#4a5568] space-y-2 text-sm">
                  <li>• Medical expenses up to $1,000,000</li>
                  <li>• Emergency evacuation coverage</li>
                  <li>• Trip cancellation/interruption</li>
                  <li>• Baggage loss and delay compensation</li>
                  <li>• Personal liability coverage</li>
                  <li>• Study interruption benefits</li>
                  <li>• Mental health coverage</li>
                  <li>• Pre-existing condition coverage</li>
                </ul>
              </div>
              <div className="bg-[#e6fffe] p-3 rounded text-center">
                <span className="text-[#08bcb4] font-semibold">Plans starting from ₹4,000/year</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
              <div className="text-center mb-4">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Accommodation Booking</h3>
              </div>
              <p className="text-[#4a5568] mb-4 text-center">
                Student housing solutions including university dormitories, shared apartments, and homestays.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-[#1a202c] mb-2">Accommodation Types:</h4>
                <ul className="text-[#4a5568] space-y-2 text-sm">
                  <li>• University residence halls</li>
                  <li>• Private student apartments</li>
                  <li>• Shared housing with students</li>
                  <li>• Homestay with local families</li>
                  <li>• Temporary accommodation for arrival</li>
                  <li>• Furnished and unfurnished options</li>
                  <li>• Near campus locations priority</li>
                  <li>• Budget-friendly options available</li>
                </ul>
              </div>
              <div className="bg-[#e6fffe] p-3 rounded text-center">
                <span className="text-[#08bcb4] font-semibold">Free booking assistance & guidance</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
              <div className="text-center mb-4">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">SIM Cards & Connectivity</h3>
              </div>
              <p className="text-[#4a5568] mb-4 text-center">
                International SIM cards and connectivity solutions for seamless communication abroad.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-[#1a202c] mb-2">Services Include:</h4>
                <ul className="text-[#4a5568] space-y-2 text-sm">
                  <li>• Pre-activated international SIM cards</li>
                  <li>• Country-specific data plans</li>
                  <li>• Pocket WiFi device rental</li>
                  <li>• International roaming activation</li>
                  <li>• WhatsApp/calling app setup</li>
                  <li>• Emergency contact services</li>
                  <li>• Data top-up assistance</li>
                  <li>• Phone unlocking services</li>
                </ul>
              </div>
              <div className="bg-[#e6fffe] p-3 rounded text-center">
                <span className="text-[#08bcb4] font-semibold">Stay connected from day one</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
              <div className="text-center mb-4">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-.4">
                  <span className="text-2xl">🎒</span>
                </div>
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Pre-departure Support</h3>
              </div>
              <p className="text-[#4a5568] mb-4 text-center">
                Complete pre-departure assistance to ensure smooth transition to your study destination.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold text-[#1a202c] mb-2">Support Services:</h4>
                <ul className="text-[#4a5568] space-y-2 text-sm">
                  <li>• Packing guidance and checklists</li>
                  <li>• Airport assistance and meet & greet</li>
                  <li>• Currency conversion calculations</li>
                  <li>• Banking setup guidance</li>
                  <li>• Local transport information</li>
                  <li>• Emergency contact details</li>
                  <li>• Cultural orientation sessions</li>
                  <li>• Document organization help</li>
                </ul>
              </div>
              <div className="bg-[#e6fffe] p-3 rounded text-center">
                <span className="text-[#08bcb4] font-semibold">Complete peace of mind</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-4">Ready to Start Your Journey?</h2>
            <p className="text-lg text-[#4a5568] mb-8">Get personalized travel and forex assistance from our expert team</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-[#08bcb4] !text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#069aa2] transition-all">
                Get Travel Quote
              </Link>
              <Link href="/services" className="border-2 border-[#08bcb4] text-[#08bcb4] px-8 py-4 rounded-lg font-semibold hover:bg-[#08bcb4] hover:text-white transition-all">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default TravelForexPage;
