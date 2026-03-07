import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";
import founderImg from "@/assets/founder-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">About</span>
                <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium tracking-[-0.03em] text-foreground mb-6">
                  Munroe Best
                </h1>
                <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-6">
                  With more than 30 years in building materials and industrial distribution, 
                  Munroe brings an operator's perspective to industrial real estate — understanding 
                  how facility layout, site access, and yard functionality directly impact 
                  distribution throughput and branch profitability.
                </p>
                <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-6">
                  His experience spans private, private equity-backed, and publicly traded 
                  distribution companies. He has managed large multi-branch networks and 
                  understands the productivity losses that come from inconsistent site layouts, 
                  inadequate truck access, and facilities that weren't designed for distribution.
                </p>
                <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed">
                  Cypress Point was founded on the conviction that industrial distribution tenants 
                  deserve a landlord who understands their operations — someone who speaks their 
                  language and evaluates facilities the way an operator would.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    src={founderImg}
                    alt="Munroe Best, Founder of Cypress Point"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <CTAFooter />
      </main>
      <Footer />
    </div>
  );
};

export default About;
