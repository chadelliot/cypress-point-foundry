import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useEffect, useState } from "react";

const stats = [
  { value: 30, suffix: "+", label: "Years Distribution Experience", description: "Building materials & industrial operations" },
  { value: 50, suffix: "K", label: "Max Target SF", description: "15,000–50,000 SF sweet spot" },
  { value: 150, suffix: "+", label: "Branch Networks Managed", description: "Across private, PE & public phases" },
  { value: 6, suffix: "", label: "Carolinas Markets", description: "Deep regional concentration" },
];

const Counter = ({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value, inView]);
  
  return <span>{count}{suffix}</span>;
};

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-background border-t border-b border-border" ref={ref} aria-label="Statistics">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center lg:text-left"
            >
              <div className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-primary mb-2">
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-foreground mb-1">
                {stat.label}
              </h3>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
