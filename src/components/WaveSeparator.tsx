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
        {/* Static gradients - no animations */}
        <linearGradient id="waveGradient1" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#8b5cf6" stopOpacity="1" />
          <stop offset="1" stopColor="#ec4899" stopOpacity="0.9" />
        </linearGradient>
        
        {/* Dark mode gradient */}
        <linearGradient id="waveGradient1Dark" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e3a8a" stopOpacity="0.9" />
          <stop offset="0.5" stopColor="#581c87" stopOpacity="1" />
          <stop offset="1" stopColor="#be185d" stopOpacity="0.9" />
        </linearGradient>
        
        <linearGradient id="waveGradient2" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60a5fa" stopOpacity="0.7" />
          <stop offset="0.5" stopColor="#a78bfa" stopOpacity="0.8" />
          <stop offset="1" stopColor="#f472b6" stopOpacity="0.7" />
        </linearGradient>
        
        <linearGradient id="waveGradient3" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f59e0b" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#10b981" stopOpacity="0.6" />
          <stop offset="1" stopColor="#ef4444" stopOpacity="0.5" />
        </linearGradient>
      </defs>
      
      {/* Static wave layers - no animations */}
      <path
        d="M0,100 C180,20 360,180 540,60 C720,-20 900,160 1080,40 C1260,-20 1440,120 1440,120 L1440,250 L0,250 Z"
        fill="url(#waveGradient1)"
        className="dark:hidden"
      />
      
      {/* Dark mode wave layer */}
      <path
        d="M0,100 C180,20 360,180 540,60 C720,-20 900,160 1080,40 C1260,-20 1440,120 1440,120 L1440,250 L0,250 Z"
        fill="url(#waveGradient1Dark)"
        className="hidden dark:block"
      />
      
      {/* Middle wave layer */}
      <path
        d="M0,140 C240,60 480,200 720,80 C960,-20 1200,160 1440,60 L1440,250 L0,250 Z"
        fill="url(#waveGradient2)"
      />
      
      {/* Top wave layer */}
      <path
        d="M0,160 C360,80 720,220 1080,100 C1440,-20 1440,250 1440,250 L1440,250 L0,250 Z"
        fill="url(#waveGradient3)"
      />
    </svg>
  </div>
);

export default WaveSeparator; 