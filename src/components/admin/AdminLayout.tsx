import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, UtensilsCrossed, Image, CalendarDays, MessageSquareQuote, Settings, LogOut, Menu, X, ChevronLeft } from 'lucide-react';

const sidebarItems = [
  { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { label: 'Menu Manager', path: '/admin/menu', icon: UtensilsCrossed },
  { label: 'Gallery', path: '/admin/gallery', icon: Image },
  { label: 'Reservations', path: '/admin/reservations', icon: CalendarDays },
  { label: 'Testimonials', path: '/admin/testimonials', icon: MessageSquareQuote },
  { label: 'Settings', path: '/admin/settings', icon: Settings },
];

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('guibin_token')) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('guibin_token');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-gold/20 transform transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gold/20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-heading text-gold">貴賓</span>
            <span className="text-xs font-ui text-muted-foreground uppercase tracking-wider">Admin</span>
          </Link>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-muted-foreground">
            <X size={20} />
          </button>
        </div>
        <nav className="p-3 space-y-1">
          {sidebarItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-sm font-ui text-sm transition-all ${
                location.pathname === item.path
                  ? 'bg-gold/10 text-gold border border-gold/20'
                  : 'text-muted-foreground hover:text-ivory hover:bg-muted'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gold/20">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-sm font-ui text-sm text-muted-foreground hover:text-destructive transition-all w-full"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-30 h-14 bg-background/90 backdrop-blur-md border-b border-gold/20 flex items-center px-4 gap-3">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gold">
            <Menu size={22} />
          </button>
          <Link to="/" className="text-muted-foreground hover:text-gold font-ui text-xs flex items-center gap-1">
            <ChevronLeft size={14} /> View Site
          </Link>
        </header>
        <main className="p-4 md:p-6 lg:p-8">
          {children}
        </main>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-background/50 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}
    </div>
  );
};

export default AdminLayout;
