import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MapPin } from "lucide-react";
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
    <section className="py-20 lg:py-32 bg-background" ref={ref} aria-label="Portfolio preview">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            Representative Facilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Curated facilities aligned with distributor operating requirements across the Carolinas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {facilities.map((f, i) => (
            <motion.div
              key={f.market}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all group cursor-pointer"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin size={16} className="text-primary" />
                <span className="font-display text-lg font-bold text-foreground">
                  {f.market}
                </span>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-display font-semibold">Size</span>
                  <p className="text-sm text-foreground font-medium">{f.sf}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-display font-semibold">Use Case</span>
                  <p className="text-sm text-foreground font-medium">{f.useCase}</p>
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-display font-semibold">Yard / IOS</span>
                  <p className="text-sm text-foreground font-medium">{f.yard}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs uppercase tracking-wider font-display font-bold text-primary">
                  {f.status}
                </span>
                <ArrowRight size={14} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-primary hover:text-green-accent-light transition-colors"
          >
            View All Facilities <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
