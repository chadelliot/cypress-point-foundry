import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const facilities = [
  {
    market: "Charlotte Metro, NC",
    sf: "32,400 SF",
    useCase: "Building materials distribution",
    yard: "0.8-acre secured yard, IOS-capable",
    status: "Stabilized",
  },
  {
    market: "Greenville-Spartanburg, SC",
    sf: "24,000 SF",
    useCase: "HVAC supply distribution",
    yard: "Dock-high + grade-level, trailer staging",
    status: "Under evaluation",
  },
  {
    market: "Raleigh-Durham, NC",
    sf: "18,500 SF",
    useCase: "Electrical supply branch",
    yard: "Fenced compound, IOS potential",
    status: "Pipeline",
  },
];

const PortfolioPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32" ref={ref} aria-label="Portfolio preview">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 lg:mb-16"
        >
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">
              Portfolio
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium tracking-[-0.02em] text-foreground">
              Representative facilities
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="hidden lg:flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-display text-muted-foreground hover:text-foreground transition-colors"
          >
            View all <ArrowRight size={12} />
          </Link>
        </motion.div>

        <div className="ruled-line mb-0" />

        {facilities.map((f, i) => (
          <motion.div
            key={f.market}
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
            className="ruled-line py-6 lg:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start group cursor-pointer hover:bg-secondary/30 transition-colors -mx-4 px-4 rounded-sm"
          >
            <div className="md:col-span-3">
              <span className="font-display text-base lg:text-lg font-medium text-foreground group-hover:text-deep-green-light transition-colors">
                {f.market}
              </span>
            </div>
            <div className="md:col-span-2">
              <span className="text-[10px] tracking-[0.15em] uppercase text-text-dim font-display block mb-0.5">Size</span>
              <span className="text-sm text-foreground">{f.sf}</span>
            </div>
            <div className="md:col-span-3">
              <span className="text-[10px] tracking-[0.15em] uppercase text-text-dim font-display block mb-0.5">Use Case</span>
              <span className="text-sm text-foreground">{f.useCase}</span>
            </div>
            <div className="md:col-span-3">
              <span className="text-[10px] tracking-[0.15em] uppercase text-text-dim font-display block mb-0.5">Yard / IOS</span>
              <span className="text-sm text-foreground">{f.yard}</span>
            </div>
            <div className="md:col-span-1 flex justify-end">
              <span className="text-[10px] tracking-[0.1em] uppercase font-display text-deep-green">
                {f.status}
              </span>
            </div>
          </motion.div>
        ))}

        <Link
          to="/portfolio"
          className="lg:hidden flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-display text-muted-foreground hover:text-foreground transition-colors mt-8"
        >
          View all facilities <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  );
};

export default PortfolioPreview;
