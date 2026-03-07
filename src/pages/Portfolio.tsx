import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";

const facilities = [
  { market: "Charlotte Metro, NC", sf: "32,400 SF", use: "Building materials distribution", yard: "0.8-acre secured yard, IOS-capable", eave: "24' clear", status: "Stabilized" },
  { market: "Greenville-Spartanburg, SC", sf: "24,000 SF", use: "HVAC supply distribution", yard: "Dock-high + grade-level, trailer staging", eave: "22' clear", status: "Under evaluation" },
  { market: "Raleigh-Durham, NC", sf: "18,500 SF", use: "Electrical supply branch", yard: "Fenced compound, IOS potential", eave: "20' clear", status: "Pipeline" },
  { market: "Triad, NC", sf: "28,000 SF", use: "Plumbing supply distribution", yard: "Paved yard, 4 dock-high doors", eave: "24' clear", status: "Pipeline" },
  { market: "Columbia, SC", sf: "22,000 SF", use: "Industrial supply branch", yard: "Grade-level access, outdoor staging", eave: "18' clear", status: "Evaluating" },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">Portfolio</span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium tracking-[-0.03em] text-foreground mb-6 max-w-3xl">
                Representative facilities
              </h1>
              <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed max-w-2xl mb-12">
                A curated view of current and pipeline facilities across the Carolinas. Each property 
                is evaluated for distributor-grade operational functionality.
              </p>
            </motion.div>

            <div className="ruled-line mb-0" />
            {facilities.map((f, i) => (
              <motion.div
                key={f.market}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="ruled-line py-6 lg:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start"
              >
                <div className="md:col-span-3">
                  <span className="font-display text-base lg:text-lg font-medium text-foreground">{f.market}</span>
                </div>
                <div className="md:col-span-2">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-text-dim font-display block mb-0.5">Size / Eave</span>
                  <span className="text-sm text-foreground">{f.sf} · {f.eave}</span>
                </div>
                <div className="md:col-span-3">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-text-dim font-display block mb-0.5">Use Case</span>
                  <span className="text-sm text-foreground">{f.use}</span>
                </div>
                <div className="md:col-span-3">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-text-dim font-display block mb-0.5">Yard / IOS</span>
                  <span className="text-sm text-foreground">{f.yard}</span>
                </div>
                <div className="md:col-span-1 flex justify-end">
                  <span className="text-[10px] tracking-[0.1em] uppercase font-display text-deep-green">{f.status}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        <CTAFooter />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
