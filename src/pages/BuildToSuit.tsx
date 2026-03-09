import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";
import { Compass, MapPin, Hammer, FileText, ArrowRight, CheckCircle2 } from "lucide-react";

const phases = [
  { 
    phase: "01", 
    title: "Discovery", 
    icon: Compass,
    duration: "2-4 Weeks",
    desc: "Market analysis and site selection aligned with distribution network requirements and growth corridors.",
    deliverables: ["Market Assessment", "Site Shortlist", "Feasibility Analysis"]
  },
  { 
    phase: "02", 
    title: "Site Control", 
    icon: MapPin,
    duration: "4-8 Weeks",
    desc: "Strategic site identification and acquisition negotiations with operator-informed due diligence.",
    deliverables: ["Site Selection", "LOI Negotiation", "Environmental Review"]
  },
  { 
    phase: "03", 
    title: "Development", 
    icon: Hammer,
    duration: "6-12 Months",
    desc: "Build-to-suit coordination from design through construction, managing the process alongside operators.",
    deliverables: ["Design Development", "Permitting", "Construction Management"]
  },
  { 
    phase: "04", 
    title: "Occupancy", 
    icon: FileText,
    duration: "Ongoing",
    desc: "Operator-informed lease frameworks and ongoing facility optimization support.",
    deliverables: ["Lease Execution", "Tenant Coordination", "Facility Handoff"]
  },
];

const BuildToSuit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        {/* Hero - Bold Statement */}
        <section className="relative py-24 lg:py-32 section-dark overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/5 to-transparent" />
          </div>
          
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
                <span className="inline-block px-4 py-2 bg-primary/20 text-primary font-display text-xs uppercase tracking-[0.2em] mb-6">
                  Expansion Support
                </span>
                <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-dark-section-fg mb-6">
                  Build-to-Suit<br />
                  <span className="text-primary">Done Right</span>
                </h1>
                <p className="text-dark-section-fg/70 text-lg lg:text-xl leading-relaxed max-w-xl">
                  Selective, strategic support for distribution operators requiring purpose-built facilities. 
                  This is not speculative development — it's operator-informed site strategy.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "15K", label: "Minimum SF" },
                    { value: "50K", label: "Maximum SF" },
                    { value: "12", label: "Month Typical" },
                    { value: "100%", label: "Operator-Led" },
                  ].map((stat, i) => (
                    <div key={stat.label} className="bg-dark-section-fg/5 backdrop-blur p-6 text-center border border-dark-section-fg/10">
                      <span className="font-display text-3xl lg:text-4xl font-bold text-primary block">{stat.value}</span>
                      <span className="text-dark-section-fg/60 text-sm uppercase tracking-wider">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Timeline - Horizontal */}
        <section className="py-24 lg:py-32 bg-background overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A disciplined, operator-informed approach from market analysis to occupancy.
              </p>
            </motion.div>

            {/* Timeline Container */}
            <div className="relative">
              {/* Horizontal Line */}
              <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
              
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {phases.map((phase, i) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative"
                  >
                    {/* Phase Number Circle */}
                    <div className="relative z-10 w-12 h-12 mx-auto lg:mx-0 mb-6 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                      <span className="font-display font-bold text-primary">{phase.phase}</span>
                    </div>
                    
                    {/* Arrow (desktop only) */}
                    {i < phases.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute top-[42px] -right-4 text-primary/40" size={24} />
                    )}
                    
                    {/* Content Card */}
                    <div className="bg-card border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all group">
                      <div className="flex items-center gap-3 mb-4">
                        <phase.icon size={20} className="text-primary" />
                        <span className="text-xs uppercase tracking-wider text-muted-foreground">{phase.duration}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">
                        {phase.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {phase.desc}
                      </p>
                      <div className="space-y-2 pt-4 border-t border-border">
                        {phase.deliverables.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 size={14} className="text-primary" />
                            <span className="text-muted-foreground">{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section - Split */}
        <section className="py-24 lg:py-32 section-dark">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tight text-dark-section-fg mb-8">
                  What We <span className="text-primary">Do</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Operator-aligned site selection",
                    "Distribution-specific due diligence",
                    "Build-to-suit project coordination",
                    "Greenfield development support",
                    "Lease structure optimization",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-dark-section-fg/5 border-l-2 border-primary"
                    >
                      <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                      <span className="text-dark-section-fg">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tight text-dark-section-fg mb-8">
                  What We <span className="text-dark-section-fg/40">Don't Do</span>
                </h2>
                <div className="space-y-4">
                  {[
                    "Speculative ground-up development",
                    "Generic commercial brokerage",
                    "Non-distribution asset types",
                    "Markets outside the Carolinas",
                    "One-size-fits-all lease templates",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-dark-section-fg/5 border-l-2 border-dark-section-fg/20"
                    >
                      <span className="w-5 h-0.5 bg-dark-section-fg/40" />
                      <span className="text-dark-section-fg/60">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <CTAFooter />
      </main>
      <Footer />
    </div>
  );
};

export default BuildToSuit;
