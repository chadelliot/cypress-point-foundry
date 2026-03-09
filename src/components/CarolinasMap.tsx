import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import carolinasMap from "@/assets/carolinas-map.jpg";
import { CheckCircle2 } from "lucide-react";

const markets = [
  "Charlotte Metro",
  "Raleigh-Durham",
  "Triad (Greensboro / Winston-Salem)",
  "Greenville-Spartanburg",
  "Charleston",
  "Columbia",
];

const CarolinasMap = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-secondary" ref={ref} aria-label="Carolinas footprint">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground mb-6">
              Carolinas
              <br />
              <span className="text-primary">Footprint</span>
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed mb-10 max-w-md">
              Deep market knowledge across the primary industrial corridors of North Carolina 
              and South Carolina, where distribution networks are expanding.
            </p>

            <div className="space-y-3">
              <p className="font-display text-xs uppercase tracking-widest text-primary font-bold mb-4">
                Active Markets
              </p>
              {markets.map((m, i) => (
                <motion.div
                  key={m}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-display font-medium">{m}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <img
              src={carolinasMap}
              alt="Map of Carolinas industrial markets"
              className="w-full rounded-lg shadow-2xl"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarolinasMap;
