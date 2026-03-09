import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";
import { BarChart3, GitBranch, MapPin, TrendingUp } from "lucide-react";

const services = [
  { icon: GitBranch, title: "Branch Segmentation", desc: "Quintile analysis and branch-level performance stratification to identify optimization opportunities across your network." },
  { icon: MapPin, title: "Network Optimization", desc: "Geographic and operational modeling to determine where branches should open, consolidate, or reposition." },
  { icon: BarChart3, title: "Footprint Strategy", desc: "Long-range facility planning aligned with market growth, customer density, and competitive positioning." },
  { icon: TrendingUp, title: "Growth Advisory", desc: "Strategic counsel for distributors at private, PE-backed, or public-company stages navigating expansion or repositioning." },
];

const Advisory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <p className="font-display text-xs uppercase tracking-widest text-primary font-bold mb-4">Advisory</p>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground mb-6 max-w-3xl mx-auto">
                Strategic Advisory
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Strategic support for distribution companies navigating growth, network optimization, 
                and footprint planning. Built on three decades of operating experience — not consulting theory.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
