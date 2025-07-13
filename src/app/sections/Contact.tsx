import React from "react";

const contactInfo = [
  {
    type: "email",
    label: "E-posta",
    value: "alicankocman@gmail.com",
    href: "mailto:alicankocman@gmail.com",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-blue-500 to-cyan-500"
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/alicankocman",
    href: "https://linkedin.com/in/alicankocman",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
      </svg>
    ),
    color: "from-blue-600 to-blue-700"
  },
  {
    type: "github",
    label: "GitHub",
    value: "github.com/alicankocman",
    href: "https://github.com/alicankocman",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02A9.29 9.29 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
      </svg>
    ),
    color: "from-gray-700 to-gray-800"
  }
];

const Contact = () => (
  <section id="contact" className="w-full">
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-bold text-gray-800 dark:text-gray-200 mb-6">
        İletişim
      </h2>
      <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
    </div>
    
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-3xl shadow-2xl p-12 animate-fade-in-up border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Benimle İletişime Geçin
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Projeleriniz için işbirliği yapmak veya sadece merhaba demek isterseniz, 
            aşağıdaki kanallardan bana ulaşabilirsiniz.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <a
              key={info.type}
              href={info.href}
              target={info.type !== "email" ? "_blank" : "_self"}
              rel={info.type !== "email" ? "noopener noreferrer" : ""}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border border-gray-200 dark:border-gray-600"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {info.icon}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  {info.label}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  {info.value}
                </p>
                
                <div className="mt-4 flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
                  <span>İletişime Geç</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Contact; 