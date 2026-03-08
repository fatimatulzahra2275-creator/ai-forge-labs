import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const questions = [
  {
    id: "industry",
    question: "What industry is your business in?",
    options: ["E-Commerce", "Healthcare", "Finance", "Marketing", "Technology", "Education", "Real Estate", "Other"],
  },
  {
    id: "employees",
    question: "How many employees do you have?",
    options: ["1-10", "11-50", "51-200", "200+"],
  },
  {
    id: "tasks",
    question: "Which tasks consume the most time?",
    options: ["Customer Support", "Marketing & Content", "Data Research", "Admin & Operations", "Sales & Lead Gen", "Reporting"],
  },
  {
    id: "ai_usage",
    question: "Do you currently use AI tools?",
    options: ["Not yet", "Some basic tools", "Actively using AI", "Have an AI strategy"],
  },
];

const AuditTool = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isComplete = step >= questions.length;
  const isFinal = submitted;

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
    setTimeout(() => setStep((s) => s + 1), 300);
  };

  const getRecommendation = () => {
    const industry = answers.industry || "your industry";
    const tasks = answers.tasks || "key operations";
    return `Based on our analysis, your ${industry} business could automate ${tasks.toLowerCase()}, customer engagement, and data workflows using AI systems — potentially saving 20+ hours per week.`;
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="hero-glow absolute inset-0 pointer-events-none" />
      <div className="container mx-auto max-w-3xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /> Free AI Opportunity Audit
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Discover Your AI Automation Potential
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Answer 4 quick questions and get a personalized AI strategy recommendation for your business.
          </p>
        </motion.div>

        <div className="glass-card p-8 md:p-10 glow-border">
          {/* Progress */}
          <div className="flex items-center gap-2 mb-8">
            {questions.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
                  i < step ? "bg-primary" : i === step ? "bg-primary/50" : "bg-secondary"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!isComplete ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  {questions[step].question}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {questions[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(questions[step].id, opt)}
                      className={`p-4 rounded-lg border text-sm font-medium text-left transition-all ${
                        answers[questions[step].id] === opt
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50 text-foreground hover:bg-secondary"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : !isFinal ? (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">Your AI Opportunity Report</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{getRecommendation()}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email for the full report"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <Button variant="hero" onClick={() => setSubmitted(true)} className="shrink-0">
                    Get Full Report <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6"
              >
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground text-sm">
                  We'll send your personalized AI strategy report to {email || "your inbox"} shortly.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AuditTool;
