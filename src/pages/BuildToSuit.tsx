import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";

const capabilities = [
  { title: "Site Identification", desc: "Market analysis and site selection aligned with distribution network requirements and growth corridors." },
  { title: "Build-to-Suit Coordination", desc: "Project coordination from site control through construction, managing the process alongside operators." },
  { title: "Greenfield Support", desc: "Strategic greenfield assistance when existing inventory doesn't meet operational or geographic requirements." },
  { title: "Lease Structuring", desc: "Operator-informed lease frameworks that reflect distribution operating realities, not generic commercial terms." },
];

const BuildToSuit = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">Expansion</span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium tracking-[-0.03em] text-foreground mb-6 max-w-3xl">
                Expansion &amp; Build-to-Suit
              </h1>
              <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed max-w-2xl mb-12">
                Selective, strategic support for distribution operators requiring purpose-built facilities. 
                This is not speculative development — it's operator-informed site strategy.
              </p>
            </motion.div>

            <div className="ruled-line mb-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {capabilities.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="ruled-line py-6 lg:py-8"
                >
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">{c.title}</h3>
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
