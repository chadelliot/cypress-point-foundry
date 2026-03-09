import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Compass, BarChart3 } from "lucide-react";

const offerings = [
  {
    icon: Building,
    title: "Industrial Platform",
    description: "Acquire and operate 15,000–50,000 SF distributor-grade industrial facilities. Single-tenant, operationally functional buildings in established Carolinas corridors.",
    link: "/industrial-platform",
    tags: ["Acquisition", "Operations", "Carolinas"],
  },
  {
    icon: Compass,
    title: "Expansion / Build-to-Suit",
    description: "Selective site identification and build-to-suit coordination for distribution operators requiring purpose-built facilities. Strategic, not speculative.",
    link: "/build-to-suit",
    tags: ["Site Selection", "BTS", "Greenfield"],
  },
  {
    icon: BarChart3,
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
    <section className="py-20 lg:py-32 bg-background" ref={ref} aria-label="Offerings">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-tight text-foreground mb-6">
            Intelligent Solutions for
            <br />
            <span className="text-primary">Modern Distributors</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            One of the ways we stand out—we don't just find space, we understand how distributors actually use it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {offerings.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-xl hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <o.icon size={26} className="text-primary" />
              </div>

              <h3 className="font-display text-xl lg:text-2xl font-bold uppercase tracking-tight text-foreground mb-4">
                {o.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {o.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {o.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] tracking-wider uppercase font-display font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={o.link}
                className="inline-flex items-center gap-2 text-sm font-display font-bold uppercase tracking-wider text-primary hover:text-green-accent-light transition-colors group/link"
              >
                Learn more
                <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
