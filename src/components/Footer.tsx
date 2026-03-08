import { Link } from "react-router-dom";
import { Zap, Mail, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center glow-border">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display font-bold text-lg text-foreground">MD InTech</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI Automation & Intelligence Lab. Transforming businesses through intelligent automation and AI-driven solutions.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Services</h4>
            <div className="flex flex-col gap-2">
              {["AI Automation", "AI Research", "AI Consulting", "AI Agents", "Process Automation"].map((s) => (
                <Link key={s} to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Company</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "About", path: "/about" },
                { label: "Case Studies", path: "/case-studies" },
                { label: "AI Lab", path: "/ai-lab" },
                { label: "Packages", path: "/packages" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <a href="mailto:hello@mdintech.ai" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> hello@mdintech.ai
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" /> Global · Remote First
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
            >
              Start a Project <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MD InTech — AI Automation & Intelligence Lab. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">Privacy</span>
            <span className="text-xs text-muted-foreground">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
