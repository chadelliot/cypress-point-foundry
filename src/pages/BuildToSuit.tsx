import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";
import { Compass, MapPin, Hammer, FileText } from "lucide-react";

const capabilities = [
  { icon: MapPin, title: "Site Identification", desc: "Market analysis and site selection aligned with distribution network requirements and growth corridors." },
  { icon: Hammer, title: "Build-to-Suit Coordination", desc: "Project coordination from site control through construction, managing the process alongside operators." },
  { icon: Compass, title: "Greenfield Support", desc: "Strategic greenfield assistance when existing inventory doesn't meet operational or geographic requirements." },
  { icon: FileText, title: "Lease Structuring", desc: "Operator-informed lease frameworks that reflect distribution operating realities, not generic commercial terms." },
];

const BuildToSuit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <p className="font-display text-xs uppercase tracking-widest text-primary font-bold mb-4">Expansion</p>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground mb-6 max-w-3xl mx-auto">
                Expansion &amp; Build-to-Suit
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Selective, strategic support for distribution operators requiring purpose-built facilities. 
                This is not speculative development — it's operator-informed site strategy.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <c.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
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

export default BuildToSuit;
