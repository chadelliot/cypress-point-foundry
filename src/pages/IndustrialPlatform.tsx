import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";

const specs = [
  { label: "Eave Heights", detail: "18'–28' clear heights accommodating selective racking and distribution workflows" },
  { label: "Column Spacing", detail: "Wide bays enabling efficient forklift traffic and aisle planning" },
  { label: "Truck Courts", detail: "Adequate turning radii for 53' trailers, dock-high and grade-level access" },
  { label: "Yard Depth", detail: "Functional staging areas for trailer queuing and outdoor operations" },
  { label: "IOS Capability", detail: "Industrial Outdoor Storage for materials staging, equipment, and inventory overflow" },
  { label: "Pulling Stations", detail: "Optimized pick-path flow and order assembly configurations" },
  { label: "Rack Layout", detail: "Floor load capacity and bay dimensions for selective and drive-in racking" },
  { label: "Single-Tenant", detail: "Dedicated facilities without shared-space compromises" },
];

const IndustrialPlatform = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <p className="font-display text-xs uppercase tracking-widest text-primary font-bold mb-4">Industrial Platform</p>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground mb-6 max-w-4xl mx-auto">
                Distributor-Grade Facilities Built for Operational Throughput
              </h1>
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
                Cypress Point acquires and operates 15,000–50,000 SF industrial facilities across the Carolinas. 
                Every building is evaluated against the functional requirements of distribution tenants.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <span className="font-display text-xs uppercase tracking-widest text-primary font-bold block mb-3">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-base font-bold uppercase tracking-tight text-foreground mb-2">{spec.label}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{spec.detail}</p>
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

export default IndustrialPlatform;
