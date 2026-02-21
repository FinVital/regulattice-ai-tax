import { motion } from "framer-motion";
import { FileText, CheckCircle, Shield, Clock } from "lucide-react";

const jurisdictions = [
  { name: "FBR Tax", score: 94, days: "8 days left", color: "bg-lattice-teal" },
  { name: "FTA/ZATCA", score: 87, days: "15 days left", color: "bg-lattice-green" },
  { name: "IRS", score: 100, days: "Complete", color: "bg-secondary" },
  { name: "SEA Tax", score: 72, days: "22 days left", color: "bg-primary" },
];

const activities = [
  { icon: FileText, text: "Docs uploaded", tag: "FBR", time: "2 mins ago" },
  { icon: CheckCircle, text: "Tasks mapped", tag: "FTA", time: "15 mins ago" },
  { icon: Shield, text: "Audit ready", tag: "IRS", time: "1 hour ago" },
];

const DashboardSection = () => (
  <section className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Live Dashboard</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
          Real-Time Tax <span className="text-gradient">Dashboard</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
          Instant visibility into your tax posture with live tracking and automated updates.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-card rounded-2xl shadow-elevated border border-border overflow-hidden"
      >
        {/* Header */}
        <div className="gradient-hero px-6 py-4 flex items-center justify-between">
          <span className="text-primary-foreground font-heading font-semibold">Compliance Overview</span>
          <div className="flex gap-2">
            {["FBR Ready", "FTA/ZATCA", "IRS Compliant", "SEA Tax"].map((b) => (
              <span key={b} className="text-xs bg-primary-foreground/10 text-primary-foreground/80 px-2.5 py-1 rounded-full">{b}</span>
            ))}
          </div>
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          {/* Score */}
          <div>
            <div className="bg-muted rounded-xl p-6 mb-4">
              <div className="text-sm text-muted-foreground mb-2">Overall Compliance Score</div>
              <div className="flex items-end gap-2">
                <span className="text-5xl font-heading font-bold text-gradient">82%</span>
                <span className="text-sm text-secondary font-medium mb-1">+10% this month</span>
              </div>
            </div>

            <div className="space-y-3">
              {jurisdictions.map((j) => (
                <div key={j.name} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-foreground w-24">{j.name}</span>
                  <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                    <div className={`h-full rounded-full ${j.color}`} style={{ width: `${j.score}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground w-20 text-right">{j.score}% · {j.days}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Activity */}
          <div>
            <div className="text-sm font-medium text-foreground mb-4">Recent Activity</div>
            <div className="space-y-3">
              {activities.map((a, i) => (
                <div key={i} className="flex items-center gap-3 bg-muted rounded-lg p-3">
                  <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center shrink-0">
                    <a.icon size={14} className="text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm font-medium text-foreground">{a.text}</span>
                    <span className="text-xs text-muted-foreground ml-2">{a.tag}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{a.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-accent rounded-lg p-3 flex items-center gap-2">
              <Clock size={14} className="text-accent-foreground" />
              <span className="text-sm text-accent-foreground font-medium">🚀 On track for FBR filing in 8 days</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default DashboardSection;
