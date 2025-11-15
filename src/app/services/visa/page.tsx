'use client';

import Image from "next/image";
import { useEffect, useRef } from 'react';

const VisaPage = () => {
  const applyNowRef = useRef<HTMLAnchorElement>(null);
  const servicesRef = useRef<HTMLAnchorElement>(null);

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
    const currentServicesRef = servicesRef.current;

    if (currentApplyNowRef) {
      currentApplyNowRef.addEventListener('click', handleScroll);
    }
    if (currentServicesRef) {
      currentServicesRef.addEventListener('click', handleScroll);
    }

    return () => {
      if (currentApplyNowRef) {
        currentApplyNowRef.removeEventListener('click', handleScroll);
      }
      if (currentServicesRef) {
        currentServicesRef.removeEventListener('click', handleScroll);
      }
    };
  }, []);

  return (
    <main>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/all_images/visa.jpg"
            alt="Student Visa Services"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
          <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">Student Visa Services</h1>
          <p className="text-2xl mb-8 text-white/90">Expert visa assistance with 95% success rate for USA, UK, Australia, Canada, and European countries</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#visa-service-section" ref={applyNowRef} className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
              Start Your Visa Journey
            </a>
            <a href="#services-section" ref={servicesRef} className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
              View All Services
            </a>
          </div>
        </div>
    </section><section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">95%</h3>
              <p className="text-[#4a5568]">Visa Success Rate</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">25,000+</h3>
              <p className="text-[#4a5568]">Visas Processed</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">11+</h3>
              <p className="text-[#4a5568]">Countries Covered</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">24+</h3>
              <p className="text-[#4a5568]">Years Experience</p>
            </div>
          </div>

          <div id="services-section" className="mb-16">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-8 text-center">Country-Specific Visa Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">USA F1 Visa</h3>
                <p className="text-[#4a5568] mb-4">Complete F1 student visa processing for US universities with DS-160 form assistance and interview preparation.</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1a202c] mb-2">Services Include:</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li>• DS-160 form completion</li>
                    <li>• SEVIS fee payment guidance</li>
                    <li>• I-20 document verification</li>
                    <li>• Embassy appointment scheduling</li>
                    <li>• Mock interview sessions</li>
                    <li>• Document preparation checklist</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#08bcb4] font-semibold">Processing: 3-4 weeks</span>
                  <span className="text-[#08bcb4] font-semibold">Success: 96%</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">UK Tier 4 Visa</h3>
                <p className="text-[#4a5568] mb-4">Student visa assistance for UK universities with CAS verification and comprehensive documentation support.</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1a202c] mb-2">Services Include:</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li>• CAS document verification</li>
                    <li>• Online application completion</li>
                    <li>• Financial requirement calculation</li>
                    <li>• TB test arrangement</li>
                    <li>• Biometric appointment booking</li>
                    <li>• Priority service option</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#08bcb4] font-semibold">Processing: 3-4 weeks</span>
                  <span className="text-[#08bcb4] font-semibold">Success: 94%</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Australia Subclass 500</h3>
                <p className="text-[#4a5568] mb-4">Student visa processing for Australian universities with GTE statement preparation and health examination guidance.</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1a202c] mb-2">Services Include:</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li>• CoE document verification</li>
                    <li>• GTE statement drafting</li>
                    <li>• Health examination scheduling</li>
                    <li>• OSHC arrangement</li>
                    <li>• Financial capacity documentation</li>
                    <li>• Biometric submission</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#08bcb4] font-semibold">Processing: 4-8 weeks</span>
                  <span className="text-[#08bcb4] font-semibold">Success: 95%</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Canada Study Permit</h3>
                <p className="text-[#4a5568] mb-4">Study permit application for Canadian institutions with complete documentation and SOP preparation support.</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1a202c] mb-2">Services Include:</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li>• Letter of acceptance verification</li>
                    <li>• Financial proof documentation</li>
                    <li>• Statement of purpose writing</li>
                    <li>• Medical examination guidance</li>
                    <li>• Police clearance assistance</li>
                    <li>• CAQ for Quebec (if required)</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#08bcb4] font-semibold">Processing: 4-12 weeks</span>
                  <span className="text-[#08bcb4] font-semibold">Success: 93%</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Ireland Student Visa</h3>
                <p className="text-[#4a5568] mb-4">Student visa assistance for Irish institutions with comprehensive support for EU gateway opportunities.</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1a202c] mb-2">Services Include:</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li>• University acceptance verification</li>
                    <li>• Financial documentation</li>
                    <li>• Health insurance arrangement</li>
                    <li>• Accommodation proof</li>
                    <li>• Character references</li>
                    <li>• Statement of purpose</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#08bcb4] font-semibold">Processing: 2-4 weeks</span>
                  <span className="text-[#08bcb4] font-semibold">Success: 92%</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">European Student Visas</h3>
                <p className="text-[#4a5568] mb-4">Schengen student visa processing for Germany, France, Italy, Spain, and other European countries.</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1a202c] mb-2">Countries Covered:</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li>• Germany (National visa)</li>
                    <li>• France (Campus France process)</li>
                    <li>• Italy (Type D visa)</li>
                    <li>• Spain (Student visa)</li>
                    <li>• Malta, Latvia, and other EU countries</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#08bcb4] font-semibold">Processing: 2-6 weeks</span>
                  <span className="text-[#08bcb4] font-semibold">Success: 90%</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Visitor Visa</h3>
                <p className="text-[#4a5568] mb-4">Assistance for obtaining visitor visas for tourism, family visits, or short-term business trips to various countries.</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1a202c] mb-2">Services Include:</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li>• Application form completion</li>
                    <li>• Invitation letter guidance</li>
                    <li>• Financial proof documentation</li>
                    <li>• Travel itinerary planning</li>
                    <li>• Interview preparation (if required)</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#08bcb4] font-semibold">Processing: Varies by country</span>
                  <span className="text-[#08bcb4] font-semibold">Success: High</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Dependent Visa</h3>
                <p className="text-[#4a5568] mb-4">Support for students to bring their dependents (spouse, children) to their study destination.</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-[#1a202c] mb-2">Services Include:</h4>
                  <ul className="text-[#4a5568] space-y-1 text-sm">
                    <li>• Dependent application form assistance</li>
                    <li>• Relationship proof documentation</li>
                    <li>• Financial support evidence</li>
                    <li>• Health and character requirements</li>
                    <li>• Co-habitation evidence (for spouse)</li>
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#08bcb4] font-semibold">Processing: Varies by country</span>
                  <span className="text-[#08bcb4] font-semibold">Success: High</span>
                </div>
              </div>
            </div>
          </div>

          <div id="visa-service-section" className="bg-[#f7fafc] p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-6 text-center">Our Visa Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-semibold text-[#1a202c] mb-2">Document Review</h4>
                <p className="text-[#4a5568] text-sm">Complete evaluation of university acceptance and academic documents</p>
              </div>
              <div className="text-center">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-semibold text-[#1a202c] mb-2">Form Completion</h4>
                <p className="text-[#4a5568] text-sm">Expert assistance in filling visa application forms accurately</p>
              </div>
              <div className="text-center">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-semibold text-[#1a202c] mb-2">Documentation</h4>
                <p className="text-[#4a5568] text-sm">Preparation and organization of all required supporting documents</p>
              </div>
              <div className="text-center">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">4</span>
                </div>
                <h4 className="font-semibold text-[#1a202c] mb-2">Interview Prep</h4>
                <p className="text-[#4a5568] text-sm">Mock interviews and preparation for visa interview questions</p>
              </div>
              <div className="text-center">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold">5</span>
                </div>
                <h4 className="font-semibold text-[#1a202c] mb-2">Submission</h4>
                <p className="text-[#4a5568] text-sm">Application submission and tracking until visa approval</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Common Visa Requirements</h3>
              <ul className="text-[#4a5568] space-y-3">
                <li>• Valid passport (6+ months validity)</li>
                <li>• University acceptance letter/CoE</li>
                <li>• Academic transcripts and certificates</li>
                <li>• English proficiency test scores</li>
                <li>• Financial proof (bank statements, affidavit)</li>
                <li>• Statement of Purpose (SOP)</li>
                <li>• Medical examination reports</li>
                <li>• Police clearance certificate</li>
                <li>• Passport-size photographs</li>
                <li>• Health insurance coverage</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Why Choose IAEC Visa Services?</h3>
              <ul className="text-[#4a5568] space-y-3">
                <li>• 95% visa success rate with 24+ years experience</li>
                <li>• Expert knowledge of country-specific requirements</li>
                <li>• Dedicated visa counselors for each country</li>
                <li>• Complete documentation support and review</li>
                <li>• Mock interview sessions and preparation</li>
                <li>• Regular updates on visa processing status</li>
                <li>• Post-visa guidance for travel preparation</li>
                <li>• Emergency support during visa process</li>
                <li>• Transparent fee structure with no hidden costs</li>
                <li>• Partnerships with embassy-approved agencies</li>
              </ul>
            </div>
          </div>
        </div>
</section>
        </main>
      );
    };

export default VisaPage;
