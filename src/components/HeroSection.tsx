import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import demoVideo from "@/assets/regulattice-demo.mp4";

const stats = [
  { value: "3-4 weeks", label: "to tax ready" },
  { value: "50%", label: "faster than manual" },
  { value: "$105K+", label: "average savings" },
];

const badges = ["FBR Compliant", "FTA/ZATCA", "IRS Ready"];

const HeroSection = () => (
  <section className="relative min-h-screen gradient-hero overflow-hidden pt-16">
    {/* Lattice grid overlay */}
    <div className="absolute inset-0 lattice-grid opacity-30" />
    {/* Glow effects */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lattice-glow/10 rounded-full blur-3xl" />
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lattice-green/10 rounded-full blur-3xl" />

    <div className="relative container mx-auto px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
          <Shield size={14} className="text-lattice-glow" />
          <span className="text-xs font-medium text-lattice-glow">Trusted by 10,000+ SMEs worldwide</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight mb-6">
          AI-First Tax Compliance.{" "}
          <span className="text-gradient">Simplified.</span>
        </h1>

        <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          ReguLattice automates tax compliance for SMEs with AI-driven ingestion, scoring, tasks, penalties, savings, and audit packs. Get compliant 50% faster.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#pricing" className="gradient-cta text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2 shadow-glow">
            Get Started Free <ArrowRight size={18} />
          </a>
          <a
            href="mailto:moazzamwaheed@gmail.com?subject=Book a Demo - ReguLattice"
            className="border border-primary-foreground/20 text-primary-foreground font-semibold px-8 py-3.5 rounded-xl hover:bg-primary-foreground/5 transition-colors"
          >
            Book a Demo
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {badges.map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5 bg-primary-foreground/5 border border-primary-foreground/10 rounded-full px-4 py-1.5 text-xs font-medium text-primary-foreground/80">
              <CheckCircle size={12} className="text-lattice-green" /> {b}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl"
      >
        {stats.map((s, i) => (
          <div key={i} className="text-center bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-5">
            <div className="text-2xl sm:text-3xl font-heading font-bold text-primary-foreground">{s.value}</div>
            <div className="text-sm text-primary-foreground/60 mt-1">{s.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16"
      >
        <video
          src={demoVideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-w-4xl rounded-2xl shadow-elevated border border-primary-foreground/10"
        />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
