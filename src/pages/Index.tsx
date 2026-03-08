import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import AuditTool from "@/components/AuditTool";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Brain,
  Cpu,
  Layers,
  LineChart,
  MessageSquare,
  Rocket,
  Shield,
  Sparkles,
  Star,
  Users,
  Zap,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const services = [
  { icon: Bot, title: "AI Automation Systems", desc: "End-to-end automation pipelines that eliminate manual work and scale your operations." },
  { icon: Brain, title: "AI Research & Intelligence", desc: "Data-driven insights and market intelligence powered by advanced AI analysis." },
  { icon: Layers, title: "AI Media Generation", desc: "Automated content creation for marketing, social media, and brand communications." },
  { icon: Cpu, title: "Process Automation", desc: "Streamline business workflows with intelligent process automation solutions." },
  { icon: MessageSquare, title: "AI Agent Development", desc: "Custom AI agents that handle customer support, sales, and internal operations." },
  { icon: LineChart, title: "AI Consulting & Strategy", desc: "Strategic guidance to identify and implement high-impact AI opportunities." },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "40+", label: "Enterprise Clients" },
  { value: "95%", label: "Client Retention" },
  { value: "10x", label: "Average ROI" },
];

const testimonials = [
  { name: "Sarah Chen", role: "CEO, TechScale", text: "MD InTech transformed our entire operations. We automated 80% of our manual processes in just 3 months.", avatar: "SC" },
  { name: "Marcus Rivera", role: "VP Operations, GrowthLab", text: "The AI automation systems they built saved us 200+ hours per month. Absolute game-changer.", avatar: "MR" },
  { name: "Emma Watson", role: "CTO, DataFlow Inc", text: "Their AI consulting helped us identify $2M in automation opportunities we didn't know existed.", avatar: "EW" },
];

const team = [
  { name: "Dr. Amir Khan", role: "AI Automation Architect", avatar: "AK" },
  { name: "Lisa Park", role: "AI Systems Engineer", avatar: "LP" },
  { name: "James Cole", role: "AI Research Specialist", avatar: "JC" },
  { name: "Priya Sharma", role: "AI Data Analyst", avatar: "PS" },
  { name: "David Okonkwo", role: "Automation Engineer", avatar: "DO" },
  { name: "Nina Volkov", role: "AI Product Strategist", avatar: "NV" },
];

const techStack = [
  { name: "ChatGPT", desc: "Advanced Language Models" },
  { name: "Perplexity AI", desc: "AI Research Engine" },
  { name: "Make", desc: "Visual Automation" },
  { name: "n8n", desc: "Workflow Automation" },
  { name: "LangChain", desc: "AI Orchestration" },
  { name: "TensorFlow", desc: "Machine Learning" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center section-padding overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, hsl(175 80% 50%) 1px, transparent 0)",backgroundSize:"40px 40px"}} />
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" /> AI Automation & Intelligence Lab
              </div>
            </motion.div>
            <motion.h1 {...fadeUp} transition={{delay:0.1,duration:0.5}} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 text-balance">
              Build Intelligent Systems.{" "}
              <span className="gradient-text">Automate Everything.</span>
            </motion.h1>
            <motion.p {...fadeUp} transition={{delay:0.2,duration:0.5}} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              We design and deploy AI automation systems that transform how businesses operate — from research to marketing to customer engagement.
            </motion.p>
            <motion.div {...fadeUp} transition={{delay:0.3,duration:0.5}} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Start Your AI Transformation <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/case-studies">View Case Studies</Link>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div {...fadeUp} transition={{delay:0.4}} className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader badge="Our Services" badgeIcon={Zap} title="AI-Powered Solutions for Every Business" description="From automation to intelligence, we build systems that drive growth and efficiency." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} {...fadeUp} transition={{delay:i*0.1}} className="glass-card p-6 group hover:glow-border transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="hero-outline" asChild>
              <Link to="/services">Explore All Services <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Audit Tool */}
      <AuditTool />

      {/* Benefits */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto">
          <SectionHeader badge="Why AI Automation" badgeIcon={Rocket} title="Transform Your Business Operations" description="AI automation delivers measurable results across every department." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "10x Faster Operations", desc: "Automate repetitive tasks and focus on strategic growth." },
              { icon: Shield, title: "Reduce Human Error", desc: "AI systems execute consistently and accurately at scale." },
              { icon: LineChart, title: "Data-Driven Decisions", desc: "Leverage AI analytics for smarter business intelligence." },
              { icon: Users, title: "Scale Without Hiring", desc: "Handle growing workloads without proportional team growth." },
              { icon: Rocket, title: "First-Mover Advantage", desc: "Stay ahead of competitors with cutting-edge AI adoption." },
              { icon: Star, title: "Better Customer Experience", desc: "AI agents provide instant, personalized customer interactions." },
            ].map((b, i) => (
              <motion.div key={b.title} {...fadeUp} transition={{delay:i*0.08}} className="flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <b.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader badge="Technology" badgeIcon={Cpu} title="Powered by Leading AI Technologies" description="We leverage the most advanced AI platforms to build intelligent systems." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((t, i) => (
              <motion.div key={t.name} {...fadeUp} transition={{delay:i*0.05}} className="glass-card p-5 text-center hover:glow-border transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-display font-semibold text-sm text-foreground">{t.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto">
          <SectionHeader badge="Testimonials" badgeIcon={Star} title="Trusted by Growing Companies" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fadeUp} transition={{delay:i*0.1}} className="glass-card p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">{t.avatar}</div>
                  <div>
                    <div className="text-sm font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader badge="Our Team" badgeIcon={Users} title="Meet the AI Experts" description="A multidisciplinary team of AI specialists, engineers, and strategists." />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} {...fadeUp} transition={{delay:i*0.05}} className="text-center">
                <div className="w-20 h-20 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto mb-3 text-xl font-bold text-primary">{m.avatar}</div>
                <h4 className="font-display font-semibold text-sm text-foreground">{m.name}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{m.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="glass-card glow-border p-10 md:p-16 text-center gradient-bg">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Ready to Automate Your Business?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Schedule a free consultation and discover how AI can transform your operations, reduce costs, and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Book Free Consultation <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <Link to="/packages">View Packages</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
