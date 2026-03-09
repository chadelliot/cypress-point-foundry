import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FileCheck, Handshake, Settings } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "We learn your operational requirements — square footage, eave heights, dock access, yard needs, and growth trajectory.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Evaluation",
    description: "We assess facilities against distributor-specific criteria: pulling efficiency, rack compatibility, truck geometry, and IOS potential.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Alignment",
    description: "We structure lease frameworks that reflect operating realities, not generic commercial terms. Flexible, fair, operator-informed.",
  },
  {
    icon: Settings,
    step: "04",
    title: "Optimization",
    description: "We remain engaged post-occupancy to ensure the facility performs for your operation — adjustments, improvements, expansions.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-background" ref={ref} aria-label="Our Process">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="font-display text-xs uppercase tracking-widest text-primary font-bold mb-4">
            How We Work
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            Our Approach
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A disciplined process built around understanding how distributors actually operate.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="relative text-center group"
              >
                {/* Step number circle */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-card border-2 border-border group-hover:border-primary transition-colors mb-6 mx-auto">
                  <span className="font-display text-2xl font-bold text-primary">{step.step}</span>
                </div>
                
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <step.icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
