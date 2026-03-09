import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Ruler, Truck, Box } from "lucide-react";
import { useState } from "react";

const facilities = [
  { 
    id: 1,
    market: "Charlotte Metro", 
    state: "NC",
    sf: "32,400", 
    use: "Building Materials Distribution", 
    yard: "0.8-acre secured yard, IOS-capable", 
    eave: "24'", 
    status: "Stabilized",
    features: ["Dock-High Doors", "Grade Access", "Fenced Yard"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format"
  },
  { 
    id: 2,
    market: "Greenville-Spartanburg", 
    state: "SC",
    sf: "24,000", 
    use: "HVAC Supply Distribution", 
    yard: "Dock-high + grade-level, trailer staging", 
    eave: "22'", 
    status: "Under Evaluation",
    features: ["Cross-Dock", "Trailer Parking", "Modern HVAC"],
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&auto=format"
  },
  { 
    id: 3,
    market: "Raleigh-Durham", 
    state: "NC",
    sf: "18,500", 
    use: "Electrical Supply Branch", 
    yard: "Fenced compound, IOS potential", 
    eave: "20'", 
    status: "Pipeline",
    features: ["Secured Compound", "IOS Ready", "Rail Adjacent"],
    image: "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?w=800&auto=format"
  },
  { 
    id: 4,
    market: "Triad", 
    state: "NC",
    sf: "28,000", 
    use: "Plumbing Supply Distribution", 
    yard: "Paved yard, 4 dock-high doors", 
    eave: "24'", 
    status: "Pipeline",
    features: ["4 Dock Doors", "Paved Yard", "Office Build-Out"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format"
  },
  { 
    id: 5,
    market: "Columbia", 
    state: "SC",
    sf: "22,000", 
    use: "Industrial Supply Branch", 
    yard: "Grade-level access, outdoor staging", 
    eave: "18'", 
    status: "Evaluating",
    features: ["Grade Level", "Staging Area", "Highway Access"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format"
  },
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        {/* Hero - Gallery Introduction */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7 }}
                className="lg:col-span-8"
              >
                <span className="font-display text-primary text-xs uppercase tracking-[0.3em] block mb-6">Portfolio</span>
                <h1 className="font-display text-5xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-foreground">
                  Representative<br />Facilities
                </h1>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-4"
              >
                <p className="text-muted-foreground text-lg leading-relaxed">
                  A curated view of current and pipeline facilities across the Carolinas. 
                  Each property is evaluated for distributor-grade operational functionality.
                </p>
              </motion.div>
            </div>
            
            {/* Stats Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mt-16"
            >
              {[
                { value: "5", label: "Active Properties" },
                { value: "124K", label: "Total SF" },
                { value: "2", label: "States" },
                { value: "100%", label: "Distribution Use" },
              ].map((stat) => (
                <div key={stat.label} className="bg-background p-6 text-center">
                  <span className="font-display text-3xl lg:text-4xl font-bold text-foreground block">{stat.value}</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Facilities Grid - Case Study Cards */}
        <section className="py-16 lg:py-24 section-dark">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {facilities.map((f, i) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative bg-dark-section-fg/5 border border-dark-section-fg/10 overflow-hidden hover:border-primary/30 transition-all"
                  onMouseEnter={() => setHoveredId(f.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image Section */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={f.image} 
                      alt={f.market}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-section via-dark-section/50 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <span className={`text-xs uppercase tracking-wider font-display font-bold px-3 py-1.5 ${
                        f.status === 'Stabilized' ? 'bg-primary text-primary-foreground' : 'bg-dark-section-fg/20 text-dark-section-fg'
                      }`}>
                        {f.status}
                      </span>
                    </div>
                    
                    {/* Location Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={16} className="text-primary" />
                        <span className="font-display text-2xl font-bold text-dark-section-fg">{f.market}</span>
                        <span className="text-dark-section-fg/60">{f.state}</span>
                      </div>
                      <p className="text-dark-section-fg/70 text-sm">{f.use}</p>
                    </div>
                  </div>
                  
                  {/* Details Section */}
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 bg-dark-section-fg/5">
                        <Ruler size={16} className="text-primary mx-auto mb-2" />
                        <span className="font-display text-lg font-bold text-dark-section-fg block">{f.sf}</span>
                        <span className="text-xs text-dark-section-fg/60 uppercase">SF</span>
                      </div>
                      <div className="text-center p-3 bg-dark-section-fg/5">
                        <Truck size={16} className="text-primary mx-auto mb-2" />
                        <span className="font-display text-lg font-bold text-dark-section-fg block">{f.eave}</span>
                        <span className="text-xs text-dark-section-fg/60 uppercase">Clear</span>
                      </div>
                      <div className="text-center p-3 bg-dark-section-fg/5">
                        <Box size={16} className="text-primary mx-auto mb-2" />
                        <span className="font-display text-lg font-bold text-dark-section-fg block">IOS</span>
                        <span className="text-xs text-dark-section-fg/60 uppercase">Capable</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {f.features.map((feature) => (
                        <span key={feature} className="text-xs text-dark-section-fg/70 bg-dark-section-fg/5 px-3 py-1.5 border border-dark-section-fg/10">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    {/* Hover Arrow */}
                    <div className={`absolute top-4 left-4 transition-all duration-300 ${
                      hoveredId === f.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}>
                      <ArrowUpRight size={24} className="text-primary" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl lg:text-4xl font-bold uppercase tracking-tight text-foreground mb-4">
                Have a Specific Market Requirement?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                We're actively evaluating opportunities across the Carolinas. Share your requirements.
              </p>
            </motion.div>
          </div>
        </section>

        <CTAFooter />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
