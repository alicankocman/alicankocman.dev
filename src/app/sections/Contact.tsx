"use client"
import React from "react";
import { Mail, Linkedin, Github, MapPin, Send, ArrowRight, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "E-posta",
    value: "kocmanalican@gmail.com",
    href: "mailto:kocmanalican@gmail.com",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "linkedin.com/in/alicankocman",
    href: "https://linkedin.com/in/alicankocman",
  },
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    value: "github.com/alicankocman",
    href: "https://github.com/alicankocman",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Konum",
    value: "İstanbul, Türkiye",
    href: "#",
  },
];

const Contact = () => {

  return (
    <section id="contact" className="section-light py-12 lg:py-20">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
            <Phone className="inline-block mr-2" /> İletişim
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Projeleriniz için işbirliği yapmak veya sadece merhaba demek isterseniz, benimle iletişime geçin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 px-4 lg:px-0">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-8">
              İletişim Bilgileri
            </h3>
            
            <div className="space-y-3 lg:space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  target={info.href.includes("mailto:") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center p-3 lg:p-6 bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl lg:rounded-2xl flex items-center justify-center mr-3 lg:mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-sm lg:text-lg font-semibold text-gray-900 dark:text-white mb-0 lg:mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-xs lg:text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                      {info.value}
                    </p>
                  </div>
                  
                  {/* Arrow Icon */}
                  <div className="w-5 h-5 lg:w-8 lg:h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-blue-100 dark:group-hover:bg-blue-900 transition-colors">
                    <ArrowRight className="w-2 h-2 lg:w-4 lg:h-4 text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-xl lg:rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-4 lg:p-8 relative overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-20 h-20 lg:w-32 lg:h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-bl-full"></div>
              
              <h3 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-8 relative z-10">
                Mesaj Gönderin
              </h3>
              
              <form className="space-y-3 lg:space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 lg:mb-3">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Adınız ve soyadınız"
                    className="w-full px-3 py-2 lg:px-4 lg:py-4 border border-gray-300 dark:border-gray-600 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 lg:mb-3">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="ornek@email.com"
                    className="w-full px-3 py-2 lg:px-4 lg:py-4 border border-gray-300 dark:border-gray-600 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 lg:mb-3">
                    Konu *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Mesajınızın konusu"
                    className="w-full px-3 py-2 lg:px-4 lg:py-4 border border-gray-300 dark:border-gray-600 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1 lg:mb-3">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full px-3 py-2 lg:px-4 lg:py-4 border border-gray-300 dark:border-gray-600 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 lg:py-4 px-4 lg:px-8 rounded-lg lg:rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center space-x-2 text-sm lg:text-base"
                >
                  <span>Mesaj Gönder</span>
                  <Send className="w-3 h-3 lg:w-5 lg:h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 