import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTAFooter from "@/components/CTAFooter";
import { motion } from "framer-motion";
import founderImg from "@/assets/founder-portrait.jpg";

const milestones = [
  { year: "1990s", title: "Distribution Roots", desc: "Began career in building materials distribution, learning the operational fundamentals of branch management." },
  { year: "2000s", title: "Network Scale", desc: "Led multi-branch operations across regional markets, understanding the productivity impact of facility design." },
  { year: "2010s", title: "Executive Leadership", desc: "Senior roles in PE-backed and public distribution companies, managing large-scale footprint decisions." },
  { year: "2020s", title: "Cypress Point", desc: "Founded operator-informed industrial real estate platform focused on distributor-grade facilities." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        {/* Hero - Editorial Magazine Style */}
        <section className="relative min-h-[70vh] flex items-center section-dark overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 border border-primary/30 rounded-full" />
            <div className="absolute bottom-20 right-20 w-64 h-64 border border-primary/20 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary/10 rounded-full" />
          </div>
          
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -40 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8 }}
                className="lg:col-span-5"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/10 -z-10" />
                  <img
                    src={founderImg}
                    alt="Munroe Best, Founder of Cypress Point"
                    className="w-full aspect-[3/4] object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4">
                    <span className="font-display text-4xl font-bold">30+</span>
                    <span className="block text-sm uppercase tracking-wider">Years</span>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 40 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7"
              >
                <p className="font-display text-primary text-sm uppercase tracking-[0.3em] mb-6">Founder & Principal</p>
                <h1 className="font-display text-5xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-dark-section-fg mb-8">
                  Munroe<br />Best
                </h1>
                <div className="h-px bg-gradient-to-r from-primary to-transparent mb-8 max-w-md" />
                <p className="text-xl lg:text-2xl text-dark-section-fg/80 font-light leading-relaxed max-w-xl">
                  "Industrial distribution tenants deserve a landlord who understands their operations — 
                  someone who speaks their language."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section - Large Pull Quote Style */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[200px] lg:text-[280px] font-display font-bold text-primary/10 leading-none block -mb-20 lg:-mb-28">"</span>
                <p className="text-2xl lg:text-3xl text-foreground font-light leading-relaxed relative z-10">
                  With more than 30 years in building materials and industrial distribution, 
                  Munroe brings an <span className="text-primary font-medium">operator's perspective</span> to industrial real estate.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Understanding how facility layout, site access, and yard functionality directly impact 
                  distribution throughput and branch profitability is foundational to every investment decision.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  His experience spans private, private equity-backed, and publicly traded distribution companies. 
                  He has managed large multi-branch networks and understands the productivity losses that come 
                  from inconsistent site layouts, inadequate truck access, and facilities that weren't designed 
                  for distribution.
                </p>
                <div className="pt-6 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">Private Distribution Companies</span>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">PE-Backed Platforms</span>
                  </div>
                  <div className="flex items-center gap-4 mt-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">Public Company Leadership</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 lg:py-32 section-dark">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl lg:text-5xl font-bold uppercase tracking-tight text-dark-section-fg">
                Career Journey
              </h2>
            </motion.div>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />
              
              {milestones.map((milestone, i) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                    i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark-section z-10" />
                  
                  {/* Content */}
                  <div className={`ml-20 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                    <span className="font-display text-primary text-sm uppercase tracking-[0.2em] block mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-dark-section-fg mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-dark-section-fg/70 leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 lg:py-32 bg-background">
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                { num: "01", title: "Operator-First", desc: "Every facility is evaluated through the lens of distribution operations, not financial engineering." },
                { num: "02", title: "Relationship-Driven", desc: "Long-term tenant partnerships over transactional landlord dynamics." },
                { num: "03", title: "Market-Focused", desc: "Deep specialization in the Carolinas industrial distribution landscape." },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative p-8 lg:p-10 border-l-2 border-primary/20 hover:border-primary transition-colors"
                >
                  <span className="font-display text-6xl lg:text-7xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors absolute top-4 right-4">
                    {item.num}
                  </span>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-foreground mb-4 relative z-10">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed relative z-10">
                    {item.desc}
                  </p>
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

export default About;
