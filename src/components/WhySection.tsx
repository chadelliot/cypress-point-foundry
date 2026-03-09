import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Factory, Shield, Target, Users } from "lucide-react";

const reasons = [
  {
    icon: Factory,
    title: "Operator-Informed Underwriting",
    description: "We evaluate facilities through the lens of actual distribution operations — not generic commercial real estate metrics. Pulling paths, rack configurations, and yard staging matter.",
    highlight: "Not a broker playbook",
  },
  {
    icon: Target,
    title: "Middle-Market Focus",
    description: "The 15,000–50,000 SF industrial segment is often overlooked by institutional players chasing scale. We specialize exactly where distributors need space.",
    highlight: "Purpose-built for distributors",
  },
  {
    icon: Shield,
    title: "Operational Credibility",
    description: "Munroe Best managed branch networks before entering real estate. He understands productivity losses from poor site selection firsthand.",
    highlight: "30+ years operator experience",
  },
  {
    icon: Users,
    title: "Aligned Interests",
    description: "We buy and hold facilities for long-term operational success — not quick flips. Our tenant relationships are partnerships, not transactions.",
    highlight: "Long-term operator alignment",
  },
];

const WhySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-secondary" ref={ref} aria-label="Why Cypress Point">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="font-display text-xs uppercase tracking-widest text-primary font-bold mb-4">
            Our Difference
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            Why Cypress Point
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We're not generalists. We're industrial operators who happen to own real estate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:border-primary/30 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500" />
              
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <reason.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-[10px] tracking-wider uppercase font-display font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                      {reason.highlight}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
