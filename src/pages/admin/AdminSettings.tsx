import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { siteSettings as initialSettings, SiteSettings } from '@/data/mockData';
import { toast } from 'sonner';

const AdminSettings = () => {
  const [settings, setSettings] = useState<SiteSettings>(initialSettings);

  const handleSave = () => {
    toast.success('Settings saved successfully!');
  };

  const update = (key: keyof SiteSettings, value: string) => {
    setSettings({ ...settings, [key]: value });
  };

  const fields: { key: keyof SiteSettings; label: string; type?: string; multiline?: boolean }[] = [
    { key: 'restaurantName', label: 'Restaurant Name' },
    { key: 'tagline', label: 'Tagline' },
    { key: 'address', label: 'Address' },
    { key: 'phone', label: 'Phone' },
    { key: 'email', label: 'Email', type: 'email' },
    { key: 'whatsapp', label: 'WhatsApp Number' },
    { key: 'operatingHours', label: 'Operating Hours' },
    { key: 'mapUrl', label: 'Google Maps Embed URL' },
    { key: 'heroImage', label: 'Hero Image URL' },
    { key: 'aboutText', label: 'About Section Text', multiline: true },
    { key: 'aboutImage', label: 'About Section Image URL' },
    { key: 'instagram', label: 'Instagram URL' },
    { key: 'tiktok', label: 'TikTok URL' },
    { key: 'facebook', label: 'Facebook URL' },
  ];

  return (
    <AdminLayout>
      <h1 className="text-2xl font-heading text-ivory mb-6">Site Settings</h1>

      <div className="bg-card border border-gold/20 rounded-sm p-6 max-w-2xl">
        <div className="space-y-4">
          {fields.map((field) => (
            <div key={field.key}>
              <label className="block text-ivory font-ui text-xs uppercase tracking-wider mb-1.5">{field.label}</label>
              {field.multiline ? (
                <textarea
                  rows={4}
                  value={settings[field.key]}
                  onChange={(e) => update(field.key, e.target.value)}
                  className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-2.5 text-ivory font-ui text-sm focus:border-gold focus:outline-none resize-none"
                />
              ) : (
                <input
                  type={field.type || 'text'}
                  value={settings[field.key]}
                  onChange={(e) => update(field.key, e.target.value)}
                  className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-2.5 text-ivory font-ui text-sm focus:border-gold focus:outline-none"
                />
              )}
            </div>
          ))}
          <button onClick={handleSave} className="bg-gold text-background font-ui text-sm tracking-wider uppercase px-6 py-3 rounded-sm hover:bg-gold/90 transition-all mt-4">
            Save Settings
          </button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;
