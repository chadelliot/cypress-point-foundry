import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">Contact</span>
                <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium tracking-[-0.03em] text-foreground mb-6">
                  Start a conversation
                </h1>
                <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-md">
                  Whether you're evaluating a market requirement, exploring build-to-suit, 
                  or seeking advisory on distribution network strategy.
                </p>
                <div className="ruled-line pt-6">
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim font-display block mb-1">Email</span>
                      <a href="mailto:info@cypresspoint.com" className="text-sm text-foreground hover:text-deep-green-light transition-colors">
                        info@cypresspoint.com
                      </a>
                    </div>
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim font-display block mb-1">Location</span>
                      <span className="text-sm text-foreground">Charlotte, North Carolina</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-text-dim font-display block mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-text-dim font-display block mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
                      placeholder="Company name"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-text-dim font-display block mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-text-dim font-display block mb-2">Inquiry Type</label>
                    <select className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors">
                      <option value="" className="bg-background">Select inquiry type</option>
                      <option value="availability" className="bg-background">Inquire About Availability</option>
                      <option value="market" className="bg-background">Submit Market Requirement</option>
                      <option value="bts" className="bg-background">Discuss Build-to-Suit</option>
                      <option value="advisory" className="bg-background">Explore Advisory Engagement</option>
                      <option value="general" className="bg-background">General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] tracking-[0.2em] uppercase text-text-dim font-display block mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-transparent border-b border-border py-3 text-sm text-foreground focus:outline-none focus:border-foreground transition-colors placeholder:text-muted-foreground resize-none"
                      placeholder="Tell us about your requirements"
                    />
                  </div>
                  <Button size="lg" type="submit" className="mt-4 font-display text-sm tracking-wider uppercase font-bold">
                    Submit Inquiry
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
