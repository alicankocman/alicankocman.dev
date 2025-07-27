import React from "react";
import Image from "next/image";
import WaveSeparator from '../../components/WaveSeparator';

const About = () => (
  <section id="about" className="w-full relative overflow-hidden min-h-screen bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
    {/* Optimized Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 animate-gradient opacity-85"></div>
    <div className="relative z-10 flex items-center min-h-screen py-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-6">
            Hakkımda
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="animate-slide-in-left">
                <div className="space-y-6">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-100 dark:text-gray-300 leading-relaxed font-medium">
                    Merhaba! Ben Alican, İstanbul&apos;da yaşayan bir frontend geliştiricisiyim. 
                    React ve modern web teknolojileriyle kullanıcı dostu arayüzler geliştiriyorum.
                  </p>
                  <p className="text-base md:text-lg text-gray-200 dark:text-gray-400 leading-relaxed">
                    Yazılım geliştirme tutkum, kullanıcı deneyimini ön planda tutan, 
                    performanslı ve ölçeklenebilir web uygulamaları oluşturmaya odaklanıyor.
                  </p>
                  <p className="text-base md:text-lg text-gray-200 dark:text-gray-400 leading-relaxed">
                    Her projede en son teknolojileri kullanarak, kullanıcıların hayatını kolaylaştıran 
                    ve estetik açıdan etkileyici arayüzler tasarlamayı hedefliyorum.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full shadow-lg text-sm md:text-base">
                    Frontend Development
                  </span>
                  <span className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-full shadow-lg text-sm md:text-base">
                    UI/UX Design
                  </span>
                  <span className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg text-sm md:text-base">
                    Performance
                  </span>
                </div>
              </div>
              <div className="animate-scale-in">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                    <Image 
                      src="/images/profile.jpg"
                      alt="Alican Koçman"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                  <div className="absolute -top-3 -left-3 w-12 h-12 md:w-16 md:h-16 bg-emerald-400 rounded-full animate-float"></div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 md:w-12 md:h-12 bg-teal-400 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
                  <div className="absolute top-1/2 -right-6 w-6 h-6 md:w-8 md:h-8 bg-cyan-400 rounded-full animate-float" style={{animationDelay: '6s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <WaveSeparator flip />
  </section>
);

export default About; 