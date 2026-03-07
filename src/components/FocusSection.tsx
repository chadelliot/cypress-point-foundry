import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const criteria = [
  {
    metric: "15,000–50,000",
    unit: "SF",
    label: "Facility Size Range",
    description: "Targeting the underserved middle-market industrial segment where distributor-grade tenants operate.",
  },
  {
    metric: "Carolinas",
    unit: "Focused",
    label: "Regional Concentration",
    description: "Deep market knowledge across North Carolina and South Carolina industrial corridors.",
  },
  {
    metric: "Distributor",
    unit: "Ready",
    label: "IOS-Aware Facilities",
    description: "Buildings configured for loading, yard operations, truck access, and industrial outdoor storage.",
  },
];

const FocusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32" ref={ref} aria-label="What we focus on">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">
            Focus
          </span>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium tracking-[-0.02em] text-foreground">
            What we focus on
          </h2>
        </motion.div>

        <div className="ruled-line mb-0" />

        <div className="grid grid-cols-1 md:grid-cols-3">
          {criteria.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`py-8 lg:py-12 ${i < 2 ? "md:border-r border-border" : ""} ${i > 0 ? "md:pl-8 lg:pl-12" : ""} ${i < 2 ? "md:pr-8 lg:pr-12" : ""}`}
            >
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-display text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">
                  {item.metric}
                </span>
                <span className="font-display text-sm uppercase tracking-[0.15em] text-deep-green">
                  {item.unit}
                </span>
              </div>
              <h3 className="font-display text-sm tracking-[0.1em] uppercase text-muted-foreground mb-3">
                {item.label}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="ruled-line" />
      </div>
    </section>
  );
};

export default FocusSection;
