import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Test Preparation Coaching - IELTS, TOEFL, GRE, GMAT Training | IAEC",
  description: "Expert coaching for IELTS, TOEFL, PTE, GRE, GMAT, SAT. Experienced trainers, proven methods, high success rates. Prepare for overseas education with IAEC.",
  keywords: "IELTS coaching, TOEFL training, GRE preparation, GMAT coaching, PTE training, SAT preparation, test coaching Hyderabad, IAEC coaching services"
};

const CoachingPage = () => {
  return (
<main>
  <section className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0">
      <Image
        src="/images/all_images/coaching.jpg"
        alt="Test Preparation Coaching"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
      <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">Test Preparation Coaching</h1>
      <p className="text-2xl mb-8 text-white/90">Expert coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests with proven success rates</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#apply-now" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
          Start Your Coaching Journey
        </a>
        <a href="#courses" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
          View All Courses
        </a>
      </div>
    </div>
  </section>

  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-[#08bcb4]">15,000+</h3>
          <p className="text-[#4a5568]">Students Trained</p>
        </div>
        <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-[#08bcb4]">24+</h3>
          <p className="text-[#4a5568]">Years Experience</p>
        </div>
        <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-[#08bcb4]">90%+</h3>
          <p className="text-[#4a5568]">Success Rate</p>
        </div>
        <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-[#08bcb4]">8+</h3>
          <p className="text-[#4a5568]">Training Centers</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">IELTS Coaching</h3>
          <p className="text-[#4a5568] mb-4">
            International English Language Testing System preparation for academic and general training modules.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Course Features:</h4>
            <ul className="text-[#4a5568] space-y-1 text-sm">
              <li>• Comprehensive all 4 skills training</li>
              <li>• Speaking practice with native speakers</li>
              <li>• Writing task correction and feedback</li>
              <li>• Regular mock tests and progress tracking</li>
              <li>• Small batch sizes (max 15 students)</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Target Scores:</h4>
            <p className="text-[#4a5568] text-sm">6.5+ for most universities, 7.0+ for top institutions</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#08bcb4] font-semibold">Duration: 6-8 weeks</span>
            <span className="text-[#08bcb4] font-semibold">Fee: ₹15,000</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">TOEFL Coaching</h3>
          <p className="text-[#4a5568] mb-4">
            Test of English as a Foreign Language preparation for US university admissions.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Course Features:</h4>
            <ul className="text-[#4a5568] space-y-1 text-sm">
              <li>• Computer-based test simulation</li>
              <li>• Academic English focus</li>
              <li>• Integrated skills practice</li>
              <li>• Note-taking strategies</li>
              <li>• Time management techniques</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Target Scores:</h4>
            <p className="text-[#4a5568] text-sm">80+ for undergraduate, 100+ for graduate programs</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#08bcb4] font-semibold">Duration: 6-8 weeks</span>
            <span className="text-[#08bcb4] font-semibold">Fee: ₹16,000</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">PTE Coaching</h3>
          <p className="text-[#4a5568] mb-4">
            Pearson Test of English Academic preparation with computer-based assessment focus.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Course Features:</h4>
            <ul className="text-[#4a5568] space-y-1 text-sm">
              <li>• AI-based scoring system practice</li>
              <li>• Microphone and headset training</li>
              <li>• Template-based writing approach</li>
              <li>• Integrated skills assessment</li>
              <li>• Quick results preparation</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Target Scores:</h4>
            <p className="text-[#4a5568] text-sm">65+ overall with no band below 58</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#08bcb4] font-semibold">Duration: 4-6 weeks</span>
            <span className="text-[#08bcb4] font-semibold">Fee: ₹14,000</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">GRE Coaching</h3>
          <p className="text-[#4a5568] mb-4">
            Graduate Record Examinations preparation for graduate school admissions.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Course Features:</h4>
            <ul className="text-[#4a5568] space-y-1 text-sm">
              <li>• Quantitative reasoning strategies</li>
              <li>• Verbal reasoning and vocabulary</li>
              <li>• Analytical writing practice</li>
              <li>• Data interpretation skills</li>
              <li>• Adaptive test strategies</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Target Scores:</h4>
            <p className="text-[#4a5568] text-sm">320+ for competitive programs</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#08bcb4] font-semibold">Duration: 8-10 weeks</span>
            <span className="text-[#08bcb4] font-semibold">Fee: ₹25,000</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">GMAT Coaching</h3>
          <p className="text-[#4a5568] mb-4">
            Graduate Management Admission Test preparation for MBA programs.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Course Features:</h4>
            <ul className="text-[#4a5568] space-y-1 text-sm">
              <li>• Quantitative and verbal reasoning</li>
              <li>• Data sufficiency problems</li>
              <li>• Critical reasoning skills</li>
              <li>• Reading comprehension</li>
              <li>• Integrated reasoning section</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Target Scores:</h4>
            <p className="text-[#4a5568] text-sm">700+ for top business schools</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#08bcb4] font-semibold">Duration: 10-12 weeks</span>
            <span className="text-[#08bcb4] font-semibold">Fee: ₹28,000</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">SAT Coaching</h3>
          <p className="text-[#4a5568] mb-4">
            Scholastic Assessment Test preparation for undergraduate admissions in US.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Course Features:</h4>
            <ul className="text-[#4a5568] space-y-1 text-sm">
              <li>• Evidence-based reading and writing</li>
              <li>• Mathematics (algebra, geometry, trigonometry)</li>
              <li>• Essay writing (optional)</li>
              <li>• Test-taking strategies</li>
              <li>• College Board official materials</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Target Scores:</h4>
            <p className="text-[#4a5568] text-sm">1400+ for competitive colleges</p>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#08bcb4] font-semibold">Duration: 8-10 weeks</span>
            <span className="text-[#08bcb4] font-semibold">Fee: ₹22,000</span>
          </div>
        </div>
      </div>

      <div className="bg-[#f7fafc] p-8 rounded-lg mb-12">
        <h2 className="text-3xl font-bold text-[#1a202c] mb-6 text-center">Why Choose IAEC Coaching?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👨‍🏫</span>
            </div>
            <h4 className="font-semibold text-[#1a202c] mb-2">Expert Trainers</h4>
            <p className="text-[#4a5568] text-sm">Certified trainers with 10+ years experience</p>
          </div>
          <div className="text-center">
            <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h4 className="font-semibold text-[#1a202c] mb-2">Proven Methods</h4>
            <p className="text-[#4a5568] text-sm">Tested strategies with 90%+ success rate</p>
          </div>
          <div className="text-center">
            <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h4 className="font-semibold text-[#1a202c] mb-2">Flexible Batches</h4>
            <p className="text-[#4a5568] text-sm">Weekend, weekday, and crash course options</p>
          </div>
          <div className="text-center">
            <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h4 className="font-semibold text-[#1a202c] mb-2">Online Support</h4>
            <p className="text-[#4a5568] text-sm">Practice materials and mock tests online</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#1a202c] mb-4">Ready to Start Your Test Preparation?</h2>
        <p className="text-lg text-[#4a5568] mb-8">Join thousands of successful students who achieved their target scores with IAEC coaching</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-[#08bcb4] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#069aa2] transition-all">
            Enroll Now
          </Link>
          <Link href="/mock-test" className="border-2 border-[#08bcb4] text-[#08bcb4] px-8 py-4 rounded-lg font-semibold hover:bg-[#08bcb4] hover:text-white transition-all">
            Take Free Mock Test
          </Link>
        </div>
      </div>
    </div>
  </section>
</main>
  );
};

export default CoachingPage;
