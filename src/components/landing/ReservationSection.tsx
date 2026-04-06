import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { siteSettings } from '@/data/mockData';
import { MessageCircle } from 'lucide-react';

const ReservationSection = () => {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', date: '', time: '', guests: '2', specialRequest: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success('Reservation submitted successfully!', {
        description: `Thank you ${form.name}, we look forward to welcoming you.`,
        style: { background: 'hsl(20,100%,5%)', border: '1px solid hsl(43,52%,54%,0.4)', color: 'hsl(36,60%,87%)' },
      });
      setForm({ name: '', phone: '', email: '', date: '', time: '', guests: '2', specialRequest: '' });
      setSubmitting(false);
    }, 1000);
  };

  const whatsappUrl = `https://wa.me/${siteSettings.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi, I would like to make a reservation at Gui Bin Signature.')}`;

  return (
    <section id="reservation" className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold font-ui text-sm tracking-[0.3em] uppercase mb-3">Join Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory">
            Make a <span className="text-gold">Reservation</span>
          </h2>
        </div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-3 text-ivory font-ui text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-3 text-ivory font-ui text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
              />
            </div>
            <input
              required
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-3 text-ivory font-ui text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
            />
            <div className="grid sm:grid-cols-3 gap-5">
              <input
                required
                type="date"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-3 text-ivory font-ui text-sm focus:border-gold focus:outline-none transition-colors"
              />
              <input
                required
                type="time"
                value={form.time}
                onChange={(e) => setForm({ ...form, time: e.target.value })}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-3 text-ivory font-ui text-sm focus:border-gold focus:outline-none transition-colors"
              />
              <select
                value={form.guests}
                onChange={(e) => setForm({ ...form, guests: e.target.value })}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-3 text-ivory font-ui text-sm focus:border-gold focus:outline-none transition-colors"
              >
                {Array.from({ length: 20 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Special Requests (optional)"
              rows={3}
              value={form.specialRequest}
              onChange={(e) => setForm({ ...form, specialRequest: e.target.value })}
              className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-3 text-ivory font-ui text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors resize-none"
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 bg-gold text-background font-ui text-sm tracking-wider uppercase py-3 rounded-sm hover:bg-gold/90 transition-all gold-glow disabled:opacity-50"
              >
                {submitting ? 'Submitting...' : 'Reserve Now'}
              </button>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-green-600 text-green-400 font-ui text-sm tracking-wider uppercase rounded-sm hover:bg-green-900/20 transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ReservationSection;
