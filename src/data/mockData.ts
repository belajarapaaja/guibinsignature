export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'dim-sum' | 'main-course' | 'seafood' | 'dessert' | 'beverages';
  image: string;
  featured: boolean;
  is_available: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  rating: number;
  visible: boolean;
}

export interface Reservation {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  specialRequest: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface SiteSettings {
  restaurantName: string;
  tagline: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  mapUrl: string;
  operatingHours: string;
  heroImage: string;
  aboutText: string;
  aboutImage: string;
  instagram: string;
  tiktok: string;
  facebook: string;
}

export const menuItems: MenuItem[] = [
  { id: '1', name: 'Emperor\'s Dim Sum Platter', description: 'A royal selection of handcrafted dim sum including har gow, siu mai, and crystal dumplings.', price: 38, category: 'dim-sum', image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400', featured: true, is_available: true },
  { id: '2', name: 'Golden Crispy Spring Rolls', description: 'Delicate spring rolls filled with seasoned vegetables, served with sweet chili.', price: 18, category: 'dim-sum', image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400', featured: true, is_available: true },
  { id: '3', name: 'Truffle Xiao Long Bao', description: 'Soup dumplings infused with black truffle essence and premium pork.', price: 28, category: 'dim-sum', image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400', featured: false, is_available: true },
  { id: '4', name: 'Peking Duck Supreme', description: 'Whole roasted Peking duck carved tableside with pancakes and condiments.', price: 88, category: 'main-course', image: 'https://images.unsplash.com/photo-1518492104633-130d0cc84637?w=400', featured: true, is_available: true },
  { id: '5', name: 'Wok-Fried Wagyu Beef', description: 'Premium wagyu beef wok-fried with black pepper sauce and seasonal greens.', price: 68, category: 'main-course', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400', featured: true, is_available: true },
  { id: '6', name: 'Mapo Tofu Signature', description: 'Silken tofu in our signature spicy Sichuan sauce with minced pork.', price: 32, category: 'main-course', image: 'https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=400', featured: false, is_available: true },
  { id: '7', name: 'Steamed Dragon Grouper', description: 'Fresh whole grouper steamed to perfection with ginger and spring onion.', price: 78, category: 'seafood', image: 'https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?w=400', featured: true, is_available: true },
  { id: '8', name: 'Lobster with Ginger Scallion', description: 'Live lobster wok-fried with aromatic ginger and scallion sauce.', price: 98, category: 'seafood', image: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=400', featured: false, is_available: true },
  { id: '9', name: 'Mango Pomelo Sago', description: 'Refreshing chilled dessert with fresh mango, pomelo, and sago pearls.', price: 16, category: 'dessert', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400', featured: false, is_available: true },
  { id: '10', name: 'Red Bean Paste Bun', description: 'Fluffy steamed buns filled with sweet red bean paste.', price: 12, category: 'dessert', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400', featured: false, is_available: true },
  { id: '11', name: 'Jasmine Pearl Tea', description: 'Premium hand-rolled jasmine pearl green tea, fragrant and smooth.', price: 12, category: 'beverages', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400', featured: false, is_available: true },
  { id: '12', name: 'Aged Pu-erh Tea', description: 'Rich and earthy aged Pu-erh tea served in traditional clay pot.', price: 18, category: 'beverages', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400', featured: false, is_available: true },
];

export const galleryImages: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600', caption: 'Elegant dining hall' },
  { id: '2', url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', caption: 'Signature dish presentation' },
  { id: '3', url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600', caption: 'Private dining room' },
  { id: '4', url: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600', caption: 'Our expert chefs at work' },
  { id: '5', url: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600', caption: 'Tea ceremony experience' },
  { id: '6', url: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600', caption: 'Main entrance' },
  { id: '7', url: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600', caption: 'Dessert artistry' },
  { id: '8', url: 'https://images.unsplash.com/photo-1540914124281-342587941389?w=600', caption: 'Dim sum selection' },
];

export const testimonials: Testimonial[] = [
  { id: '1', name: 'James Chen', quote: 'An extraordinary dining experience. The Peking Duck rivals the finest in Beijing. Every dish is a masterpiece.', rating: 5, visible: true },
  { id: '2', name: 'Sarah Williams', quote: 'The ambiance transports you to imperial China. The dim sum platter was absolutely divine. Will return!', rating: 5, visible: true },
  { id: '3', name: 'David Tan', quote: 'Gui Bin Signature has set a new standard for Chinese fine dining. The attention to detail is remarkable.', rating: 5, visible: true },
  { id: '4', name: 'Michelle Liu', quote: 'From the moment you step in, you feel like royalty. The steamed grouper was the freshest I\'ve ever had.', rating: 4, visible: true },
  { id: '5', name: 'Robert Ng', quote: 'A hidden gem! The truffle xiao long bao is simply life-changing. Impeccable service throughout.', rating: 5, visible: true },
];

export const siteSettings: SiteSettings = {
  restaurantName: 'Gui Bin Signature',
  tagline: 'Where Imperial Tradition Meets Modern Elegance',
  address: '88 Golden Dragon Boulevard, Chinatown District',
  phone: '+65 8888 8888',
  email: 'reservations@guibinsignature.com',
  whatsapp: '+6588888888',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8!2d103.8!3d1.28!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTYnNDguMCJOIDEwM8KwNDgnMDAuMCJF!5e0!3m2!1sen!2ssg!4v1',
  operatingHours: 'Mon–Thu: 11:30 AM – 10:00 PM | Fri–Sun: 11:00 AM – 11:00 PM',
  heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920',
  aboutText: 'Founded on a legacy of culinary excellence, Gui Bin Signature brings the grandeur of imperial Chinese cuisine to the modern dining table. Our master chefs, trained in the ancient traditions of Cantonese, Sichuan, and Teochew cuisine, craft each dish as a tribute to centuries of culinary artistry.\n\nEvery ingredient is meticulously sourced, every presentation is a work of art, and every meal is an unforgettable journey through the rich tapestry of Chinese gastronomy.',
  aboutImage: 'https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=600',
  instagram: 'https://instagram.com/guibinsignature',
  tiktok: 'https://tiktok.com/@guibinsignature',
  facebook: 'https://facebook.com/guibinsignature',
};
