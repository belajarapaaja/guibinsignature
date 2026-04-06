import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { testimonials as initialTestimonials, Testimonial } from '@/data/mockData';
import { Plus, Pencil, Trash2, X, Star } from 'lucide-react';
import { toast } from 'sonner';

const AdminTestimonials = () => {
  const [items, setItems] = useState<Testimonial[]>(initialTestimonials);
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState<Testimonial | null>(null);
  const [form, setForm] = useState({ name: '', quote: '', rating: 5, visible: true });

  const openAdd = () => { setForm({ name: '', quote: '', rating: 5, visible: true }); setEditing(null); setShowModal(true); };
  const openEdit = (t: Testimonial) => { setForm({ name: t.name, quote: t.quote, rating: t.rating, visible: t.visible }); setEditing(t); setShowModal(true); };

  const handleSave = () => {
    if (!form.name.trim() || !form.quote.trim()) { toast.error('Name and quote are required'); return; }
    if (editing) {
      setItems(items.map((i) => (i.id === editing.id ? { ...i, ...form } : i)));
      toast.success('Testimonial updated');
    } else {
      setItems([...items, { id: Date.now().toString(), ...form }]);
      toast.success('Testimonial added');
    }
    setShowModal(false);
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-heading text-ivory">Testimonials</h1>
        <button onClick={openAdd} className="flex items-center gap-2 bg-gold text-background font-ui text-sm px-4 py-2 rounded-sm hover:bg-gold/90 transition-all">
          <Plus size={16} /> Add
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((t) => (
          <div key={t.id} className={`bg-card border border-gold/20 rounded-sm p-5 ${!t.visible ? 'opacity-50' : ''}`}>
            <div className="flex gap-1 mb-3">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-ivory/80 font-body text-sm italic mb-3">"{t.quote}"</p>
            <p className="text-gold font-ui text-xs">— {t.name}</p>
            <div className="flex gap-2 mt-4 pt-3 border-t border-gold/10">
              <button onClick={() => openEdit(t)} className="text-muted-foreground hover:text-gold transition-colors"><Pencil size={14} /></button>
              <button onClick={() => { setItems(items.filter((i) => i.id !== t.id)); toast.success('Deleted'); }} className="text-muted-foreground hover:text-destructive transition-colors"><Trash2 size={14} /></button>
              <button onClick={() => setItems(items.map((i) => (i.id === t.id ? { ...i, visible: !i.visible } : i)))}
                className="text-muted-foreground hover:text-ivory transition-colors font-ui text-xs ml-auto">
                {t.visible ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4">
          <div className="bg-card border border-gold/20 rounded-sm w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-heading text-ivory">{editing ? 'Edit' : 'Add'} Testimonial</h2>
              <button onClick={() => setShowModal(false)} className="text-muted-foreground hover:text-ivory"><X size={20} /></button>
            </div>
            <div className="space-y-4">
              <input placeholder="Customer Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-2.5 text-ivory font-ui text-sm focus:border-gold focus:outline-none" />
              <textarea placeholder="Quote" rows={3} value={form.quote} onChange={(e) => setForm({ ...form, quote: e.target.value })}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-2.5 text-ivory font-ui text-sm focus:border-gold focus:outline-none resize-none" />
              <div className="flex items-center gap-2">
                <span className="text-ivory font-ui text-sm">Rating:</span>
                {[1, 2, 3, 4, 5].map((r) => (
                  <button key={r} onClick={() => setForm({ ...form, rating: r })}>
                    <Star size={18} className={r <= form.rating ? 'fill-gold text-gold' : 'text-muted-foreground'} />
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 text-ivory font-ui text-sm cursor-pointer">
                <input type="checkbox" checked={form.visible} onChange={(e) => setForm({ ...form, visible: e.target.checked })} className="accent-gold" />
                Visible on website
              </label>
              <button onClick={handleSave} className="w-full bg-gold text-background font-ui text-sm tracking-wider uppercase py-3 rounded-sm hover:bg-gold/90 transition-all">
                {editing ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminTestimonials;
