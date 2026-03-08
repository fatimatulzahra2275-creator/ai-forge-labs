import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Beaker, BookOpen, FlaskConical, Lightbulb } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true as const }, transition: { duration: 0.5 } };

const experiments = [
  {
    tag: "Experiment",
    title: "Autonomous AI Research Agent",
    desc: "We built an AI agent that autonomously researches any topic, compiles findings, and generates executive summaries — reducing research time from hours to minutes.",
    date: "March 2026",
  },
  {
    tag: "Workflow",
    title: "Multi-Channel Content Pipeline",
    desc: "An automated pipeline that takes a single blog post and generates social media content, email newsletters, and video scripts across 5 platforms simultaneously.",
    date: "February 2026",
  },
  {
    tag: "Case Study",
    title: "AI-Powered Lead Scoring System",
    desc: "Machine learning model trained on historical sales data to predict lead conversion probability, integrated directly into CRM with automated follow-up triggers.",
    date: "January 2026",
  },
  {
    tag: "Research",
    title: "LLM Fine-Tuning for Industry Jargon",
    desc: "Custom fine-tuning methodology for adapting large language models to understand industry-specific terminology and produce domain-expert-level outputs.",
    date: "December 2025",
  },
  {
    tag: "Experiment",
    title: "Voice-to-Action AI Assistant",
    desc: "Prototype AI assistant that converts voice commands into automated business actions — from scheduling meetings to generating reports and sending updates.",
    date: "November 2025",
  },
  {
    tag: "Workflow",
    title: "Intelligent Document Processing",
    desc: "OCR + AI pipeline that extracts structured data from unstructured documents (invoices, contracts, reports) with 98% accuracy.",
    date: "October 2025",
  },
];

const tagColors: Record<string, string> = {
  Experiment: "bg-primary/10 text-primary",
  Workflow: "bg-accent/10 text-accent",
  "Case Study": "bg-primary/10 text-primary",
  Research: "bg-accent/10 text-accent",
};

const AILab = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="container mx-auto relative">
          <SectionHeader
            badge="AI Lab"
            badgeIcon={FlaskConical}
            title="AI Innovation Lab"
            description="Where we experiment, research, and push the boundaries of AI automation. Explore our latest projects and insights."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {experiments.map((e, i) => (
              <motion.div key={e.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass-card p-6 hover:glow-border transition-all duration-300 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${tagColors[e.tag]}`}>{e.tag}</span>
                  <span className="text-xs text-muted-foreground">{e.date}</span>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{e.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="glass-card glow-border p-10 md:p-16 text-center gradient-bg">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Collaborate with Our Lab</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Have an AI challenge? We love solving hard problems. Let's explore it together.</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Submit a Challenge <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AILab;
