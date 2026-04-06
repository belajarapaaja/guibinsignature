import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowLeft } from 'lucide-react';
import LotusReveal from '@/components/ornaments/LotusReveal';
import { menuItems } from '@/data/mockData';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'dim-sum', label: 'Dim Sum' },
  { key: 'main-course', label: 'Main Course' },
  { key: 'seafood', label: 'Seafood' },
  { key: 'dessert', label: 'Dessert' },
  { key: 'beverages', label: 'Beverages' },
] as const;

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return menuItems
      .filter((item) => item.is_available)
      .filter((item) => activeCategory === 'all' || item.category === activeCategory)
      .filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.description.toLowerCase().includes(search.toLowerCase())
      );
  }, [activeCategory, search]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="relative h-64 flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep via-background/80 to-background" />
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gold hover:text-ivory transition-colors font-ui text-sm mb-4">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-heading text-ivory">
            Our <span className="text-gold">Menu</span>
          </h1>
          <p className="text-muted-foreground font-body mt-2">A curated journey through imperial Chinese cuisine</p>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-8">
        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <input
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-muted border border-gold/20 rounded-sm pl-10 pr-4 py-2.5 text-ivory font-ui text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-sm font-ui text-sm tracking-wider transition-all ${
                activeCategory === cat.key
                  ? 'bg-gold text-background'
                  : 'border border-gold/20 text-ivory/70 hover:border-gold/50 hover:text-ivory'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <LotusReveal key={item.id} delay={i * 0.05}>
              <div className="group bg-card border border-gold/20 rounded-sm overflow-hidden hover:border-gold/50 transition-all duration-500">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute top-3 right-3 bg-gold text-background font-ui text-xs px-3 py-1 rounded-sm font-medium">
                    ${item.price}
                  </div>
                  <div className="absolute top-3 left-3 bg-background/70 text-ivory font-ui text-xs px-2 py-1 rounded-sm capitalize">
                    {item.category.replace('-', ' ')}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-heading text-ivory mb-1">{item.name}</h3>
                  <p className="text-muted-foreground text-sm font-body leading-relaxed line-clamp-2">{item.description}</p>
                </div>
              </div>
            </LotusReveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground font-body text-lg">No dishes found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
