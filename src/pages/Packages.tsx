import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Crown, Rocket, Star, Zap } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true as const }, transition: { duration: 0.5 } };

const packages = [
  {
    icon: Zap,
    name: "Starter AI Launch",
    price: "Starting at $2,500",
    target: "Small businesses & solopreneurs",
    desc: "Get started with AI automation. Perfect for businesses taking their first step into intelligent systems.",
    features: ["1 core automation workflow", "AI tool setup & integration", "Basic chatbot or AI assistant", "2 weeks of support", "Documentation & training"],
    results: "Expected: 10-15 hours saved/week",
    popular: false,
  },
  {
    icon: Rocket,
    name: "Growth Automation",
    price: "Starting at $7,500",
    target: "Growing startups & SMBs",
    desc: "Scale your operations with comprehensive AI automation across multiple departments.",
    features: ["3-5 automation workflows", "Multi-platform integration", "Custom AI agents", "Analytics dashboard", "30 days of support", "Monthly optimization call"],
    results: "Expected: 30-40 hours saved/week",
    popular: true,
  },
  {
    icon: Star,
    name: "Business Scale",
    price: "Starting at $15,000",
    target: "Established businesses",
    desc: "Enterprise-grade AI automation that transforms your entire operation. Full-stack AI implementation.",
    features: ["10+ automation workflows", "Full systems integration", "Advanced AI agents & bots", "Custom dashboards & reporting", "60 days of support", "Dedicated account manager"],
    results: "Expected: 100+ hours saved/week",
    popular: false,
  },
  {
    icon: Crown,
    name: "Enterprise AI Transformation",
    price: "Custom Pricing",
    target: "Enterprise organizations",
    desc: "Complete AI transformation program. We embed as your AI team and redesign your operations from the ground up.",
    features: ["Unlimited automation workflows", "Enterprise-wide integration", "Custom AI model development", "24/7 priority support", "Quarterly strategy reviews", "On-site workshops", "Dedicated AI engineering team"],
    results: "Expected: Full operational transformation",
    popular: false,
  },
];

const Packages = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="container mx-auto relative">
          <SectionHeader badge="Packages" badgeIcon={Star} title="AI Automation Packages" description="Choose the right AI package for your business stage. All packages include strategy consultation and implementation." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {packages.map((p, i) => (
              <motion.div
                key={p.name}
                {...fadeUp}
                transition={{ delay: i * 0.1 }}
                className={`glass-card p-6 flex flex-col relative ${p.popular ? "glow-border ring-1 ring-primary/50" : ""}`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-1">{p.name}</h3>
                <div className="text-primary font-display font-bold text-xl mb-1">{p.price}</div>
                <div className="text-xs text-muted-foreground mb-3">{p.target}</div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <ul className="space-y-2 mb-5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-primary font-medium mb-4">{p.results}</div>
                <Button variant={p.popular ? "hero" : "hero-outline"} asChild className="w-full">
                  <Link to="/contact">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Packages;
