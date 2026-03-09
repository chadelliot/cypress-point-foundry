import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpDown, Columns3, Truck, Warehouse, Package, LayoutGrid, Trees } from "lucide-react";

const specs = [
  { icon: ArrowUpDown, label: "Eave Heights", detail: "Clear heights suited for racking and distribution operations" },
  { icon: Columns3, label: "Column Spacing", detail: "Layouts compatible with forklift circulation and aisle planning" },
  { icon: Truck, label: "Truck Access", detail: "Dock-high doors, grade-level access, and turning geometry" },
  { icon: Warehouse, label: "Yard Functionality", detail: "Trailer staging, queuing, and operational yard depth" },
  { icon: Package, label: "Pulling Stations", detail: "Configured for efficient order assembly and pick-path flow" },
  { icon: LayoutGrid, label: "Rack Layout", detail: "Floor load capacity and bay dimensions for selective racking" },
  { icon: Trees, label: "IOS Potential", detail: "Industrial Outdoor Storage for materials, equipment, and staging" },
];

const FacilitySpecs = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 section-dark texture-blueprint-dark texture-noise relative" ref={ref} aria-label="Facility specifications">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            Built to Operate.
            <br />
            <span className="text-primary">Designed to Perform.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Every acquisition is evaluated against the operational requirements of distribution tenants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className={`p-6 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group ${i === 6 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <spec.icon size={24} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-base font-bold uppercase tracking-wide text-white mb-2">
                {spec.label}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {spec.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitySpecs;
