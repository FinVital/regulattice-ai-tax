import { motion } from "framer-motion";
import { Upload, FileCheck, AlertTriangle, Calculator, Globe, Sparkles } from "lucide-react";

const features = [
  { icon: Upload, title: "Document Ingestion & Automation", desc: "Streamline tax doc upload with automated ingestion, verification, and compliance checks." },
  { icon: FileCheck, title: "Evidence & Audit Mapping with AI", desc: "AI-powered mapping of evidence and audit packs for tax documentation." },
  { icon: AlertTriangle, title: "Risk Scoring & Penalties", desc: "Automated risk assessment and penalty calculations to ensure compliance." },
  { icon: Calculator, title: "Savings Calculator", desc: "AI insights to identify tax savings and optimize filings." },
  { icon: Globe, title: "Multi-Jurisdiction Support", desc: "Seamless handling for FBR, FTA/ZATCA, IRS, SEA tax authorities." },
  { icon: Sparkles, title: "AI-Powered Insights", desc: "Analytics to predict risks and optimize tax processes." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Key Features</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
          Powerful capabilities for <span className="text-gradient">SME tax compliance</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="group relative gradient-card rounded-2xl p-7 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-11 h-11 gradient-primary rounded-xl flex items-center justify-center mb-5 group-hover:shadow-glow transition-shadow">
              <f.icon size={20} className="text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
