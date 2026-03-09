import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTAFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 lg:py-40 bg-primary texture-noise relative" ref={ref} aria-label="Get in touch">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase tracking-tight text-primary-foreground mb-6 max-w-4xl mx-auto">
            Start a Conversation
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you're evaluating expansion, exploring build-to-suit, or seeking 
            advisory on distribution network strategy — we're ready to listen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-display text-sm tracking-wider uppercase font-bold px-8 py-6">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent font-display text-sm tracking-wider uppercase font-bold px-8 py-6">
              <Link to="/contact">Submit Market Requirement</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFooter;
