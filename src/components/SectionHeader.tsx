import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeader = ({ badge, badgeIcon: Icon, title, description, center = true }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-6 ${center ? "" : ""}`}>
          {Icon && <Icon className="w-4 h-4" />}
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4 text-balance">{title}</h2>
      {description && (
        <p className={`text-muted-foreground max-w-2xl leading-relaxed ${center ? "mx-auto" : ""}`}>{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
