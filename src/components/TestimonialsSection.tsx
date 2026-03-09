import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Cypress Point understood our branch layout requirements better than any traditional broker. They evaluated facilities like an operator, not a landlord.",
    author: "VP of Real Estate",
    company: "Regional Building Materials Distributor",
    industry: "Building Materials",
  },
  {
    quote: "Finding a 28,000 SF facility with proper yard depth and dock configuration in the Triad was nearly impossible until we worked with Cypress Point.",
    author: "Director of Operations",
    company: "HVAC Supply Distribution Network",
    industry: "HVAC Distribution",
  },
  {
    quote: "Munroe's operational background made all the difference. He could walk our site and immediately identify the inefficiencies we were dealing with.",
    author: "Division President",
    company: "PE-Backed Electrical Distributor",
    industry: "Electrical Supply",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 section-dark" ref={ref} aria-label="Testimonials">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <p className="font-display text-xs uppercase tracking-widest text-primary font-bold mb-4">
            Operator Insights
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-white mb-6">
            What Distributors Say
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            Feedback from distribution operators who've worked with Cypress Point.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
              className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 hover:border-primary/30 transition-all relative group"
            >
              <Quote size={32} className="text-primary/30 absolute top-6 right-6" />
              
              <span className="inline-block text-[10px] tracking-wider uppercase font-display font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-6">
                {t.industry}
              </span>
              
              <p className="text-white/80 text-base leading-relaxed mb-8 italic">
                "{t.quote}"
              </p>
              
              <div className="border-t border-white/10 pt-6">
                <p className="font-display text-sm font-bold text-white mb-1">
                  {t.author}
                </p>
                <p className="text-white/50 text-xs">
                  {t.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
