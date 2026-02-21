import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "ReguLattice reduced our FBR filing time from 6 months to 3 weeks. Saved $150K in fees.",
    name: "Sarah Chen",
    role: "CTO, FinFlow SME",
    initials: "SC",
  },
  {
    quote: "The AI dashboard transformed our tax visibility. No more manual chaos.",
    name: "Michael Rodriguez",
    role: "Head of Tax, PayStream SME",
    initials: "MR",
  },
  {
    quote: "Multi-jurisdiction support won us cross-border deals.",
    name: "Emily Watson",
    role: "CEO, SecureSME",
    initials: "EW",
  },
];

const logos = ["FinFlow SME", "PayStream", "SecureSME", "ComplianceSME", "TrustSME", "RegTech SME"];

const TestimonialsSection = () => (
  <section className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-4"
      >
        <span className="inline-flex items-center gap-2 bg-accent rounded-full px-4 py-1.5 text-xs font-semibold text-accent-foreground mb-6">
          Backed by NIC Hyderabad - Elite Program
        </span>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-7 shadow-card border border-border"
          >
            <Quote size={20} className="text-primary/30 mb-4" />
            <p className="text-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
        {logos.map((l) => (
          <span key={l} className="font-heading font-semibold text-muted-foreground text-sm">{l}</span>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
