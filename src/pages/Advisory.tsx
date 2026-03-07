import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";

const services = [
  { title: "Branch Segmentation", desc: "Quintile analysis and branch-level performance stratification to identify optimization opportunities across your network." },
  { title: "Network Optimization", desc: "Geographic and operational modeling to determine where branches should open, consolidate, or reposition." },
  { title: "Footprint Strategy", desc: "Long-range facility planning aligned with market growth, customer density, and competitive positioning." },
  { title: "Growth Advisory", desc: "Strategic counsel for distributors at private, PE-backed, or public-company stages navigating expansion or repositioning." },
];

const Advisory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">Advisory</span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium tracking-[-0.03em] text-foreground mb-6 max-w-3xl">
                Strategic Advisory
              </h1>
              <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed max-w-2xl mb-12">
                Strategic support for distribution companies navigating growth, network optimization, 
                and footprint planning. Built on three decades of operating experience — not consulting theory.
              </p>
            </motion.div>

            <div className="ruled-line mb-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="ruled-line py-6 lg:py-8"
                >
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">{s.title}</h3>
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
