import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";
import { Ruler, Box, Truck, TreeDeciduous, LayoutGrid, Warehouse, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const specs = [
  { icon: Ruler, label: "Eave Heights", value: "18'–28'", detail: "Clear heights accommodating selective racking and distribution workflows" },
  { icon: LayoutGrid, label: "Column Spacing", value: "40'×50'+", detail: "Wide bays enabling efficient forklift traffic and aisle planning" },
  { icon: Truck, label: "Truck Courts", value: "130'+", detail: "Adequate turning radii for 53' trailers, dock-high and grade-level access" },
  { icon: TreeDeciduous, label: "Yard Depth", value: "Variable", detail: "Functional staging areas for trailer queuing and outdoor operations" },
  { icon: Box, label: "IOS Capability", value: "Standard", detail: "Industrial Outdoor Storage for materials staging and inventory overflow" },
  { icon: Warehouse, label: "Pulling Stations", value: "Optimized", detail: "Efficient pick-path flow and order assembly configurations" },
];

const IndustrialPlatform = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        {/* Hero - Immersive Full Bleed */}
        <section className="relative min-h-[80vh] flex items-center">
          <div className="absolute inset-0">
            <img src={heroBg} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-dark-section via-dark-section/95 to-dark-section/70" />
          </div>
          
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
            <motion.div 
              initial={{ opacity: 0, y: 40 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-16 bg-primary" />
                <span className="font-display text-primary text-xs uppercase tracking-[0.3em]">Industrial Platform</span>
              </div>
              
              <h1 className="font-display text-5xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-dark-section-fg mb-8">
                Distributor-Grade<br />
                <span className="text-primary">Facilities</span>
              </h1>
              
              <p className="text-dark-section-fg/70 text-xl lg:text-2xl leading-relaxed max-w-2xl mb-12">
                Cypress Point acquires and operates 15,000–50,000 SF industrial facilities across the Carolinas. 
                Every building is evaluated against the functional requirements of distribution tenants.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="bg-dark-section-fg/10 backdrop-blur px-6 py-4 border-l-2 border-primary">
                  <span className="font-display text-3xl lg:text-4xl font-bold text-dark-section-fg">15K–50K</span>
                  <span className="block text-dark-section-fg/60 text-sm uppercase tracking-wider">Square Feet</span>
                </div>
                <div className="bg-dark-section-fg/10 backdrop-blur px-6 py-4 border-l-2 border-primary">
                  <span className="font-display text-3xl lg:text-4xl font-bold text-dark-section-fg">Carolinas</span>
                  <span className="block text-dark-section-fg/60 text-sm uppercase tracking-wider">Market Focus</span>
                </div>
                <div className="bg-dark-section-fg/10 backdrop-blur px-6 py-4 border-l-2 border-primary">
                  <span className="font-display text-3xl lg:text-4xl font-bold text-dark-section-fg">Single</span>
                  <span className="block text-dark-section-fg/60 text-sm uppercase tracking-wider">Tenant Model</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Specs - Large Number Grid */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
                Facility Specifications
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Operational specifications that matter to distribution operators — not generic commercial metrics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors"
                >
                  <div className="flex items-start justify-between mb-6">
                    <spec.icon size={28} className="text-primary" strokeWidth={1.5} />
                    <span className="font-display text-5xl lg:text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-foreground mb-2">
                    {spec.label}
                  </h3>
                  <span className="font-display text-2xl font-bold text-primary block mb-4">{spec.value}</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {spec.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tenant Focus - Marquee Style */}
        <section className="py-24 lg:py-32 section-dark overflow-hidden">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight text-dark-section-fg mb-4">
                Target Tenants
              </h2>
              <p className="text-dark-section-fg/70 text-lg max-w-2xl">
                Industrial distribution companies with branch-level facility requirements.
              </p>
            </motion.div>
          </div>
          
          {/* Scrolling Marquee */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark-section to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark-section to-transparent z-10" />
            
            <motion.div 
              animate={{ x: [0, -1920] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-8 whitespace-nowrap"
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-8">
                  {[
                    "Building Materials", "HVAC Supply", "Electrical Distribution", "Plumbing Supply",
                    "Industrial Supply", "Roofing Materials", "Fastener Distribution", "Safety Products"
                  ].map((industry) => (
                    <div key={`${setIndex}-${industry}`} className="flex items-center gap-4 px-8 py-6 border border-dark-section-fg/10">
                      <ArrowRight size={16} className="text-primary" />
                      <span className="font-display text-xl uppercase tracking-wider text-dark-section-fg">{industry}</span>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground mb-8">
                  Why <span className="text-primary">Cypress Point</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Most industrial landlords don't understand distribution operations. They evaluate facilities 
                    based on financial metrics — not operational throughput.
                  </p>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Cypress Point evaluates every facility the way an operator would: Can a 53' trailer turn here? 
                    Is there adequate staging? Will this layout support efficient picking paths?
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                {[
                  { q: "What if the truck court is too shallow?", a: "Productivity loss, driver complaints, safety risk." },
                  { q: "What if rack layout doesn't fit?", a: "Wasted cubic footage, picking inefficiency." },
                  { q: "What if there's no yard for IOS?", a: "Limited seasonal staging, inventory bottlenecks." },
                ].map((item, i) => (
                  <div key={item.q} className="p-6 bg-card border border-border">
                    <span className="font-display text-sm text-primary block mb-2">Common Problem</span>
                    <p className="font-display text-lg font-bold text-foreground mb-3">{item.q}</p>
                    <p className="text-muted-foreground text-sm">{item.a}</p>
                  </div>
                ))}
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

export default IndustrialPlatform;
