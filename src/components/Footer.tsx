import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 lg:py-16" aria-label="Footer">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-xl font-bold tracking-tight">
              <span className="text-background">CYPRESS</span>
              <span className="text-primary"> POINT</span>
            </Link>
            <p className="text-background/60 text-sm mt-4 max-w-sm leading-relaxed">
              Operator-informed industrial real estate for distributor-grade tenants 
              across the Carolinas.
            </p>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-display font-bold block mb-4">
              Platform
            </span>
            <nav className="flex flex-col gap-2.5">
              <Link to="/industrial-platform" className="text-sm text-background/60 hover:text-background transition-colors">Industrial Platform</Link>
              <Link to="/portfolio" className="text-sm text-background/60 hover:text-background transition-colors">Portfolio</Link>
              <Link to="/build-to-suit" className="text-sm text-background/60 hover:text-background transition-colors">Build-to-Suit</Link>
              <Link to="/advisory" className="text-sm text-background/60 hover:text-background transition-colors">Advisory</Link>
            </nav>
          </div>

          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-display font-bold block mb-4">
              Company
            </span>
            <nav className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-background/60 hover:text-background transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-background/60 hover:text-background transition-colors">Contact</Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-background/40 font-display tracking-wider">
            © {new Date().getFullYear()} Cypress Point. All rights reserved.
          </span>
          <span className="text-xs text-background/40">
            Carolinas Industrial Real Estate
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
