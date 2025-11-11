'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from 'react';



const CoachingPage = () => {
  const applyNowRef = useRef<HTMLAnchorElement>(null);
  const coursesRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
      const element = document.getElementById(targetId || '');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const currentApplyNowRef = applyNowRef.current;
    const currentCoursesRef = coursesRef.current;

    if (currentApplyNowRef) {
      currentApplyNowRef.addEventListener('click', handleScroll);
    }
    if (currentCoursesRef) {
      currentCoursesRef.addEventListener('click', handleScroll);
    }

    return () => {
      if (currentApplyNowRef) {
        currentApplyNowRef.removeEventListener('click', handleScroll);
      }
      if (currentCoursesRef) {
        currentCoursesRef.removeEventListener('click', handleScroll);
      }
    };
  }, []);

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
        <a href="#test-preparation-section" ref={applyNowRef} className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
          Start Your Coaching Journey
        </a>
        <a href="#courses-section" ref={coursesRef} className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
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

      <div id="courses-section" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">IELTS Coaching</h3>
          <p className="text-[#4a5568] mb-4">
            International English Language Testing System preparation for global university admissions.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Course Features:</h4>
            <ul className="text-[#4a5568] space-y-1 text-sm">
              <li>• Comprehensive modules for Listening, Reading, Writing, and Speaking</li>
              <li>• Extensive practice tests and mock exams</li>
              <li>• Personalized feedback and doubt-clearing sessions</li>
              <li>• Vocabulary and grammar building exercises</li>
              <li>• Strategies for achieving target band scores</li>
            </ul>
          </div>

        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">TOEFL Coaching</h3>
          <p className="text-[#4a5568] mb-4">
            Test of English as a Foreign Language preparation for North American university admissions.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Course Features:</h4>
            <ul className="text-[#4a5568] space-y-1 text-sm">
              <li>• Integrated skills approach for Reading, Listening, Speaking, and Writing</li>
              <li>• Practice with TOEFL-specific question types</li>
              <li>• Strategies for effective note-taking and summarizing</li>
              <li>• Simulated test environment practice</li>
              <li>• Grammar and pronunciation refinement</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Target Scores:</h4>
            <p className="text-[#4a5568] text-sm">80+ for most universities</p>
          </div>

        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">PTE Coaching</h3>
          <p className="text-[#4a5568] mb-4">
            Pearson Test of English preparation for quick and accurate English proficiency assessment.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Course Features:</h4>
            <ul className="text-[#4a5568] space-y-1 text-sm">
              <li>• Focus on all 20 item types of PTE Academic</li>
              <li>• AI-powered scoring and feedback for practice tests</li>
              <li>• Strategies for speaking, writing, reading, and listening sections</li>
              <li>• Time management techniques for the exam</li>
              <li>• Access to official PTE practice materials</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Target Scores:</h4>
            <p className="text-[#4a5568] text-sm">58+ for most universities</p>
          </div>

        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Duolingo Coaching</h3>
          <p className="text-[#4a5568] mb-4">
            Duolingo English Test preparation for convenient and accessible university admissions.
          </p>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Course Features:</h4>
            <ul className="text-[#4a5568] space-y-1 text-sm">
              <li>• Adaptive test strategies</li>
              <li>• Interactive practice exercises</li>
              <li>• Vocabulary and grammar enhancement</li>
              <li>• Speaking and writing feedback</li>
              <li>• Full-length mock tests</li>
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold text-[#1a202c] mb-2">Target Scores:</h4>
            <p className="text-[#4a5568] text-sm">110+ for most universities</p>
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

      <div id="test-preparation-section" className="text-center">
        <h2 className="text-3xl font-bold text-[#1a202c] mb-4">Ready to Start Your Test Preparation?</h2>
        <p className="text-lg text-[#4a5568] mb-8">Join thousands of successful students who achieved their target scores with IAEC coaching</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-[#08bcb4] !text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#069aa2] transition-all">
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
