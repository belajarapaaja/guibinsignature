import { Link } from 'react-router-dom';
import LotusReveal from '../ornaments/LotusReveal';
import { menuItems } from '@/data/mockData';

const FeaturedMenu = () => {
  const featured = menuItems.filter((item) => item.featured);

  return (
    <section id="featured-menu" className="py-20 bg-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-gold font-ui text-sm tracking-[0.3em] uppercase mb-3">Culinary Excellence</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory">
            Signature <span className="text-gold">Selections</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((item, i) => (
            <LotusReveal key={item.id} delay={i * 0.1}>
              <div className="group bg-card border border-gold/20 rounded-sm overflow-hidden hover:border-gold/50 transition-all duration-500">
                <div className="relative overflow-hidden h-56">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute top-3 right-3 bg-gold text-background font-ui text-xs px-3 py-1 rounded-sm">
                    ${item.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-heading text-ivory mb-2">{item.name}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed">{item.description}</p>
                </div>
              </div>
            </LotusReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-block px-8 py-3 border border-gold text-gold font-ui text-sm tracking-wider uppercase rounded-sm hover:bg-gold/10 transition-all"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
