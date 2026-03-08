import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, TrendingUp } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true as const }, transition: { duration: 0.5 } };

const caseStudies = [
  {
    title: "E-Commerce Automation for UrbanStyle",
    industry: "E-Commerce",
    challenge: "Manual product listing, customer support overload, and inconsistent marketing campaigns across channels.",
    solution: "Deployed AI-powered product description generator, customer support chatbot, and automated email marketing system.",
    results: ["70% reduction in support tickets", "3x content output", "45% increase in email conversion", "$120K annual savings"],
  },
  {
    title: "AI Research Engine for BioVenture Labs",
    industry: "Healthcare",
    challenge: "Research teams spending 40+ hours weekly on literature reviews and data compilation.",
    solution: "Built an AI research assistant that automatically gathers, synthesizes, and summarizes scientific publications.",
    results: ["85% reduction in research time", "200+ papers analyzed daily", "30% faster time-to-insight", "Freed 3 FTE researchers"],
  },
  {
    title: "Sales Automation for CloudScale SaaS",
    industry: "Technology",
    challenge: "Sales team overwhelmed with lead qualification and follow-up, resulting in missed opportunities.",
    solution: "Created AI lead scoring system, automated outreach sequences, and an AI sales assistant for demo scheduling.",
    results: ["50% increase in qualified leads", "90% faster response time", "25% higher close rate", "$500K additional revenue"],
  },
  {
    title: "Operations Overhaul for Metro Property Group",
    industry: "Real Estate",
    challenge: "Fragmented data across systems, manual reporting, and slow tenant communication processes.",
    solution: "Integrated all systems with AI-powered automation hub, automated reporting, and tenant communication bot.",
    results: ["60% reduction in admin time", "Real-time portfolio analytics", "95% tenant satisfaction", "Scaled from 200 to 800 units"],
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="container mx-auto relative">
          <SectionHeader badge="Case Studies" badgeIcon={BarChart3} title="Real Results. Real Impact." description="See how we've helped businesses transform their operations with AI automation." />
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="container mx-auto space-y-10">
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.title} {...fadeUp} transition={{ delay: 0.1 }} className="glass-card p-8 md:p-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{cs.industry}</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">{cs.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-2">Challenge</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground text-sm mb-2 flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-primary" /> Results
                  </h4>
                  <ul className="space-y-1.5">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" /> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="glass-card glow-border p-10 md:p-16 text-center gradient-bg">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Want Results Like These?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's discuss how AI automation can deliver measurable impact for your business.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Your Project <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
