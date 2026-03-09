import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, MapPin, Truck } from "lucide-react";

const criteria = [
  {
    icon: Building2,
    metric: "15,000–50,000 SF",
    label: "Facility Size Range",
    description: "Targeting the underserved middle-market industrial segment where distributor-grade tenants operate.",
  },
  {
    icon: MapPin,
    metric: "Carolinas Focused",
    label: "Regional Concentration",
    description: "Deep market knowledge across North Carolina and South Carolina industrial corridors.",
  },
  {
    icon: Truck,
    metric: "Distributor Ready",
    label: "IOS-Aware Facilities",
    description: "Buildings configured for loading, yard operations, truck access, and industrial outdoor storage.",
  },
];

const FocusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-background texture-dots relative" ref={ref} aria-label="What we focus on">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            What We Focus On
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Purpose-built criteria for identifying and operating industrial facilities that serve distributor-grade tenants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {criteria.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <item.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold uppercase tracking-tight text-foreground mb-3">
                {item.metric}
              </h3>
              <p className="font-display text-sm uppercase tracking-wider text-primary font-semibold mb-3">
                {item.label}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
