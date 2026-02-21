import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "info@regulattice.com", href: "mailto:info@regulattice.com" },
  { icon: Phone, label: "Phone", value: "+923346250250", href: "tel:+923346250250" },
  { icon: MapPin, label: "Address", value: "271 BMCHS Rd. 18, Karachi, Pakistan" },
  { icon: Clock, label: "Business Hours", value: "Mon-Fri 9AM-6PM PKT" },
];

const ContactSection = () => {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const subject = data.get("subject") as string;
    const message = data.get("message") as string;

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0ACompany: ${company}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:moazzamwaheed@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-background lattice-grid">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mt-3">
            Contact Our <span className="text-gradient">Team</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl shadow-elevated border border-border p-8 space-y-5"
          >
            <h3 className="font-heading font-semibold text-foreground text-lg mb-2">Send Us a Message</h3>
            <input name="name" required placeholder="Full Name *" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <input name="email" type="email" required placeholder="Email Address *" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <input name="company" placeholder="Company" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <input name="subject" required placeholder="Subject *" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <textarea name="message" required rows={4} placeholder="Message *" className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <button type="submit" className="gradient-cta text-primary-foreground font-semibold px-6 py-3 rounded-xl flex items-center gap-2 hover:opacity-90 transition-opacity w-full justify-center">
              <Send size={16} /> Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-heading font-semibold text-foreground text-lg">Get In Touch</h3>
            {contactInfo.map((c, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                  <c.icon size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{c.value}</a>
                  ) : (
                    <div className="text-sm text-muted-foreground">{c.value}</div>
                  )}
                </div>
              </div>
            ))}

            <div className="bg-card rounded-2xl shadow-card border border-border p-6 mt-8">
              <h4 className="font-heading font-semibold text-foreground mb-2">Ready to Get Started?</h4>
              <p className="text-sm text-muted-foreground mb-4">Book a demo to see ReguLattice in action.</p>
              <a
                href="mailto:moazzamwaheed@gmail.com?subject=Book a Demo - ReguLattice"
                className="gradient-primary text-primary-foreground font-semibold text-sm px-6 py-2.5 rounded-xl inline-block hover:opacity-90 transition-opacity"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
