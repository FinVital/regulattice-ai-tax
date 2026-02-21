import { motion } from "framer-motion";
import { Brain, FileSearch, Activity, BarChart3, Globe, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Brain, title: "Advanced AI Engine", desc: "Regulation-agnostic AI processes complex legal text into actionable tasks with bank-grade security." },
  { icon: FileSearch, title: "Smart Document Verification", desc: "AI-powered ingestion reduces verification time by 50% with high accuracy for tax docs." },
  { icon: Activity, title: "Tax Compliance Monitoring", desc: "Stay ahead of regulations with automated monitoring, risk scoring, and real-time alerts." },
];

const metrics = [
  { value: "99%", label: "Accuracy Rate" },
  { value: "50%", label: "Time Reduction" },
  { value: "24/7", label: "Monitoring" },
  { value: "Multi", label: "Jurisdictions" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-background lattice-grid">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">About ReguLattice</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3 mb-6">
          Tax compliance should <span className="text-gradient">empower</span>—not hinder—SME growth
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Founded by Moazzam Waheed, our mission is to simplify tax complexity through AI automation, regulation-agnostic verification, and multi-jurisdiction support for Pakistan, GCC, SEA, USA.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {highlights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="gradient-card rounded-2xl p-8 shadow-card border border-border hover:shadow-elevated transition-shadow group"
          >
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
              <h.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-foreground mb-3">{h.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center bg-card rounded-xl p-5 shadow-card border border-border"
          >
            <div className="text-2xl font-heading font-bold text-gradient">{m.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
