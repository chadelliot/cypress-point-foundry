import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTAFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-24 lg:py-40" ref={ref} aria-label="Get in touch">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-4">
            Next Step
          </span>
          <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-medium tracking-[-0.03em] text-foreground mb-6 max-w-3xl mx-auto">
            Start a conversation
          </h2>
          <p className="text-sm lg:text-[15px] text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you're evaluating expansion, exploring build-to-suit, or seeking 
            advisory on distribution network strategy — we're ready to listen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button variant="premium-outline" size="lg" asChild>
              <Link to="/contact">Submit Market Requirement</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAFooter;
