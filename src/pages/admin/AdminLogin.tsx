import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock auth
    if (email === 'admin@guibin.com' && password === 'admin123') {
      localStorage.setItem('guibin_token', 'mock-jwt-token');
      navigate('/admin');
      toast.success('Welcome back, Admin!');
    } else {
      toast.error('Invalid credentials. Try admin@guibin.com / admin123');
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading text-gold mb-2">貴賓</h1>
          <p className="text-muted-foreground font-ui text-sm">Admin Panel</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-3 text-ivory font-ui text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-muted border border-gold/20 rounded-sm px-4 py-3 text-ivory font-ui text-sm placeholder:text-muted-foreground focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-gold text-background font-ui text-sm tracking-wider uppercase py-3 rounded-sm hover:bg-gold/90 transition-all"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-muted-foreground text-xs font-ui mt-4">
          Demo: admin@guibin.com / admin123
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
