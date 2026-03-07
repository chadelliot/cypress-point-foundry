import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import carolinasMap from "@/assets/carolinas-map.jpg";

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
    <section className="py-20 lg:py-32 bg-secondary/50" ref={ref} aria-label="Carolinas footprint">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">
              Regional Focus
            </span>
            <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium tracking-[-0.02em] text-foreground mb-6">
              Carolinas footprint
            </h2>
            <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-md">
              Deep market knowledge across the primary industrial corridors of North Carolina 
              and South Carolina, where distribution networks are expanding.
            </p>

            <div className="ruled-line pt-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim font-display block mb-4">
                Active Markets
              </span>
              <div className="grid grid-cols-2 gap-3">
                {markets.map((m, i) => (
                  <motion.span
                    key={m}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="text-sm text-foreground font-display"
                  >
                    {m}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <img
              src={carolinasMap}
              alt="Map of Carolinas industrial markets"
              className="w-full rounded-sm opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-sm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CarolinasMap;
