import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import founderImg from "@/assets/founder-portrait.jpg";

const proofPoints = [
  "30+ years in building materials and industrial distribution",
  "Experience across private, PE-backed, and public-company environments",
  "Managed large multi-branch distribution networks",
  "Understands productivity impact of inconsistent facility layouts",
  "Speaks the language of operators, not brokers",
];

const FounderSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-secondary/50" ref={ref} aria-label="Founder">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image / Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={founderImg}
                alt="Munroe Best, Founder of Cypress Point"
                className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-foreground/40 flex items-center justify-center group-hover:border-foreground/70 group-hover:scale-110 transition-all duration-300 bg-background/20 backdrop-blur-sm">
                <Play size={20} className="text-foreground ml-1" />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:pt-8"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">
              Founder
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium tracking-[-0.02em] text-foreground mb-2">
              Munroe Best
            </h2>
            <p className="font-display text-lg text-muted-foreground mb-8">
              Operator. Advisor. Industrial insider.
            </p>

            <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Munroe isn't a traditional broker or passive landlord. He built and managed 
              distribution operations from the inside — understanding how facility layout, 
              yard access, and site functionality directly impact operational throughput 
              and branch profitability.
            </p>

            <div className="ruled-line pt-6 mb-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim font-display block mb-4">
                Track Record
              </span>
              <ul className="space-y-3">
                {proofPoints.map((point, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                    className="text-sm text-foreground flex items-start gap-3"
                  >
                    <span className="w-1 h-1 rounded-full bg-deep-green mt-2 flex-shrink-0" />
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-display text-foreground hover:text-deep-green-light transition-colors group mt-4"
            >
              Full background
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
