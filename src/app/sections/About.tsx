import React from "react";
import WaveSeparator from '../../components/WaveSeparator';

const About = () => (
  <section id="about" className="w-full relative overflow-hidden">
    {/* Animated Background */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 animate-gradient opacity-85"></div>
    <div className="relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Hakkımda
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl shadow-2xl p-12 border border-gray-100 dark:border-gray-700">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="space-y-6">
                <p className="text-xl md:text-2xl text-gray-100 dark:text-gray-300 leading-relaxed font-medium">
                  Merhaba! Ben Alican, İstanbul'da yaşayan bir frontend geliştiricisiyim. 
                  React ve modern web teknolojileriyle kullanıcı dostu arayüzler geliştiriyorum.
                </p>
                <p className="text-lg text-gray-200 dark:text-gray-400 leading-relaxed">
                  Yazılım geliştirme tutkum, kullanıcı deneyimini ön planda tutan, 
                  performanslı ve ölçeklenebilir web uygulamaları oluşturmaya odaklanıyor.
                </p>
                <p className="text-lg text-gray-200 dark:text-gray-400 leading-relaxed">
                  Her projede en son teknolojileri kullanarak, kullanıcıların hayatını kolaylaştıran 
                  ve estetik açıdan etkileyici arayüzler tasarlamayı hedefliyorum.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-full shadow-lg">
                  Frontend Development
                </span>
                <span className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-semibold rounded-full shadow-lg">
                  UI/UX Design
                </span>
                <span className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-lg">
                  Performance
                </span>
              </div>
            </div>
            <div className="animate-scale-in">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFi1kRrP1nscg/profile-displayphoto-shrink_800_800/B4DZavEKDQG8Ac-/0/1746693825646?e=1758153600&v=beta&t=EndPGq8roG_oyPI6vJeiO9vxWPiX2zrwF6n0Xan0ZW0"
                    alt="Alican Koçman"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-emerald-400 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-teal-400 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
                <div className="absolute top-1/2 -right-8 w-8 h-8 bg-cyan-400 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
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