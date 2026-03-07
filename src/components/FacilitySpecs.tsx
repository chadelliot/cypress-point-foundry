import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specs = [
  { label: "Eave Heights", detail: "Clear heights suited for racking and distribution operations" },
  { label: "Column Spacing", detail: "Layouts compatible with forklift circulation and aisle planning" },
  { label: "Truck Access", detail: "Dock-high doors, grade-level access, and turning geometry" },
  { label: "Yard Functionality", detail: "Trailer staging, queuing, and operational yard depth" },
  { label: "Pulling Stations", detail: "Configured for efficient order assembly and pick-path flow" },
  { label: "Rack Layout", detail: "Floor load capacity and bay dimensions for selective racking" },
  { label: "IOS Potential", detail: "Industrial Outdoor Storage for materials, equipment, and staging" },
];

const FacilitySpecs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-secondary/50" ref={ref} aria-label="Facility specifications">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16 max-w-2xl"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">
            Criteria
          </span>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium tracking-[-0.02em] text-foreground mb-4">
            What we look for in a facility
          </h2>
          <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed">
            Every acquisition is evaluated against the operational requirements of distribution tenants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="ruled-line py-5 lg:py-6 flex items-start gap-6 group"
            >
              <span className="font-display text-[10px] tracking-[0.2em] uppercase text-text-dim w-4 flex-shrink-0 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-base lg:text-lg font-medium text-foreground mb-1 group-hover:text-deep-green-light transition-colors">
                  {spec.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {spec.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitySpecs;
