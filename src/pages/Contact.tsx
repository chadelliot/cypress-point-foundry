import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MapPin, Building2 } from "lucide-react";

const inquiryTypes = [
  { value: "availability", label: "Inquire About Availability", desc: "Explore current and pipeline properties" },
  { value: "market", label: "Submit Market Requirement", desc: "Share your facility needs" },
  { value: "bts", label: "Discuss Build-to-Suit", desc: "Purpose-built facility development" },
  { value: "advisory", label: "Explore Advisory Engagement", desc: "Strategic growth support" },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-28">
        {/* Hero Split Screen */}
        <section className="min-h-[calc(100vh-7rem)] grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Dark Info Panel */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8 }}
            className="section-dark p-8 lg:p-16 xl:p-20 flex flex-col justify-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/4 -left-20 w-96 h-96 border border-primary rounded-full" />
              <div className="absolute bottom-1/4 -right-20 w-64 h-64 border border-primary rounded-full" />
            </div>
            
            <div className="relative z-10 max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <span className="font-display text-primary text-xs uppercase tracking-[0.3em] block mb-8">Get in Touch</span>
                <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-dark-section-fg mb-8">
                  Start a<br />
                  <span className="text-primary">Conversation</span>
                </h1>
                <p className="text-dark-section-fg/70 text-lg leading-relaxed mb-12">
                  Whether you're evaluating a market requirement, exploring build-to-suit, 
                  or seeking advisory on distribution network strategy.
                </p>
              </motion.div>
              
              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="space-y-4"
              >
                <a href="mailto:info@cypresspoint.com" className="group flex items-center gap-4 p-4 bg-dark-section-fg/5 border border-dark-section-fg/10 hover:border-primary/30 transition-all">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-dark-section-fg/60 block">Email</span>
                    <span className="text-dark-section-fg font-medium group-hover:text-primary transition-colors">info@cypresspoint.com</span>
                  </div>
                  <ArrowRight size={16} className="text-dark-section-fg/30 ml-auto group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>
                
                <div className="flex items-center gap-4 p-4 bg-dark-section-fg/5 border border-dark-section-fg/10">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-dark-section-fg/60 block">Location</span>
                    <span className="text-dark-section-fg font-medium">Charlotte, North Carolina</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-dark-section-fg/5 border border-dark-section-fg/10">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                    <Building2 size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-dark-section-fg/60 block">Focus</span>
                    <span className="text-dark-section-fg font-medium">Carolinas Industrial Distribution</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right - Form Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 lg:p-16 xl:p-20 flex flex-col justify-center bg-background"
          >
            <form className="max-w-lg mx-auto w-full" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-8">
                {/* Name & Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-display font-semibold block mb-3">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b-2 border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50" 
                      placeholder="Full name" 
                    />
                  </div>
                  <div className="group">
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-display font-semibold block mb-3">Company</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b-2 border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50" 
                      placeholder="Company name" 
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div className="group">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-display font-semibold block mb-3">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b-2 border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50" 
                    placeholder="Email address" 
                  />
                </div>
                
                {/* Inquiry Type - Visual Selection */}
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-display font-semibold block mb-4">Inquiry Type</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {inquiryTypes.map((type) => (
                      <label key={type.value} className="group cursor-pointer">
                        <input type="radio" name="inquiry" value={type.value} className="sr-only peer" />
                        <div className="p-4 border border-border peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50 transition-all">
                          <span className="font-display text-sm font-bold text-foreground block mb-1">{type.label}</span>
                          <span className="text-xs text-muted-foreground">{type.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Message */}
                <div className="group">
                  <label className="text-xs uppercase tracking-wider text-muted-foreground font-display font-semibold block mb-3">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-transparent border-b-2 border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 resize-none" 
                    placeholder="Tell us about your requirements, timeline, and any specific considerations..."
                  />
                </div>
                
                {/* Submit */}
                <Button 
                  size="lg" 
                  type="submit" 
                  className="w-full font-display text-sm tracking-wider uppercase font-bold group"
                >
                  Submit Inquiry
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </form>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
