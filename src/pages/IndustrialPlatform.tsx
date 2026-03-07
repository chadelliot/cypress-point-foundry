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
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">Industrial Platform</span>
              <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium tracking-[-0.03em] text-foreground mb-6 max-w-3xl">
                Distributor-grade facilities built for operational throughput
              </h1>
              <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed max-w-2xl mb-12">
                Cypress Point acquires and operates 15,000–50,000 SF industrial facilities across the Carolinas. 
                Every building is evaluated against the functional requirements of distribution tenants — 
                not financial engineering assumptions.
              </p>
            </motion.div>

            <div className="ruled-line mb-0" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {specs.map((spec, i) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
                  className="ruled-line py-5 lg:py-6 flex items-start gap-6"
                >
                  <span className="font-display text-[10px] tracking-[0.2em] uppercase text-text-dim w-4 flex-shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-medium text-foreground mb-1">{spec.label}</h3>
                    <p className="text-sm text-muted-foreground">{spec.detail}</p>
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

export default IndustrialPlatform;
