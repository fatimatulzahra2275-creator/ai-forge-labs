import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { toast } from "sonner";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true as const }, transition: { duration: 0.5 } };

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <Layout>
      <section className="section-padding relative overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="container mx-auto relative">
          <SectionHeader badge="Contact" badgeIcon={MessageSquare} title="Let's Build Something Intelligent" description="Ready to transform your business with AI? Reach out and let's discuss your project." />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mt-4">
            {/* Form */}
            <motion.div {...fadeUp} className="lg:col-span-3 glass-card p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">How can we help?</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                    placeholder="Tell us about your project, challenges, or questions..."
                  />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  Send Message <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div {...fadeUp} transition={{ delay: 0.2 }} className="lg:col-span-2 space-y-6">
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-foreground mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <a href="mailto:hello@mdintech.ai" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 text-primary" /> hello@mdintech.ai
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" /> Global · Remote First
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Phone className="w-5 h-5 text-primary" /> Schedule a call
                  </div>
                </div>
              </div>
              <div className="glass-card p-6">
                <h3 className="font-display font-semibold text-foreground mb-3">What happens next?</h3>
                <div className="space-y-3">
                  {[
                    "We respond within 24 hours",
                    "Free discovery call to understand your needs",
                    "Custom proposal with timeline & pricing",
                    "Project kickoff within 1 week",
                  ].map((s, i) => (
                    <div key={s} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-xs font-bold text-primary">{i + 1}</div>
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
