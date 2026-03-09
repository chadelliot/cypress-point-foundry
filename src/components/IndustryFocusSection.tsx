import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, HardHat, Plug, Wind, Wrench } from "lucide-react";

const industries = [
  {
    icon: HardHat,
    title: "Building Materials",
    description: "Lumber, roofing, drywall, and construction supply distribution requiring heavy-load floors, drive-through access, and staged yard operations.",
    requirements: ["Reinforced flooring", "Wide bay doors", "Yard staging"],
  },
  {
    icon: Plug,
    title: "Electrical Supply",
    description: "Electrical product distribution with high SKU density, pull-station workflows, and will-call counter requirements.",
    requirements: ["Counter/showroom space", "High-bay racking", "Pull optimization"],
  },
  {
    icon: Wind,
    title: "HVAC Distribution",
    description: "HVAC equipment and supplies requiring oversized loading, equipment staging, and mixed delivery fleet access.",
    requirements: ["Large equipment staging", "Mixed dock access", "Climate zones"],
  },
  {
    icon: Wrench,
    title: "Industrial Supply",
    description: "MRO, fasteners, and industrial consumables distribution with intensive pick operations and same-day delivery requirements.",
    requirements: ["High-velocity picking", "Dense racking", "Rapid dock turns"],
  },
];

const IndustryFocusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-background" ref={ref} aria-label="Industry Focus">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20"
        >
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-primary font-bold mb-4">
              Sector Expertise
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground">
              Industries We Serve
            </h2>
          </div>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-md">
            We understand the operational nuances across distribution verticals — because Munroe has operated in them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:border-primary/30 transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <ind.icon size={26} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-2">
                    {ind.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {ind.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ind.requirements.map((req) => (
                      <span
                        key={req}
                        className="text-[10px] tracking-wider uppercase font-display font-semibold text-foreground bg-secondary px-3 py-1 rounded-full border border-border"
                      >
                        {req}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            to="/industrial-platform"
            className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-primary hover:text-green-accent-light transition-colors"
          >
            View Platform Details <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustryFocusSection;
