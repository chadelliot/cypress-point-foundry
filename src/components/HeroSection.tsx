import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const quickLinks = [
  { label: "Industrial Platform", to: "/industrial-platform" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Expansion / Build-to-Suit", to: "/build-to-suit" },
  { label: "Advisory", to: "/advisory" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Industrial warehouse facility architectural rendering"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute bottom-0 left-0 right-0 h-40 gradient-fade-up" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col mx-auto max-w-[1400px] w-full px-6 lg:px-10 pt-24 lg:pt-32">
        {/* Top section: Brand anchor + Headline */}
        <div className="flex-1 flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Left: Brand anchor */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/3 pt-8 lg:pt-16"
          >
            <div className="font-display">
              <span className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground block mb-4">
                Industrial Real Estate
              </span>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light tracking-[-0.02em] leading-[0.95] text-foreground">
                Cypress
                <br />
                Point
              </h2>
            </div>
          </motion.div>

          {/* Right: Oversized headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3 flex items-start lg:items-center lg:pt-8"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-[-0.03em] leading-[1.05] text-foreground">
              Industrial real estate
              <br />
              <span className="text-muted-foreground">for distributor-grade</span>
              <br />
              operators
            </h1>
          </motion.div>
        </div>

        {/* Bottom modules */}
        <div className="pb-10 lg:pb-16 mt-auto">
          <div className="ruled-line mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Bottom-left: Founder video module */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-start gap-5">
                <div className="relative w-32 h-20 lg:w-44 lg:h-28 bg-secondary rounded-sm overflow-hidden flex-shrink-0 group cursor-pointer">
                  <div className="absolute inset-0 bg-charcoal flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-foreground/60 transition-colors">
                      <Play size={14} className="text-foreground ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-1.5 left-2 text-[9px] tracking-[0.15em] uppercase text-muted-foreground font-display">
                    02:34
                  </span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-display block mb-1">
                    Founder Introduction
                  </span>
                  <p className="font-display text-lg lg:text-xl text-foreground font-medium">
                    Munroe Best
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    30+ years in industrial distribution
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Bottom-right: Positioning + Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-md">
                Operator-informed industrial real estate focused on 15,000–50,000 SF 
                facilities across the Carolinas. Purpose-built for distribution operators.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-[11px] tracking-[0.12em] uppercase font-display text-muted-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1 group-hover:ml-0" />
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
