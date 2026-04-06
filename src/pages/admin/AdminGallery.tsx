import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { galleryImages as initialImages, GalleryImage } from '@/data/mockData';
import { Trash2, Plus, X } from 'lucide-react';
import { toast } from 'sonner';

const AdminGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  const [showAdd, setShowAdd] = useState(false);
  const [url, setUrl] = useState('');
  const [caption, setCaption] = useState('');

  const handleAdd = () => {
    if (!url.trim()) { toast.error('URL is required'); return; }
    setImages([...images, { id: Date.now().toString(), url, caption }]);
    setUrl(''); setCaption(''); setShowAdd(false);
    toast.success('Image added');
  };

  const handleDelete = (id: string) => {
    setImages(images.filter((i) => i.id !== id));
    toast.success('Image deleted');
  };

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-heading text-ivory">Gallery Manager</h1>
        <button onClick={() => setShowAdd(true)} className="flex items-center gap-2 bg-gold text-background font-ui text-sm px-4 py-2 rounded-sm hover:bg-gold/90 transition-all">
          <Plus size={16} /> Add Image
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.id} className="relative group bg-card border border-gold/20 rounded-sm overflow-hidden">
            <img src={img.url} alt={img.caption} className="w-full h-48 object-cover" />
            <div className="p-3">
              <p className="text-ivory font-ui text-xs truncate">{img.caption || 'No caption'}</p>
            </div>
            <button
              onClick={() => handleDelete(img.id)}
              className="absolute top-2 right-2 bg-destructive text-destructive-foreground p-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
      </div>

      {showAdd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4">
          <div className="bg-card border border-gold/20 rounded-sm w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-heading text-ivory">Add Image</h2>
              <button onClick={() => setShowAdd(false)} className="text-muted-foreground hover:text-ivory"><X size={20} /></button>
            </div>
            <div className="space-y-4">
              <input placeholder="Image URL" value={url} onChange={(e) => setUrl(e.target.value)}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-2.5 text-ivory font-ui text-sm focus:border-gold focus:outline-none" />
              <input placeholder="Caption" value={caption} onChange={(e) => setCaption(e.target.value)}
                className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-2.5 text-ivory font-ui text-sm focus:border-gold focus:outline-none" />
              <button onClick={handleAdd} className="w-full bg-gold text-background font-ui text-sm tracking-wider uppercase py-3 rounded-sm hover:bg-gold/90 transition-all">
                Add Image
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminGallery;
