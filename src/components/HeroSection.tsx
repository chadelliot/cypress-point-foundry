import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-dark" aria-label="Hero">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroBg}
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, hsla(220,20%,8%,0.7), transparent 40%, hsla(220,20%,8%,0.85))' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 lg:px-10 text-center pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight leading-[0.95] text-white mb-8">
            Industrial Real Estate
            <br />
            <span className="text-primary">For Distributor-Grade</span>
            <br />
            Operators
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg lg:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Operator-informed industrial real estate focused on 15,000–50,000 SF 
          facilities across the Carolinas. Purpose-built for distribution operators.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" asChild className="font-display text-sm tracking-wider uppercase font-bold px-8 py-6">
            <Link to="/contact">Start a Conversation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="font-display text-sm tracking-wider uppercase font-bold px-8 py-6 border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent">
            <Link to="/portfolio">View Portfolio</Link>
          </Button>
        </motion.div>

        {/* Founder teaser */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 flex items-center justify-center gap-4"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <span className="font-display text-sm font-bold text-primary">MB</span>
          </div>
          <div className="text-left">
            <p className="text-white text-sm font-display font-medium">Munroe Best, Founder</p>
            <p className="text-white/50 text-xs">30+ years in industrial distribution</p>
          </div>
          <ArrowRight size={14} className="text-white/40 ml-2" />
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
