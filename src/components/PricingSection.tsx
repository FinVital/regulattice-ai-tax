import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";

const plans = [
  {
    name: "Free Forever",
    desc: "Perfect for individual SMEs starting out",
    price: "$0",
    period: "/month",
    features: ["Limited features", "Single user", "Basic tax ingestion"],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Starter",
    desc: "Core features for small SMEs",
    price: "$4",
    period: "/month",
    features: ["Core compliance", "Basic reports", "Up to 5 users", "Email support"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Pro",
    desc: "Full suite for growing SMEs",
    price: "$11",
    period: "/month",
    features: ["Full AI suite", "Audit-ready packs", "Risk scoring", "Priority support", "Multi-user"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Enterprise",
    desc: "Custom for large operations",
    price: "$36+",
    period: "/month",
    features: ["API access", "Custom integrations", "Dedicated support", "Unlimited users"],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 bg-muted/50 lattice-grid">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Transparent Pricing</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
          Choose Your <span className="text-gradient">Plan</span>
        </h2>
        <p className="text-muted-foreground mt-3">Scale your tax operations with transparent pricing.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {plans.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl p-7 border transition-shadow ${
              p.popular
                ? "bg-card shadow-elevated border-primary"
                : "bg-card shadow-card border-border hover:shadow-elevated"
            }`}
          >
            {p.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full flex items-center gap-1">
                <Star size={12} /> Most Popular
              </div>
            )}
            <h3 className="font-heading font-bold text-foreground text-lg">{p.name}</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-4">{p.desc}</p>
            <div className="mb-6">
              <span className="text-3xl font-heading font-bold text-foreground">{p.price}</span>
              <span className="text-sm text-muted-foreground">{p.period}</span>
            </div>
            <ul className="space-y-2.5 mb-8">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check size={16} className="text-secondary shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={p.cta === "Contact Sales" ? "mailto:moazzamwaheed@gmail.com?subject=Enterprise Inquiry" : "#"}
              className={`block text-center text-sm font-semibold py-2.5 rounded-xl transition-all ${
                p.popular
                  ? "gradient-primary text-primary-foreground hover:opacity-90"
                  : "bg-muted text-foreground hover:bg-accent"
              }`}
            >
              {p.cta}
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 max-w-2xl mx-auto grid sm:grid-cols-2 gap-6"
      >
        <div className="bg-card rounded-xl p-6 shadow-card border border-border">
          <h4 className="font-heading font-semibold text-foreground mb-2">Specialized Modules</h4>
          <ul className="space-y-1.5 text-sm text-muted-foreground">
            <li>• AML Risk Module</li>
            <li>• ESR Mapping</li>
            <li>• Custom Tax Frameworks</li>
          </ul>
        </div>
        <div className="bg-card rounded-xl p-6 shadow-card border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Zap size={16} className="text-secondary" />
            <h4 className="font-heading font-semibold text-foreground">Early Adopter Program</h4>
          </div>
          <p className="text-2xl font-heading font-bold text-gradient mb-1">15% OFF</p>
          <p className="text-sm text-muted-foreground">Discount for pilot SMEs. Limited time.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingSection;
