import MockTestForm from '@/components/MockTestForm';
import Image from 'next/image';

const MockTestPage = () => {
  return (
    <main>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/all_images/coaching.jpg"
            alt="Mock Test"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
          <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">Free Mock Test</h1>
          <p className="text-2xl mb-8 text-white/90">Practice for IELTS, TOEFL, GRE, GMAT, SAT, PTE</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#mock-test-form" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
              Take Your Mock Test
            </a>
            <a href="#test-details" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
              View Test Details
            </a>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 py-20">
        <div className="mt-8 max-w-lg mx-auto">
          <MockTestForm />
        </div>
      </div>
    </main>
  );
};

export default MockTestPage;
