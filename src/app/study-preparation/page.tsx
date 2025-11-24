import StudyPreparationForm from '@/components/StudyPreparationForm';
import Image from 'next/image';
import Link from 'next/link';

const StudyPreparationPage = () => {
  return (
    <main>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/all_images/coaching.jpg"
            alt="Study Preparation"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
          <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">Study Preparation</h1>
          <p className="text-2xl mb-8 text-white/90">Your first step towards success.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#study-preparation-form" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
              Start Your Preparation
            </a>
            <Link href="/services/coaching" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
              View Test Details
            </Link>
          </div>
        </div>
      </section>
      <div id="study-preparation-form" className="container mx-auto px-4 py-20">
        <div className="mt-8 max-w-lg mx-auto">
          <StudyPreparationForm />
        </div>
      </div>
    </main>
  );
};

export default StudyPreparationPage;
