import { motion } from "framer-motion";
import { ArrowRight, Check, Shield, Star, Clock, BarChart3 } from "lucide-react";

const perks = ["30-Day Free Trial", "No Setup Fees", "24/7 Support", "FBR Certified"];
const bottomStats = [
  { value: "10,000+", label: "SMEs" },
  { value: "99%", label: "Accuracy" },
  { value: "50%", label: "Cost Reduction" },
  { value: "24/7", label: "Monitoring" },
];

const FooterCTA = () => (
  <footer>
    {/* CTA */}
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 lattice-grid opacity-20" />
      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary-foreground mb-4">
            Ready to Simplify Tax?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-lg mx-auto">
            Join ReguLattice. Streamline tax workflows for SMEs.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            {perks.map((p) => (
              <span key={p} className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/80">
                <Check size={14} className="text-lattice-green" /> {p}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#pricing" className="gradient-cta text-primary-foreground font-semibold px-8 py-3.5 rounded-xl flex items-center gap-2 shadow-glow hover:opacity-90 transition-opacity">
              Start Free Trial <ArrowRight size={18} />
            </a>
            <a
              href="mailto:moazzamwaheed@gmail.com?subject=Book a Demo - ReguLattice"
              className="border border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-primary-foreground/5 transition-colors"
            >
              Book a Demo
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {bottomStats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-heading font-bold text-primary-foreground">{s.value}</div>
                <div className="text-xs text-primary-foreground/60">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Footer bar */}
    <div className="bg-lattice-dark py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-heading text-sm text-primary-foreground/60">
          © 2025 ReguLattice. All rights reserved.
        </div>
        <div className="flex items-center gap-2 text-xs text-primary-foreground/40">
          <span>Limited Time: Free implementation for first 50 SMEs</span>
          <span>•</span>
          <a href="mailto:info@regulattice.com" className="hover:text-primary-foreground/70 transition-colors">info@regulattice.com</a>
        </div>
      </div>
    </div>
  </footer>
);

export default FooterCTA;
