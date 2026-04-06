import AdminLayout from '@/components/admin/AdminLayout';
import { menuItems, galleryImages, testimonials } from '@/data/mockData';
import { UtensilsCrossed, Image, CalendarDays, Clock } from 'lucide-react';

const stats = [
  { label: "Today's Reservations", value: '12', icon: Clock, color: 'text-gold' },
  { label: 'Menu Items', value: String(menuItems.length), icon: UtensilsCrossed, color: 'text-gold' },
  { label: 'Gallery Photos', value: String(galleryImages.length), icon: Image, color: 'text-gold' },
  { label: 'Pending Reservations', value: '5', icon: CalendarDays, color: 'text-gold' },
];

const recentReservations = [
  { name: 'James Chen', date: '2026-04-06', time: '19:00', guests: 4, status: 'confirmed' },
  { name: 'Sarah Lim', date: '2026-04-06', time: '20:00', guests: 2, status: 'pending' },
  { name: 'David Tan', date: '2026-04-07', time: '18:30', guests: 6, status: 'pending' },
  { name: 'Michelle Wong', date: '2026-04-07', time: '19:30', guests: 3, status: 'confirmed' },
];

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h1 className="text-2xl font-heading text-ivory mb-6">Dashboard</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-card border border-gold/20 rounded-sm p-5">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className={stat.color} size={22} />
            </div>
            <p className="text-3xl font-heading text-ivory">{stat.value}</p>
            <p className="text-muted-foreground font-ui text-xs mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-card border border-gold/20 rounded-sm overflow-hidden">
        <div className="p-4 border-b border-gold/20">
          <h2 className="font-heading text-lg text-ivory">Recent Reservations</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold/10">
                <th className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">Name</th>
                <th className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">Date</th>
                <th className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">Time</th>
                <th className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">Guests</th>
                <th className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentReservations.map((r, i) => (
                <tr key={i} className="border-b border-gold/5 hover:bg-muted/30 transition-colors">
                  <td className="p-3 text-ivory font-body text-sm">{r.name}</td>
                  <td className="p-3 text-muted-foreground font-ui text-sm">{r.date}</td>
                  <td className="p-3 text-muted-foreground font-ui text-sm">{r.time}</td>
                  <td className="p-3 text-muted-foreground font-ui text-sm">{r.guests}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded-sm font-ui text-xs capitalize ${
                      r.status === 'confirmed' ? 'bg-green-900/30 text-green-400' : 'bg-gold/10 text-gold'
                    }`}>
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
