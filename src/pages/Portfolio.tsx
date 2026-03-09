import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

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
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <p className="font-display text-xs uppercase tracking-widest text-primary font-bold mb-4">Portfolio</p>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
                Representative Facilities
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                A curated view of current and pipeline facilities across the Carolinas. Each property 
                is evaluated for distributor-grade operational functionality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((f, i) => (
                <motion.div
                  key={f.market}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin size={16} className="text-primary" />
                    <span className="font-display text-lg font-bold text-foreground">{f.market}</span>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-display font-semibold">Size / Eave</span>
                      <p className="text-sm text-foreground font-medium">{f.sf} · {f.eave}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-display font-semibold">Use Case</span>
                      <p className="text-sm text-foreground font-medium">{f.use}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-display font-semibold">Yard / IOS</span>
                      <p className="text-sm text-foreground font-medium">{f.yard}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs uppercase tracking-wider font-display font-bold text-primary">{f.status}</span>
                  </div>
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

export default Portfolio;
