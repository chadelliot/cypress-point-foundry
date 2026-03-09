/**
 * Industrial-themed section dividers — grunge tears, schematic lines, and rough edges
 * to break up sections with character instead of straight lines.
 */

type DividerVariant = "grunge-top" | "grunge-bottom" | "torn-top" | "torn-bottom" | "schematic" | "bolt-line";

interface SectionDividerProps {
  variant: DividerVariant;
  className?: string;
  flip?: boolean;
  dark?: boolean;
}

const SectionDivider = ({ variant, className = "", flip = false, dark = false }: SectionDividerProps) => {
  const fillColor = dark ? "hsl(220,20%,8%)" : "hsl(0,0%,100%)";
  const bgColor = dark ? "hsl(0,0%,100%)" : "hsl(220,20%,8%)";

  const transform = flip ? "scale(1,-1)" : undefined;

  switch (variant) {
    case "grunge-top":
      return (
        <div className={`relative w-full overflow-hidden leading-[0] ${className}`} style={{ transform }}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px] lg:h-[80px]" fill={fillColor}>
            <path d="M0,80 L0,45 Q20,42 40,48 T80,40 T120,52 T160,38 T200,50 T240,35 T280,48 T320,30 T360,45 T400,32 T440,50 T480,28 T520,42 T560,35 T600,48 T640,30 T680,44 T720,36 T760,50 T800,28 T840,42 T880,38 T920,48 T960,30 T1000,45 T1040,32 T1080,50 T1120,35 T1160,48 T1200,30 T1240,42 T1280,38 T1320,48 T1360,32 T1400,45 T1440,40 L1440,80 Z" />
            {/* Secondary rough edge for depth */}
            <path d="M0,80 L0,55 Q30,52 60,58 T120,50 T180,60 T240,48 T300,55 T360,45 T420,58 T480,42 T540,55 T600,48 T660,58 T720,45 T780,55 T840,50 T900,58 T960,42 T1020,55 T1080,48 T1140,58 T1200,42 T1260,55 T1320,48 T1380,55 T1440,50 L1440,80 Z" opacity="0.5" />
          </svg>
        </div>
      );

    case "grunge-bottom":
      return (
        <div className={`relative w-full overflow-hidden leading-[0] rotate-180 ${className}`}>
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-[50px] md:h-[70px] lg:h-[80px]" fill={fillColor}>
            <path d="M0,80 L0,45 Q25,40 50,48 T100,35 T150,50 T200,32 T250,48 T300,38 T350,52 T400,30 T450,45 T500,35 T550,50 T600,28 T650,42 T700,38 T750,48 T800,32 T850,45 T900,35 T950,50 T1000,28 T1050,42 T1100,38 T1150,48 T1200,32 T1250,45 T1300,35 T1350,48 T1400,40 T1440,35 L1440,80 Z" />
            <path d="M0,80 L0,58 Q40,55 80,60 T160,52 T240,62 T320,48 T400,58 T480,45 T560,55 T640,50 T720,58 T800,44 T880,55 T960,48 T1040,58 T1120,45 T1200,55 T1280,50 T1360,58 T1440,52 L1440,80 Z" opacity="0.4" />
          </svg>
        </div>
      );

    case "torn-top":
      return (
        <div className={`relative w-full overflow-hidden leading-[0] ${className}`} style={{ transform }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[35px] md:h-[50px] lg:h-[60px]" fill={fillColor}>
            <path d="M0,60 L0,30 L48,28 L72,35 L96,20 L144,32 L168,18 L216,30 L264,15 L312,28 L336,22 L384,35 L408,12 L456,25 L504,18 L552,32 L576,10 L624,28 L672,20 L720,35 L744,14 L792,30 L840,22 L888,35 L912,16 L960,28 L1008,20 L1056,32 L1080,12 L1128,25 L1176,18 L1224,30 L1248,22 L1296,35 L1344,15 L1392,28 L1440,25 L1440,60 Z" />
          </svg>
        </div>
      );

    case "torn-bottom":
      return (
        <div className={`relative w-full overflow-hidden leading-[0] rotate-180 ${className}`}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[35px] md:h-[50px] lg:h-[60px]" fill={fillColor}>
            <path d="M0,60 L0,25 L60,30 L96,18 L144,28 L192,14 L240,25 L288,20 L336,32 L384,12 L432,28 L480,18 L528,30 L576,15 L624,25 L672,22 L720,35 L768,10 L816,28 L864,18 L912,30 L960,14 L1008,25 L1056,20 L1104,32 L1152,12 L1200,28 L1248,18 L1296,30 L1344,15 L1392,25 L1440,22 L1440,60 Z" />
          </svg>
        </div>
      );

    case "schematic":
      return (
        <div className={`relative w-full h-8 md:h-12 overflow-hidden ${className}`}>
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" className="w-full h-full" opacity="0.15">
            {/* Center dashed line */}
            <line x1="0" y1="24" x2="1440" y2="24" stroke="currentColor" strokeWidth="1" strokeDasharray="8 4" />
            {/* Dimension ticks */}
            {[0, 120, 240, 360, 480, 600, 720, 840, 960, 1080, 1200, 1320, 1440].map((x) => (
              <line key={x} x1={x} y1="14" x2={x} y2="34" stroke="currentColor" strokeWidth="1" />
            ))}
            {/* Circle markers at key points */}
            {[360, 720, 1080].map((x) => (
              <circle key={x} cx={x} cy="24" r="4" fill="none" stroke="currentColor" strokeWidth="1" />
            ))}
          </svg>
        </div>
      );

    case "bolt-line":
      return (
        <div className={`relative w-full h-4 md:h-6 overflow-hidden flex items-center ${className}`}>
          <div className="w-full flex items-center gap-0">
            <div className="flex-1 h-px bg-border" />
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex items-center gap-0">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-border bg-background flex items-center justify-center">
                  <div className="w-1 h-1 rounded-full bg-primary/50" />
                </div>
                <div className="flex-1 h-px bg-border min-w-[80px] md:min-w-[140px]" />
              </div>
            ))}
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-border bg-background flex items-center justify-center">
              <div className="w-1 h-1 rounded-full bg-primary/50" />
            </div>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default SectionDivider;
