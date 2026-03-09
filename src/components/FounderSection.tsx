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
    <section className="py-20 lg:py-32 section-dark" ref={ref} aria-label="Founder">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image / Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative group cursor-pointer"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={founderImg}
                alt="Munroe Best, Founder of Cypress Point"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/20 group-hover:bg-black/10 transition-colors">
              <div className="w-20 h-20 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <Play size={24} className="text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground px-3 py-1.5 rounded font-display text-xs font-bold uppercase tracking-wider">
              Watch Video
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="font-display text-xs uppercase tracking-widest text-primary font-bold mb-4">
              Founder
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white mb-3">
              Munroe Best
            </h2>
            <p className="font-display text-lg text-white/60 mb-8">
              Operator. Advisor. Industrial insider.
            </p>

            <p className="text-white/70 text-base leading-relaxed mb-10 max-w-lg">
              Munroe isn't a traditional broker or passive landlord. He built and managed 
              distribution operations from the inside — understanding how facility layout, 
              yard access, and site functionality directly impact operational throughput 
              and branch profitability.
            </p>

            <div className="space-y-4 mb-10">
              {proofPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{point}</span>
                </motion.div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-primary hover:text-green-accent-light transition-colors group"
            >
              Full Background
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
