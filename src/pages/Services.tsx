import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Brain, Cpu, Layers, LineChart, MessageSquare, Zap } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true as const }, transition: { duration: 0.5 } };

const services = [
  {
    icon: Bot,
    title: "AI Automation Systems",
    desc: "End-to-end automation pipelines that replace repetitive manual work. We design intelligent workflows that connect your tools, process data, and execute actions automatically.",
    benefits: ["Reduce manual tasks by 80%", "24/7 automated operations", "Scalable without hiring", "Error-free execution"],
    useCases: ["Email automation", "Report generation", "Data pipeline management", "Inventory management"],
  },
  {
    icon: Brain,
    title: "AI Research & Intelligence",
    desc: "Leverage AI to gather, analyze, and synthesize information at scale. From market research to competitive analysis, our AI research systems deliver actionable insights.",
    benefits: ["10x faster research", "Real-time market insights", "Competitive intelligence", "Data-driven decisions"],
    useCases: ["Market analysis", "Competitor monitoring", "Trend identification", "Academic research"],
  },
  {
    icon: Layers,
    title: "AI Media Generation",
    desc: "Automated content creation for marketing, social media, and brand communications. Generate high-quality text, images, and video content at scale.",
    benefits: ["Consistent brand voice", "Scale content production", "Multi-format output", "Reduce creative costs"],
    useCases: ["Social media content", "Blog & article writing", "Ad copy generation", "Video scriptwriting"],
  },
  {
    icon: Cpu,
    title: "Business Process Automation",
    desc: "Transform complex business processes into streamlined automated workflows. From onboarding to invoicing, we automate the processes that slow your growth.",
    benefits: ["Faster processing", "Reduced operational costs", "Improved compliance", "Better employee experience"],
    useCases: ["Employee onboarding", "Invoice processing", "Customer follow-ups", "Quality assurance"],
  },
  {
    icon: MessageSquare,
    title: "AI Agent Development",
    desc: "Custom AI agents that handle customer interactions, sales inquiries, and internal operations. Intelligent conversational interfaces powered by advanced language models.",
    benefits: ["24/7 customer support", "Instant response times", "Personalized interactions", "Reduced support costs"],
    useCases: ["Customer service bots", "Sales assistants", "Internal help desks", "Lead qualification"],
  },
  {
    icon: LineChart,
    title: "AI Consulting & Strategy",
    desc: "Strategic guidance to identify high-impact AI opportunities in your business. We assess your operations, recommend solutions, and build implementation roadmaps.",
    benefits: ["Clear AI roadmap", "ROI-focused strategy", "Risk assessment", "Change management"],
    useCases: ["AI readiness assessment", "Technology selection", "Implementation planning", "Team training"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="container mx-auto relative">
          <SectionHeader
            badge="Our Services"
            badgeIcon={Zap}
            title="AI Solutions That Drive Real Results"
            description="We build intelligent automation systems tailored to your business needs. Every solution is designed for measurable impact."
          />
        </div>
      </section>

      <section className="pb-20 px-4 md:px-8">
        <div className="container mx-auto space-y-16">
          {services.map((s, i) => (
            <motion.div key={s.title} {...fadeUp} transition={{ delay: 0.1 }} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 glow-border">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
                <Button variant="hero-outline" asChild>
                  <Link to="/contact">Discuss This Service <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
              <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="glass-card p-5">
                  <h4 className="font-display font-semibold text-foreground text-sm mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-5">
                  <h4 className="font-display font-semibold text-foreground text-sm mb-3">Use Cases</h4>
                  <ul className="space-y-2">
                    {s.useCases.map((u) => (
                      <li key={u} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="glass-card glow-border p-10 md:p-16 text-center gradient-bg">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Need a Custom AI Solution?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Every business is unique. Let's discuss your specific challenges and design an AI system that fits.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Schedule a Call <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
