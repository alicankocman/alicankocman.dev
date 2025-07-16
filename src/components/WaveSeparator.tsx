import React from "react";

const WaveSeparator = ({ flip = false }: { flip?: boolean }) => (
  <div style={{ lineHeight: 0, transform: flip ? 'rotate(180deg)' : undefined }}>
    <svg
      viewBox="0 0 1440 250"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '120px', display: 'block' }}
      preserveAspectRatio="none"
    >
      <defs>
        {/* Ana gradient - animasyonlu */}
        <linearGradient id="waveGradient1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563eb" stopOpacity="0.9">
            <animate attributeName="stop-color" values="#2563eb;#7c3aed;#db2777;#2563eb" dur="8s" repeatCount="indefinite" />
          </stop>
          <stop offset="0.5" stopColor="#7c3aed" stopOpacity="1">
            <animate attributeName="stop-color" values="#7c3aed;#db2777;#2563eb;#7c3aed" dur="8s" repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor="#db2777" stopOpacity="0.9">
            <animate attributeName="stop-color" values="#db2777;#2563eb;#7c3aed;#db2777" dur="8s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        
        <linearGradient id="waveGradient2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" stopOpacity="0.7">
            <animate attributeName="stop-color" values="#3b82f6;#8b5cf6;#ec4899;#3b82f6" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="0.5" stopColor="#8b5cf6" stopOpacity="0.8">
            <animate attributeName="stop-color" values="#8b5cf6;#ec4899;#3b82f6;#8b5cf6" dur="6s" repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor="#ec4899" stopOpacity="0.7">
            <animate attributeName="stop-color" values="#ec4899;#3b82f6;#8b5cf6;#ec4899" dur="6s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        
        <linearGradient id="waveGradient3" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" stopOpacity="0.5">
            <animate attributeName="stop-color" values="#60a5fa;#a78bfa;#f472b6;#60a5fa" dur="4s" repeatCount="indefinite" />
          </stop>
          <stop offset="0.5" stopColor="#a78bfa" stopOpacity="0.6">
            <animate attributeName="stop-color" values="#a78bfa;#f472b6;#60a5fa;#a78bfa" dur="4s" repeatCount="indefinite" />
          </stop>
          <stop offset="1" stopColor="#f472b6" stopOpacity="0.5">
            <animate attributeName="stop-color" values="#f472b6;#60a5fa;#a78bfa;#f472b6" dur="4s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        
        {/* Glow efekti */}
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Ana dalga katmanı - karmaşık hareket */}
      <path
        d="M0,100 C180,20 360,180 540,60 C720,-20 900,160 1080,40 C1260,-20 1440,120 1440,120 L1440,250 L0,250 Z"
        fill="url(#waveGradient1)"
        filter="url(#glow)"
      >
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          values="M0,100 C180,20 360,180 540,60 C720,-20 900,160 1080,40 C1260,-20 1440,120 1440,120 L1440,250 L0,250 Z;
                  M0,80 C180,140 360,0 540,100 C720,200 900,20 1080,120 C1260,220 1440,100 1440,100 L1440,250 L0,250 Z;
                  M0,120 C180,60 360,200 540,80 C720,-40 900,140 1080,60 C1260,-20 1440,140 1440,140 L1440,250 L0,250 Z;
                  M0,100 C180,20 360,180 540,60 C720,-20 900,160 1080,40 C1260,-20 1440,120 1440,120 L1440,250 L0,250 Z"
        />
      </path>
      
      {/* Orta dalga katmanı - orta hız */}
      <path
        d="M0,140 C240,60 480,200 720,80 C960,-20 1200,160 1440,60 L1440,250 L0,250 Z"
        fill="url(#waveGradient2)"
      >
        <animate
          attributeName="d"
          dur="7s"
          repeatCount="indefinite"
          values="M0,140 C240,60 480,200 720,80 C960,-20 1200,160 1440,60 L1440,250 L0,250 Z;
                  M0,120 C240,180 480,40 720,140 C960,240 1200,80 1440,180 L1440,250 L0,250 Z;
                  M0,160 C240,100 480,240 720,120 C960,0 1200,180 1440,100 L1440,250 L0,250 Z;
                  M0,140 C240,60 480,200 720,80 C960,-20 1200,160 1440,60 L1440,250 L0,250 Z"
        />
      </path>
      
      {/* Üst dalga katmanı - hızlı hareket */}
      <path
        d="M0,160 C360,80 720,220 1080,100 C1440,-20 1440,250 1440,250 L1440,250 L0,250 Z"
        fill="url(#waveGradient3)"
      >
        <animate
          attributeName="d"
          dur="5s"
          repeatCount="indefinite"
          values="M0,160 C360,80 720,220 1080,100 C1440,-20 1440,250 1440,250 L1440,250 L0,250 Z;
                  M0,140 C360,200 720,60 1080,160 C1440,260 1440,250 1440,250 L1440,250 L0,250 Z;
                  M0,180 C360,120 720,260 1080,140 C1440,20 1440,250 1440,250 L1440,250 L0,250 Z;
                  M0,160 C360,80 720,220 1080,100 C1440,-20 1440,250 1440,250 L1440,250 L0,250 Z"
        />
      </path>
      
      {/* Parçacık efektleri - daha fazla ve çeşitli */}
      {/* Yıldız şeklinde parçacıklar */}
      <g transform="translate(150, 60)">
        <path d="M0,-8 L2,-2 L8,0 L2,2 L0,8 L-2,2 L-8,0 L-2,-2 Z" fill="white" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="3s" repeatCount="indefinite" />
          <animate attributeName="transform" values="translate(0,0) rotate(0deg);translate(0,-10) rotate(180deg);translate(0,0) rotate(360deg)" dur="4s" repeatCount="indefinite" />
        </path>
      </g>
      
      <g transform="translate(400, 90)">
        <path d="M0,-6 L1.5,-1.5 L6,0 L1.5,1.5 L0,6 L-1.5,1.5 L-6,0 L-1.5,-1.5 Z" fill="white" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite" />
          <animate attributeName="transform" values="translate(0,0) rotate(0deg);translate(0,-8) rotate(120deg);translate(0,0) rotate(240deg)" dur="5s" repeatCount="indefinite" />
        </path>
      </g>
      
      <g transform="translate(700, 40)">
        <path d="M0,-5 L1,-1 L5,0 L1,1 L0,5 L-1,1 L-5,0 L-1,-1 Z" fill="white" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.15;0.6" dur="3.5s" repeatCount="indefinite" />
          <animate attributeName="transform" values="translate(0,0) rotate(0deg);translate(0,-12) rotate(90deg);translate(0,0) rotate(180deg)" dur="4.5s" repeatCount="indefinite" />
        </path>
      </g>
      
      <g transform="translate(1000, 80)">
        <path d="M0,-7 L1.8,-1.8 L7,0 L1.8,1.8 L0,7 L-1.8,1.8 L-7,0 L-1.8,-1.8 Z" fill="white" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.08;0.4" dur="5s" repeatCount="indefinite" />
          <animate attributeName="transform" values="translate(0,0) rotate(0deg);translate(0,-15) rotate(270deg);translate(0,0) rotate(540deg)" dur="6s" repeatCount="indefinite" />
        </path>
      </g>
      
      <g transform="translate(1300, 50)">
        <path d="M0,-6 L1.5,-1.5 L6,0 L1.5,1.5 L0,6 L-1.5,1.5 L-6,0 L-1.5,-1.5 Z" fill="white" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.12;0.5" dur="4.5s" repeatCount="indefinite" />
          <animate attributeName="transform" values="translate(0,0) rotate(0deg);translate(0,-10) rotate(150deg);translate(0,0) rotate(300deg)" dur="5.5s" repeatCount="indefinite" />
        </path>
      </g>
      
      {/* Kalp şeklinde parçacıklar */}
      <g transform="translate(300, 120)">
        <path d="M0,4 C-2,2 -4,0 -4,-2 C-4,-4 -2,-6 0,-8 C2,-6 4,-4 4,-2 C4,0 2,2 0,4 Z" fill="white" opacity="0.3">
          <animate attributeName="opacity" values="0.3;0.06;0.3" dur="6s" repeatCount="indefinite" />
          <animate attributeName="transform" values="translate(0,0) scale(1);translate(0,-8) scale(1.2);translate(0,0) scale(1)" dur="7s" repeatCount="indefinite" />
        </path>
      </g>
      
      <g transform="translate(800, 70)">
        <path d="M0,3 C-1.5,1.5 -3,0 -3,-1.5 C-3,-3 -1.5,-4.5 0,-6 C1.5,-4.5 3,-3 3,-1.5 C3,0 1.5,1.5 0,3 Z" fill="white" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0.08;0.4" dur="5.5s" repeatCount="indefinite" />
          <animate attributeName="transform" values="translate(0,0) scale(1);translate(0,-6) scale(1.3);translate(0,0) scale(1)" dur="6.5s" repeatCount="indefinite" />
        </path>
      </g>
      
      {/* Daire parçacıkları */}
      <circle cx="200" cy="100" r="2" fill="white" opacity="0.6">
        <animate attributeName="cy" values="100;80;100" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.15;0.6" dur="3s" repeatCount="indefinite" />
        <animate attributeName="r" values="2;3;2" dur="3s" repeatCount="indefinite" />
      </circle>
      
      <circle cx="600" cy="130" r="1.5" fill="white" opacity="0.4">
        <animate attributeName="cy" values="130;110;130" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="4s" repeatCount="indefinite" />
        <animate attributeName="r" values="1.5;2.5;1.5" dur="4s" repeatCount="indefinite" />
      </circle>
      
      <circle cx="1100" cy="90" r="1" fill="white" opacity="0.5">
        <animate attributeName="cy" values="90;70;90" dur="5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.12;0.5" dur="5s" repeatCount="indefinite" />
        <animate attributeName="r" values="1;2;1" dur="5s" repeatCount="indefinite" />
      </circle>
      
      <circle cx="1400" cy="110" r="1.5" fill="white" opacity="0.3">
        <animate attributeName="cy" values="110;90;110" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.08;0.3" dur="3.5s" repeatCount="indefinite" />
        <animate attributeName="r" values="1.5;2.5;1.5" dur="3.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  </div>
);

export default WaveSeparator; 