import { motion } from "framer-motion";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const ContactStop = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${portfolioData.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    window.open(mailto);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-3xl w-full grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-display neon-text mb-6">
            📞 Final Stop — Contact
          </h2>

          <div className="space-y-4">
            <a href={`tel:${portfolioData.phone}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
              <span className="text-xl">📱</span>
              <span>{portfolioData.phone}</span>
            </a>
            <a href={`mailto:${portfolioData.email}`} className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
              <span className="text-xl">✉️</span>
              <span>{portfolioData.email}</span>
            </a>
            <a href={`https://${portfolioData.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors">
              <span className="text-xl">🔗</span>
              <span>LinkedIn Profile</span>
            </a>
            <p className="flex items-center gap-3 text-foreground/80">
              <span className="text-xl">📍</span>
              <span>{portfolioData.location}</span>
            </p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass rounded-xl p-6 space-y-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
          />
          <textarea
            placeholder="Message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary resize-none"
          />
          <button
            type="submit"
            className="w-full font-display text-sm py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Send Message 🚀
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactStop;
