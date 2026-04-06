import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { siteSettings } from '@/data/mockData';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.83-3.32 2.89 2.89 0 012.83-2.47c.32 0 .62.05.91.13v-3.5a6.37 6.37 0 00-.91-.07 6.27 6.27 0 00-6.27 6.75 6.27 6.27 0 006.27 5.79 6.27 6.27 0 006.27-6.27V8.68a8.16 8.16 0 004.77 1.53V6.69h-.94z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold font-ui text-sm tracking-[0.3em] uppercase mb-3">Find Us</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory">
            Contact & <span className="text-gold">Location</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-gold mt-1 shrink-0" size={20} />
              <div>
                <p className="text-ivory font-ui text-sm font-medium mb-1">Address</p>
                <p className="text-muted-foreground font-body">{siteSettings.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-gold mt-1 shrink-0" size={20} />
              <div>
                <p className="text-ivory font-ui text-sm font-medium mb-1">Phone</p>
                <p className="text-muted-foreground font-body">{siteSettings.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-gold mt-1 shrink-0" size={20} />
              <div>
                <p className="text-ivory font-ui text-sm font-medium mb-1">Email</p>
                <p className="text-muted-foreground font-body">{siteSettings.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-gold mt-1 shrink-0" size={20} />
              <div>
                <p className="text-ivory font-ui text-sm font-medium mb-1">Operating Hours</p>
                <p className="text-muted-foreground font-body">{siteSettings.operatingHours}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gold/20">
              <p className="text-ivory font-ui text-sm font-medium mb-3">Follow Us</p>
              <div className="flex gap-4">
                <a href={siteSettings.instagram} target="_blank" rel="noopener noreferrer" className="text-gold/60 hover:text-gold transition-colors">
                  <Instagram size={22} />
                </a>
                <a href={siteSettings.tiktok} target="_blank" rel="noopener noreferrer" className="text-gold/60 hover:text-gold transition-colors">
                  <TikTokIcon />
                </a>
                <a href={siteSettings.facebook} target="_blank" rel="noopener noreferrer" className="text-gold/60 hover:text-gold transition-colors">
                  <FacebookIcon />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-sm overflow-hidden border border-gold/20 h-[350px]"
          >
            <iframe
              src={siteSettings.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              title="Restaurant Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
