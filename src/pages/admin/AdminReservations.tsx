import { useState } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import { Reservation } from '@/data/mockData';
import { toast } from 'sonner';

const mockReservations: Reservation[] = [
  { id: '1', name: 'James Chen', phone: '+65 9111 1111', email: 'james@email.com', date: '2026-04-06', time: '19:00', guests: 4, specialRequest: 'Window seat preferred', status: 'confirmed', createdAt: '2026-04-05' },
  { id: '2', name: 'Sarah Lim', phone: '+65 9222 2222', email: 'sarah@email.com', date: '2026-04-06', time: '20:00', guests: 2, specialRequest: '', status: 'pending', createdAt: '2026-04-05' },
  { id: '3', name: 'David Tan', phone: '+65 9333 3333', email: 'david@email.com', date: '2026-04-07', time: '18:30', guests: 6, specialRequest: 'Birthday celebration', status: 'pending', createdAt: '2026-04-06' },
  { id: '4', name: 'Michelle Wong', phone: '+65 9444 4444', email: 'michelle@email.com', date: '2026-04-07', time: '19:30', guests: 3, specialRequest: '', status: 'confirmed', createdAt: '2026-04-06' },
  { id: '5', name: 'Robert Ng', phone: '+65 9555 5555', email: 'robert@email.com', date: '2026-04-08', time: '12:00', guests: 8, specialRequest: 'Vegetarian options needed', status: 'pending', createdAt: '2026-04-06' },
];

const AdminReservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>(mockReservations);
  const [filterStatus, setFilterStatus] = useState('all');

  const updateStatus = (id: string, status: Reservation['status']) => {
    setReservations(reservations.map((r) => (r.id === id ? { ...r, status } : r)));
    toast.success(`Reservation ${status}`);
  };

  const filtered = reservations.filter((r) => filterStatus === 'all' || r.status === filterStatus);

  return (
    <AdminLayout>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h1 className="text-2xl font-heading text-ivory">Reservations</h1>
        <div className="flex gap-2">
          {['all', 'pending', 'confirmed', 'cancelled'].map((s) => (
            <button key={s} onClick={() => setFilterStatus(s)}
              className={`px-3 py-1.5 rounded-sm font-ui text-xs capitalize transition-all ${
                filterStatus === s ? 'bg-gold text-background' : 'border border-gold/20 text-muted-foreground hover:text-ivory'
              }`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-card border border-gold/20 rounded-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gold/10">
                {['Name', 'Date', 'Time', 'Guests', 'Phone', 'Status'].map((h) => (
                  <th key={h} className="text-left p-3 text-muted-foreground font-ui text-xs uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((r) => (
                <tr key={r.id} className="border-b border-gold/5 hover:bg-muted/30 transition-colors">
                  <td className="p-3 text-ivory font-body text-sm">{r.name}</td>
                  <td className="p-3 text-muted-foreground font-ui text-sm">{r.date}</td>
                  <td className="p-3 text-muted-foreground font-ui text-sm">{r.time}</td>
                  <td className="p-3 text-muted-foreground font-ui text-sm">{r.guests}</td>
                  <td className="p-3 text-muted-foreground font-ui text-sm">{r.phone}</td>
                  <td className="p-3">
                    <select
                      value={r.status}
                      onChange={(e) => updateStatus(r.id, e.target.value as Reservation['status'])}
                      className="bg-muted border border-gold/20 rounded-sm px-2 py-1 text-ivory font-ui text-xs focus:border-gold focus:outline-none"
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
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

export default AdminReservations;
