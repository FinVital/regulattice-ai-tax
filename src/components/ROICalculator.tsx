import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingDown } from "lucide-react";

const sizeOptions = ["1-50 employees", "50-200 employees", "200-500 employees", "500+ employees"];
const jurisdictionOptions = ["Pakistan (FBR)", "GCC (FTA/ZATCA)", "USA (IRS)", "SEA Tax"];

const savingsData: Record<string, { traditional: number; rl: number; weeks: number; rlWeeks: number }> = {
  "1-50 employees": { traditional: 60000, rl: 7200, weeks: 20, rlWeeks: 3 },
  "50-200 employees": { traditional: 120000, rl: 14400, weeks: 24, rlWeeks: 3 },
  "200-500 employees": { traditional: 200000, rl: 24000, weeks: 30, rlWeeks: 4 },
  "500+ employees": { traditional: 350000, rl: 42000, weeks: 36, rlWeeks: 4 },
};

const ROICalculator = () => {
  const [size, setSize] = useState(sizeOptions[1]);
  const [selectedJurisdictions, setSelectedJurisdictions] = useState<string[]>(["Pakistan (FBR)"]);

  const data = savingsData[size];
  const multiplier = Math.max(1, selectedJurisdictions.length * 0.8);
  const traditional = Math.round(data.traditional * multiplier);
  const rl = Math.round(data.rl * multiplier);
  const saved = traditional - rl;
  const pct = Math.round((saved / traditional) * 100);

  const toggleJurisdiction = (j: string) => {
    setSelectedJurisdictions((prev) =>
      prev.includes(j) ? (prev.length > 1 ? prev.filter((x) => x !== j) : prev) : [...prev, j]
    );
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">AI-Powered Calculator</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
            Calculate Your <span className="text-gradient">ROI</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            See how much time and money you can save with ReguLattice's automated tax platform.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-card rounded-2xl shadow-elevated border border-border p-8"
        >
          <div className="mb-6">
            <label className="text-sm font-medium text-foreground block mb-3">Company Size</label>
            <div className="flex flex-wrap gap-2">
              {sizeOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`text-sm px-4 py-2 rounded-lg border transition-all ${
                    s === size
                      ? "gradient-primary text-primary-foreground border-transparent"
                      : "bg-muted text-muted-foreground border-border hover:border-primary/30"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label className="text-sm font-medium text-foreground block mb-3">Select Jurisdictions</label>
            <div className="flex flex-wrap gap-2">
              {jurisdictionOptions.map((j) => (
                <button
                  key={j}
                  onClick={() => toggleJurisdiction(j)}
                  className={`text-sm px-4 py-2 rounded-lg border transition-all ${
                    selectedJurisdictions.includes(j)
                      ? "gradient-cta text-primary-foreground border-transparent"
                      : "bg-muted text-muted-foreground border-border hover:border-primary/30"
                  }`}
                >
                  {j}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-muted rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Calculator size={18} className="text-primary" />
                <span className="font-heading font-semibold text-foreground">Cost Savings</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Traditional:</span><span className="text-foreground">${traditional.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">With ReguLattice:</span><span className="text-secondary font-semibold">${rl.toLocaleString()}</span></div>
                <div className="border-t border-border pt-2 flex justify-between font-semibold"><span className="text-foreground">You Save:</span><span className="text-gradient">${saved.toLocaleString()}</span></div>
              </div>
            </div>

            <div className="bg-muted rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown size={18} className="text-secondary" />
                <span className="font-heading font-semibold text-foreground">Time Savings</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Traditional:</span><span className="text-foreground">{Math.round(data.weeks * multiplier)} weeks</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">With ReguLattice:</span><span className="text-secondary font-semibold">{data.rlWeeks} weeks</span></div>
                <div className="border-t border-border pt-2 flex justify-between font-semibold"><span className="text-foreground">You Save:</span><span className="text-gradient">{Math.round(data.weeks * multiplier) - data.rlWeeks} weeks</span></div>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-lg font-heading font-bold text-gradient mb-4">That's a {pct}% cost reduction!</p>
            <a href="#pricing" className="gradient-cta text-primary-foreground font-semibold px-8 py-3 rounded-xl inline-block hover:opacity-90 transition-opacity">
              Get Started Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICalculator;
