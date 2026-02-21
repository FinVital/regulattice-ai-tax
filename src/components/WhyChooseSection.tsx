import { motion } from "framer-motion";
import { Brain, Radio, TrendingUp, FileOutput } from "lucide-react";

const reasons = [
  { icon: Brain, tag: "AI-Powered", title: "AI Tax Engine", desc: "Machine learning automates tax processes and provides insights." },
  { icon: Radio, tag: "Real-Time", title: "Real-Time Risk Detection", desc: "Continuous monitoring with alerts for tax gaps." },
  { icon: TrendingUp, tag: "SME-Focused", title: "Tailored for Growth", desc: "Accessible pricing for small businesses in frontier markets." },
  { icon: FileOutput, tag: "One-Click", title: "One-Click Audit Packs", desc: "Generate ready audit packs for regulators." },
];

const WhyChooseSection = () => (
  <section className="py-24 bg-muted/50 lattice-grid">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Why Choose ReguLattice?</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
          Industry-leading features for <span className="text-gradient">SME tax compliance</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 shadow-card border border-border text-center hover:shadow-elevated transition-shadow"
          >
            <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <r.icon size={22} className="text-primary-foreground" />
            </div>
            <span className="text-xs font-semibold text-primary uppercase">{r.tag}</span>
            <h3 className="font-heading font-semibold text-foreground mt-2 mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;
