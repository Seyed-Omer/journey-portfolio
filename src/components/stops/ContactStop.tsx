import { motion } from "framer-motion";
import { useState } from "react";
import { portfolioData } from "@/data/portfolio";

const contactItems = [
  { icon: "📱", label: portfolioData.phone, href: `tel:${portfolioData.phone}` },
  { icon: "✉️", label: portfolioData.email, href: `mailto:${portfolioData.email}` },
  { icon: "🔗", label: "LinkedIn Profile", href: `https://${portfolioData.linkedin}` },
  { icon: "📍", label: portfolioData.location, href: undefined },
];

const ContactStop = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:${portfolioData.email}?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}`;
    window.open(mailto);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="absolute left-1/4 bottom-1/3 w-72 h-72 rounded-full opacity-10 blur-[100px]" style={{ background: "hsl(280 80% 60%)" }} />

      <div className="max-w-3xl w-full grid md:grid-cols-2 gap-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring" }}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-display neon-border text-primary mb-4">
            🏁 Final Stop
          </span>
          <h2 className="text-3xl md:text-4xl font-display neon-text mb-8">
            Contact Terminal
          </h2>

          <div className="space-y-4">
            {contactItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-foreground/80 hover:text-primary transition-colors group"
                  >
                    <span className="text-xl group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </a>
                ) : (
                  <div className="flex items-center gap-3 text-foreground/80">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 space-y-4 neon-box"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          {[
            { type: "text", placeholder: "Your Name", key: "name" as const },
            { type: "email", placeholder: "Your Email", key: "email" as const },
          ].map((field) => (
            <motion.input
              key={field.key}
              type={field.type}
              placeholder={field.placeholder}
              required
              value={form[field.key]}
              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
              className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:neon-border transition-all"
              whileFocus={{ scale: 1.01 }}
            />
          ))}
          <motion.textarea
            placeholder="Message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all resize-none"
          />
          <motion.button
            type="submit"
            className="w-full font-display text-sm py-3 rounded-xl bg-primary text-primary-foreground relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              animate={{ x: ["-200%", "200%"] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <span className="relative z-10">Send Message 🚀</span>
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactStop;
