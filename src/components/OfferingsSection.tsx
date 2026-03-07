import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const offerings = [
  {
    number: "01",
    title: "Industrial Platform",
    description: "Acquire and operate 15,000–50,000 SF distributor-grade industrial facilities. Single-tenant, operationally functional buildings in established Carolinas corridors.",
    link: "/industrial-platform",
    tags: ["Acquisition", "Operations", "Carolinas"],
  },
  {
    number: "02",
    title: "Expansion / Build-to-Suit",
    description: "Selective site identification and build-to-suit coordination for distribution operators requiring purpose-built facilities. Strategic, not speculative.",
    link: "/build-to-suit",
    tags: ["Site Selection", "BTS", "Greenfield"],
  },
  {
    number: "03",
    title: "Strategic Advisory",
    description: "Advisory for distributors on growth strategy, branch segmentation, network optimization, and footprint planning. Built on 30+ years of operating experience.",
    link: "/advisory",
    tags: ["Network Strategy", "Growth", "Optimization"],
  },
];

const OfferingsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32" ref={ref} aria-label="Offerings">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-display block mb-3">
            Services
          </span>
          <h2 className="font-display text-3xl lg:text-4xl xl:text-5xl font-medium tracking-[-0.02em] text-foreground">
            Three core offerings
          </h2>
        </motion.div>

        <div className="ruled-line mb-0" />

        <div className="grid grid-cols-1 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <motion.div
              key={o.number}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className={`py-8 lg:py-12 ${i < 2 ? "lg:border-r border-border" : ""} ${i > 0 ? "lg:pl-8 xl:pl-12" : ""} ${i < 2 ? "lg:pr-8 xl:pr-12" : ""} ${i > 0 ? "ruled-line lg:border-t-0" : ""}`}
            >
              <span className="font-display text-[10px] tracking-[0.2em] text-text-dim block mb-4">
                {o.number}
              </span>
              <h3 className="font-display text-xl lg:text-2xl font-medium text-foreground mb-4">
                {o.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {o.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {o.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-[0.1em] uppercase font-display text-text-dim border border-border px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to={o.link}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-display text-foreground hover:text-deep-green-light transition-colors group"
              >
                Learn more
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="ruled-line" />
      </div>
    </section>
  );
};

export default OfferingsSection;
