import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Building2, Factory, HeartPulse, ShoppingCart, TrendingUp, Sparkles } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true as const }, transition: { duration: 0.5 } };

const solutions = [
  { icon: ShoppingCart, title: "E-Commerce AI", desc: "Automated product descriptions, dynamic pricing, customer segmentation, and personalized marketing campaigns.", industries: "Retail, DTC Brands, Marketplaces" },
  { icon: HeartPulse, title: "Healthcare AI", desc: "Patient data analysis, appointment automation, research synthesis, and compliance documentation.", industries: "Clinics, Health Tech, Pharma" },
  { icon: TrendingUp, title: "Finance AI", desc: "Automated reporting, risk analysis, fraud detection, and customer onboarding workflows.", industries: "Banks, Fintech, Insurance" },
  { icon: Building2, title: "Real Estate AI", desc: "Property analysis, lead qualification, automated listings, and market intelligence systems.", industries: "Agencies, PropTech, REITs" },
  { icon: Factory, title: "Manufacturing AI", desc: "Quality control automation, supply chain optimization, and predictive maintenance systems.", industries: "Manufacturing, Logistics, Supply Chain" },
  { icon: Brain, title: "Education AI", desc: "Content generation, student engagement, automated grading, and personalized learning paths.", industries: "EdTech, Universities, Training" },
];

const Solutions = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="container mx-auto relative">
          <SectionHeader badge="AI Solutions" badgeIcon={Sparkles} title="Industry-Specific AI Solutions" description="Tailored AI automation systems designed for the unique challenges of your industry." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {solutions.map((s, i) => (
              <motion.div key={s.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass-card p-6 hover:glow-border transition-all duration-300 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <div className="text-xs text-primary font-medium">{s.industries}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="glass-card glow-border p-10 md:p-16 text-center gradient-bg">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Don't See Your Industry?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">We build custom AI solutions for any industry. Let's discuss your specific needs.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Talk to an Expert <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
