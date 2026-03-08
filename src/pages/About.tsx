import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Award, Globe, Lightbulb, Rocket, Target, Users, Zap } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true as const }, transition: { duration: 0.5 } };

const team = [
  { name: "Dr. Amir Khan", role: "AI Automation Architect", bio: "15+ years in AI systems design. Former lead at a Fortune 500 AI division.", avatar: "AK" },
  { name: "Lisa Park", role: "AI Systems Engineer", bio: "Full-stack AI engineer specializing in workflow automation and integrations.", avatar: "LP" },
  { name: "James Cole", role: "AI Research Specialist", bio: "PhD in Machine Learning. Focuses on applied AI research for business.", avatar: "JC" },
  { name: "Priya Sharma", role: "AI Data Analyst", bio: "Data science expert turning complex datasets into actionable insights.", avatar: "PS" },
  { name: "David Okonkwo", role: "Automation Engineer", bio: "Expert in building scalable automation pipelines across platforms.", avatar: "DO" },
  { name: "Nina Volkov", role: "AI Product Strategist", bio: "Bridges AI technology and business strategy for maximum impact.", avatar: "NV" },
  { name: "Marco Silva", role: "AI Solutions Architect", bio: "Designs end-to-end AI solutions for enterprise-grade deployments.", avatar: "MS" },
  { name: "Emily Zhang", role: "AI UX Designer", bio: "Creates intuitive interfaces for AI-powered products and dashboards.", avatar: "EZ" },
];

const values = [
  { icon: Target, title: "Outcome-Driven", desc: "Every project is measured by real business impact, not vanity metrics." },
  { icon: Lightbulb, title: "Innovation First", desc: "We constantly explore and adopt the latest AI technologies." },
  { icon: Globe, title: "Global Perspective", desc: "Remote-first team serving clients across industries and geographies." },
  { icon: Award, title: "Excellence", desc: "We deliver enterprise-quality work, every time, for every client." },
];

const About = () => {
  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="container mx-auto relative">
          <SectionHeader badge="About Us" badgeIcon={Zap} title="AI Automation & Intelligence Lab" description="MD InTech is a modern AI solutions company helping businesses integrate artificial intelligence into operations, marketing, research, and automation." />
          <motion.div {...fadeUp} className="glass-card p-8 md:p-10 max-w-3xl mx-auto mt-8">
            <p className="text-muted-foreground leading-relaxed mb-4">
              We combine deep AI expertise with practical business acumen. Our team of engineers, researchers, and strategists work together to build intelligent systems that deliver measurable results.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From startups to enterprises, we've helped 40+ organizations transform their operations through AI automation. Our approach is simple: understand the problem, design the right solution, and deliver outcomes that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding gradient-bg">
        <div className="container mx-auto">
          <SectionHeader title="Our Values" description="What drives us every day." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeader badge="Our Team" badgeIcon={Users} title="Meet the Experts" description="A world-class team of AI specialists dedicated to transforming your business." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div key={m.name} {...fadeUp} transition={{ delay: i * 0.05 }} className="glass-card p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary border border-border flex items-center justify-center mx-auto mb-3 text-lg font-bold text-primary">{m.avatar}</div>
                <h4 className="font-display font-semibold text-foreground text-sm">{m.name}</h4>
                <p className="text-xs text-primary mt-0.5 mb-2">{m.role}</p>
                <p className="text-xs text-muted-foreground">{m.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="glass-card glow-border p-10 md:p-16 text-center gradient-bg">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Join Our Mission</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Ready to work with an AI-first team that delivers real results?</p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start a Conversation <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
