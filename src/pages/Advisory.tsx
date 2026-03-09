import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";
import { BarChart3, GitBranch, MapPin, TrendingUp, ArrowUpRight, Layers } from "lucide-react";

const services = [
  { 
    icon: GitBranch, 
    title: "Branch Segmentation", 
    desc: "Quintile analysis and branch-level performance stratification to identify optimization opportunities across your network.",
    metrics: ["Performance Quintiles", "Revenue Distribution", "Margin Analysis"]
  },
  { 
    icon: MapPin, 
    title: "Network Optimization", 
    desc: "Geographic and operational modeling to determine where branches should open, consolidate, or reposition.",
    metrics: ["Coverage Mapping", "Overlap Analysis", "Growth Corridors"]
  },
  { 
    icon: BarChart3, 
    title: "Footprint Strategy", 
    desc: "Long-range facility planning aligned with market growth, customer density, and competitive positioning.",
    metrics: ["Market Sizing", "Expansion Planning", "Facility ROI"]
  },
  { 
    icon: TrendingUp, 
    title: "Growth Advisory", 
    desc: "Strategic counsel for distributors at private, PE-backed, or public-company stages navigating expansion or repositioning.",
    metrics: ["M&A Support", "Integration Planning", "Exit Preparation"]
  },
];

const Advisory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        {/* Hero - Dashboard Aesthetic */}
        <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            {/* Grid Pattern */}
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>
          
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7 }}
                className="lg:col-span-7"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 border border-primary/20 mb-6">
                  <Layers size={14} className="text-primary" />
                  <span className="font-display text-xs uppercase tracking-[0.15em] text-primary">Strategic Advisory</span>
                </div>
                <h1 className="font-display text-4xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-foreground mb-6">
                  Data-Driven<br />
                  <span className="text-muted-foreground">Distribution</span><br />
                  Strategy
                </h1>
                <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-xl">
                  Strategic support for distribution companies navigating growth, network optimization, 
                  and footprint planning. Built on three decades of operating experience — not consulting theory.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-5"
              >
                {/* Mock Dashboard Card */}
                <div className="bg-card border border-border p-6 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-border">
                    <span className="font-display text-sm uppercase tracking-wider text-muted-foreground">Network Health</span>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1">Live Analysis</span>
                  </div>
                  
                  {/* Mock Metrics */}
                  <div className="space-y-4">
                    {[
                      { label: "Top Quintile", value: "23%", change: "+4.2%", bar: 85 },
                      { label: "Mid Performers", value: "52%", change: "+1.8%", bar: 65 },
                      { label: "Optimization Targets", value: "25%", change: "-2.1%", bar: 40 },
                    ].map((metric) => (
                      <div key={metric.label} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                          <div className="flex items-center gap-2">
                            <span className="font-display font-bold text-foreground">{metric.value}</span>
                            <span className={`text-xs ${metric.change.startsWith('+') ? 'text-primary' : 'text-destructive'}`}>
                              {metric.change}
                            </span>
                          </div>
                        </div>
                        <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${metric.bar}%` }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-primary rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services - Bento Grid */}
        <section className="py-24 lg:py-32 section-dark">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight text-dark-section-fg mb-4">
                Advisory Services
              </h2>
              <p className="text-dark-section-fg/70 text-lg max-w-2xl">
                Operator-informed strategic support across the distribution growth lifecycle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative bg-dark-section-fg/5 border border-dark-section-fg/10 p-8 lg:p-10 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon size={24} className="text-primary" />
                    </div>
                    <ArrowUpRight size={20} className="text-dark-section-fg/30 group-hover:text-primary transition-colors" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-dark-section-fg mb-4">
                    {service.title}
                  </h3>
                  <p className="text-dark-section-fg/70 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-dark-section-fg/10">
                    {service.metrics.map((metric) => (
                      <span key={metric} className="text-xs uppercase tracking-wider text-primary bg-primary/10 px-3 py-1.5">
                        {metric}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Bands */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight text-foreground mb-4">
                Stage-Appropriate Guidance
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Advisory calibrated to your organization's current phase and growth objectives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
              {[
                { stage: "Private", desc: "Founder-led growth, initial network expansion, operational foundation building", focus: "Efficiency & Scale" },
                { stage: "PE-Backed", desc: "Platform expansion, bolt-on integration, footprint optimization, exit preparation", focus: "Integration & Value" },
                { stage: "Public", desc: "Multi-regional optimization, investor-aligned metrics, continuous improvement", focus: "Performance & Returns" },
              ].map((item, i) => (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 lg:p-10 ${i !== 2 ? 'border-r border-border' : ''} hover:bg-card transition-colors group`}
                >
                  <span className="font-display text-7xl lg:text-8xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors block mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground mb-2">
                    {item.stage}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-primary mb-4 block">{item.focus}</span>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTAFooter />
      </main>
      <Footer />
    </div>
  );
};

export default Advisory;
