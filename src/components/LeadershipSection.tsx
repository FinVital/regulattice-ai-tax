import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import moazzamImg from "@/assets/moazzam-waheed.png";

const LeadershipSection = () => (
  <section id="leadership" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-primary uppercase tracking-wider">Leadership</span>
        <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
          Meet the <span className="text-gradient">Leader</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto bg-card rounded-2xl shadow-elevated border border-border overflow-hidden"
      >
        <div className="grid md:grid-cols-2">
          <div className="flex items-center justify-center p-8 bg-muted">
            <img
              src={moazzamImg}
              alt="Moazzam Waheed"
              className="w-56 h-56 rounded-2xl object-cover shadow-elevated"
            />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-bold text-foreground">Moazzam Waheed</h3>
            <p className="text-primary font-medium mt-1 mb-4">CEO & Founder</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              15+ years in fintech and tax compliance. Led ReguLattice to serve 10,000+ SMEs with AI efficiency.
            </p>

            <div className="flex gap-4 mb-6">
              <div className="text-center">
                <div className="text-xl font-heading font-bold text-gradient">15+</div>
                <div className="text-xs text-muted-foreground">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-heading font-bold text-gradient">10K+</div>
                <div className="text-xs text-muted-foreground">SMEs Served</div>
              </div>
            </div>

            <div className="flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-muted text-foreground text-sm px-4 py-2 rounded-lg hover:bg-accent transition-colors">
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href="mailto:moazzamwaheed@gmail.com" className="flex items-center gap-2 gradient-primary text-primary-foreground text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                <Mail size={16} /> Message
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border px-8 py-5 bg-muted/50">
          <p className="text-sm text-muted-foreground italic text-center">
            "Our mission is to democratize tax compliance, making AI tools accessible to SMEs everywhere." — Moazzam Waheed, CEO
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default LeadershipSection;
