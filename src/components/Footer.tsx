import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="ruled-line py-12 lg:py-16" aria-label="Footer">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="font-display text-lg tracking-[0.2em] uppercase text-foreground">
              Cypress Point
            </Link>
            <p className="text-sm text-muted-foreground mt-4 max-w-sm leading-relaxed">
              Operator-informed industrial real estate for distributor-grade tenants 
              across the Carolinas.
            </p>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim font-display block mb-4">
              Platform
            </span>
            <nav className="flex flex-col gap-2.5">
              <Link to="/industrial-platform" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Industrial Platform</Link>
              <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
              <Link to="/build-to-suit" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Build-to-Suit</Link>
              <Link to="/advisory" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Advisory</Link>
            </nav>
          </div>

          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim font-display block mb-4">
              Company
            </span>
            <nav className="flex flex-col gap-2.5">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>
          </div>
        </div>

        <div className="ruled-line pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[11px] text-text-dim font-display tracking-wider">
            © {new Date().getFullYear()} Cypress Point. All rights reserved.
          </span>
          <span className="text-[11px] text-text-dim">
            Carolinas Industrial Real Estate
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
