export function HeroBackgroundSvg() {
    return (
        <svg viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
        {/* Gradients for depth */}
          <linearGradient id="line-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e0e7ff" stopOpacity={0} />
            <stop offset="50%" stopColor="#818cf8" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#e0e7ff" stopOpacity={0} />
          </linearGradient>
          
          <linearGradient id="line-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ddd6fe" stopOpacity={0} />
            <stop offset="50%" stopColor="#a78bfa" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#ddd6fe" stopOpacity={0} />
          </linearGradient>
          
          <linearGradient id="line-gradient-3" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dbeafe" stopOpacity={0} />
            <stop offset="50%" stopColor="#60a5fa" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#dbeafe" stopOpacity={0} />
          </linearGradient>
          
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#818cf8" stopOpacity={0} />
          </radialGradient>
        </defs>
        
        {/* Background base */}
        <rect width="1920" height="1080" fill="#fafafa" opacity="0.5"/>
        
        {/* Primary flowing curves - right side density */}
        <path d="M 1920 200 Q 1650 250 1500 180 T 1200 240 Q 1050 280 950 200" 
              stroke="url(#line-gradient-1)" 
              strokeWidth="1.5" 
              fill="none" 
              opacity="0.6"/>
        
        <path d="M 1920 350 Q 1700 380 1550 320 Q 1400 260 1300 300 T 1100 250" 
              stroke="url(#line-gradient-2)" 
              strokeWidth="1.2" 
              fill="none" 
              opacity="0.5"/>
        
        <path d="M 1920 500 C 1750 520 1650 450 1500 480 S 1200 520 1050 450" 
              stroke="url(#line-gradient-1)" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.4"/>
        
        <path d="M 1920 150 Q 1600 200 1400 150 T 1000 180" 
              stroke="#818cf8" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.3"/>
        
        {/* Secondary curves - edge detail */}
        <path d="M 1920 650 Q 1800 680 1700 620 Q 1600 560 1500 600 T 1300 550" 
              stroke="url(#line-gradient-3)" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.35"/>
        
        <path d="M 1920 800 C 1850 820 1750 780 1650 800 S 1450 850 1350 800" 
              stroke="#a78bfa" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.25"/>
        
        <path d="M 1920 50 Q 1700 80 1550 40 T 1250 100" 
              stroke="#60a5fa" 
              strokeWidth="0.6" 
              fill="none" 
              opacity="0.2"/>
        
        <path d="M 1920 950 Q 1750 980 1600 940 Q 1450 900 1350 950" 
              stroke="url(#line-gradient-2)" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.3"/>
        
        {/* Top edge curves */}
        <path d="M 800 0 Q 900 80 1000 40 T 1200 0" 
              stroke="#818cf8" 
              strokeWidth="0.7" 
              fill="none" 
              opacity="0.25"/>
        
        <path d="M 1100 0 Q 1200 60 1300 30 T 1500 0" 
              stroke="url(#line-gradient-1)" 
              strokeWidth="0.8" 
              fill="none" 
              opacity="0.3"/>
        
        {/* Bottom edge curves */}
        <path d="M 900 1080 Q 1000 1020 1100 1050 T 1300 1080" 
              stroke="#a78bfa" 
              strokeWidth="0.7" 
              fill="none" 
              opacity="0.2"/>
        
        <path d="M 1200 1080 Q 1350 1010 1500 1040 T 1700 1080" 
              stroke="url(#line-gradient-3)" 
              strokeWidth="0.9" 
              fill="none" 
              opacity="0.25"/>
        
        {/* Subtle connecting arcs */}
        <path d="M 1500 200 Q 1520 300 1480 380" 
              stroke="#818cf8" 
              strokeWidth="0.5" 
              fill="none" 
              opacity="0.2"
              strokeDasharray="3 6"/>
        
        <path d="M 1400 300 Q 1380 450 1420 580" 
              stroke="#a78bfa" 
              strokeWidth="0.5" 
              fill="none" 
              opacity="0.15"
              strokeDasharray="3 6"/>
        
        <path d="M 1600 450 Q 1550 550 1580 650" 
              stroke="#60a5fa" 
              strokeWidth="0.5" 
              fill="none" 
              opacity="0.15"
              strokeDasharray="3 6"/>
        
        <path d="M 1300 550 Q 1280 680 1320 800" 
              stroke="#818cf8" 
              strokeWidth="0.5" 
              fill="none" 
              opacity="0.2"
              strokeDasharray="3 6"/>
        
        {/* Connection nodes - right side concentration */}
        <circle cx="1650" cy="250" r="4" fill="#818cf8" opacity="0.4"/>
        <circle cx="1650" cy="250" r="12" fill="url(#node-glow)"/>
        
        <circle cx="1500" cy="180" r="3" fill="#a78bfa" opacity="0.35"/>
        <circle cx="1500" cy="180" r="10" fill="url(#node-glow)"/>
        
        <circle cx="1700" cy="380" r="3.5" fill="#60a5fa" opacity="0.3"/>
        <circle cx="1700" cy="380" r="11" fill="url(#node-glow)"/>
        
        <circle cx="1550" cy="320" r="3" fill="#818cf8" opacity="0.35"/>
        <circle cx="1550" cy="320" r="9" fill="url(#node-glow)"/>
        
        <circle cx="1750" cy="520" r="4" fill="#a78bfa" opacity="0.4"/>
        <circle cx="1750" cy="520" r="12" fill="url(#node-glow)"/>
        
        <circle cx="1500" cy="480" r="3" fill="#818cf8" opacity="0.3"/>
        <circle cx="1500" cy="480" r="10" fill="url(#node-glow)"/>
        
        <circle cx="1800" cy="680" r="3.5" fill="#60a5fa" opacity="0.35"/>
        <circle cx="1800" cy="680" r="11" fill="url(#node-glow)"/>
        
        <circle cx="1700" cy="620" r="3" fill="#a78bfa" opacity="0.3"/>
        <circle cx="1700" cy="620" r="9" fill="url(#node-glow)"/>
        
        <circle cx="1600" cy="560" r="2.5" fill="#818cf8" opacity="0.25"/>
        <circle cx="1600" cy="560" r="8" fill="url(#node-glow)"/>
        
        <circle cx="1850" cy="820" r="3.5" fill="#a78bfa" opacity="0.35"/>
        <circle cx="1850" cy="820" r="10" fill="url(#node-glow)"/>
        
        {/* Subtle mid-section nodes */}
        <circle cx="1200" cy="240" r="2.5" fill="#818cf8" opacity="0.25"/>
        <circle cx="1200" cy="240" r="8" fill="url(#node-glow)"/>
        
        <circle cx="1300" cy="300" r="2.5" fill="#60a5fa" opacity="0.2"/>
        <circle cx="1300" cy="300" r="7" fill="url(#node-glow)"/>
        
        <circle cx="1100" cy="250" r="2" fill="#a78bfa" opacity="0.2"/>
        <circle cx="1100" cy="250" r="6" fill="url(#node-glow)"/>
        
        <circle cx="1050" cy="450" r="2.5" fill="#818cf8" opacity="0.25"/>
        <circle cx="1050" cy="450" r="7" fill="url(#node-glow)"/>
        
        <circle cx="1300" cy="550" r="2" fill="#60a5fa" opacity="0.2"/>
        <circle cx="1300" cy="550" r="6" fill="url(#node-glow)"/>
        
        {/* Edge nodes for visual balance */}
        <circle cx="1000" cy="40" r="2" fill="#818cf8" opacity="0.2"/>
        <circle cx="1000" cy="40" r="6" fill="url(#node-glow)"/>
        
        <circle cx="1200" cy="0" r="2.5" fill="#a78bfa" opacity="0.25"/>
        
        <circle cx="1500" cy="1040" r="2" fill="#60a5fa" opacity="0.2"/>
        <circle cx="1500" cy="1040" r="6" fill="url(#node-glow)"/>
        
        <circle cx="1100" cy="1050" r="2.5" fill="#818cf8" opacity="0.25"/>
        
        {/* Micro accent nodes */}
        <circle cx="1600" cy="450" r="1.5" fill="#a78bfa" opacity="0.15"/>
        <circle cx="1450" cy="360" r="1.5" fill="#60a5fa" opacity="0.15"/>
        <circle cx="1350" cy="680" r="1.5" fill="#818cf8" opacity="0.15"/>
        <circle cx="1750" cy="780" r="1.5" fill="#a78bfa" opacity="0.15"/>
        <circle cx="1550" cy="720" r="1.5" fill="#60a5fa" opacity="0.15"/>
        <circle cx="1250" cy="480" r="1.5" fill="#818cf8" opacity="0.15"/>
        <circle cx="1150" cy="360" r="1.5" fill="#a78bfa" opacity="0.15"/>
      </svg>
    )
  }
  