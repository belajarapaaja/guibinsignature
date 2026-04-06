import { Link } from 'react-router-dom';
import { siteSettings } from '@/data/mockData';

const Footer = () => {
  return (
    <footer className="border-t border-gold/20">
      {/* Gold ornament line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading text-gold mb-2">貴賓</h3>
            <p className="text-sm text-muted-foreground font-body">{siteSettings.tagline}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ivory font-ui text-sm font-medium tracking-wider uppercase mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'Menu', 'About', 'Gallery', 'Reservation'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Menu' ? '/menu' : `/#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-gold text-sm font-body transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ivory font-ui text-sm font-medium tracking-wider uppercase mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground font-body">
              <p>{siteSettings.phone}</p>
              <p>{siteSettings.email}</p>
              <p>{siteSettings.address}</p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-ivory font-ui text-sm font-medium tracking-wider uppercase mb-4">Hours</h4>
            <p className="text-sm text-muted-foreground font-body">{siteSettings.operatingHours}</p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gold/10 text-center">
          <p className="text-muted-foreground text-xs font-ui">
            © {new Date().getFullYear()} Gui Bin Signature. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
