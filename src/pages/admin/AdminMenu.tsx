import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { menuItems as initialMenuItems, MenuItem } from '@/data/mockData';
import { Plus, Pencil, Trash2, X } from 'lucide-react';
import { toast } from 'sonner';

const AdminMenu = () => {
  const [items, setItems] = useState<MenuItem[]>(initialMenuItems);
  const [editing, setEditing] = useState<MenuItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  const emptyItem: MenuItem = {
    id: '', name: '', description: '', price: 0, category: 'dim-sum',
    image: 'https://picsum.photos/400/300', featured: false, is_available: true,
  };

  const [form, setForm] = useState<MenuItem>(emptyItem);

  const openAdd = () => {
    setForm({ ...emptyItem, id: Date.now().toString() });
    setEditing(null);
    setShowModal(true);
  };

  const openEdit = (item: MenuItem) => {
    setForm({ ...item });
    setEditing(item);
    setShowModal(true);
  };

  const handleSave = () => {
    if (!form.name.trim()) { toast.error('Name is required'); return; }
    if (editing) {
      setItems(items.map((i) => (i.id === form.id ? form : i)));
      toast.success('Menu item updated');
    } else {
      setItems([...items, form]);
      toast.success('Menu item added');
    }
    setShowModal(false);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
    toast.success('Menu item deleted');
  };

  const toggleFeatured = (id: string) => {
    setItems(items.map((i) => (i.id === id ? { ...i, featured: !i.featured } : i)));
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-heading text-ivory">Menu Manager</h1>
        <button onClick={openAdd} className="flex items-center gap-2 bg-gold text-background font-ui text-sm px-4 py-2 rounded-sm hover:bg-gold/90 transition-all">
          <Plus size={16} /> Add Item
        </button>
      </div>

      <div className="bg-card border border-gold/20 rounded-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold/10">
                <th className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">Image</th>
                <th className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">Name</th>
                <th className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">Category</th>
                <th className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">Price</th>
                <th className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">Featured</th>
                <th className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-gold/5 hover:bg-muted/30 transition-colors">
                  <td className="p-3">
                    <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-sm" />
                  </td>
                  <td className="p-3 text-ivory font-body text-sm">{item.name}</td>
                  <td className="p-3 text-muted-foreground font-ui text-sm capitalize">{item.category.replace('-', ' ')}</td>
                  <td className="p-3 text-gold font-ui text-sm">${item.price}</td>
                  <td className="p-3">
                    <button
                      onClick={() => toggleFeatured(item.id)}
                      className={`w-8 h-5 rounded-full transition-all ${item.featured ? 'bg-gold' : 'bg-muted'}`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-background transition-transform ${item.featured ? 'translate-x-3.5' : 'translate-x-0.5'}`} />
                    </button>
                  </td>
                  <td className="p-3">
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(item)} className="text-muted-foreground hover:text-gold transition-colors">
                        <Pencil size={16} />
                      </button>
                      <button onClick={() => handleDelete(item.id)} className="text-muted-foreground hover:text-destructive transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4">
          <div className="bg-card border border-gold/20 rounded-sm w-full max-w-lg max-h-[90vh] overflow-y-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-heading text-ivory">{editing ? 'Edit' : 'Add'} Menu Item</h2>
              <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-ivory">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-2.5 text-ivory font-ui text-sm focus:border-gold focus:outline-none" />
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as MenuItem['category'] })}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-2.5 text-ivory font-ui text-sm focus:border-gold focus:outline-none">
                <option value="dim-sum">Dim Sum</option>
                <option value="main-course">Main Course</option>
                <option value="seafood">Seafood</option>
                <option value="dessert">Dessert</option>
                <option value="beverages">Beverages</option>
              </select>
              <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={3} className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-2.5 text-ivory font-ui text-sm focus:border-gold focus:outline-none resize-none" />
              <input type="number" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-2.5 text-ivory font-ui text-sm focus:border-gold focus:outline-none" />
              <input placeholder="Image URL" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-2.5 text-ivory font-ui text-sm focus:border-gold focus:outline-none" />
              <div className="flex gap-6">
                <label className="flex items-center gap-2 text-ivory font-ui text-sm cursor-pointer">
                  <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                    className="accent-gold" /> Featured
                </label>
                <label className="flex items-center gap-2 text-ivory font-ui text-sm cursor-pointer">
                  <input type="checkbox" checked={form.is_available} onChange={(e) => setForm({ ...form, is_available: e.target.checked })}
                    className="accent-gold" /> Available
                </label>
              </div>
              <button onClick={handleSave}
                className="w-full bg-gold text-background font-ui text-sm tracking-wider uppercase py-3 rounded-sm hover:bg-gold/90 transition-all">
                {editing ? 'Update' : 'Add'} Item
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminMenu;
