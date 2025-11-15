import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Video, BrainCircuit } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/upload', label: 'Upload Video' },
    { to: '/results', label: 'Results' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-fuchsia-500 to-indigo-500 text-white">
              <BrainCircuit size={20} />
            </div>
            <span className="font-semibold text-white">VDLA</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm text-white/80 hover:text-white transition ${isActive ? 'text-white' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/login" className="text-sm text-white/80 hover:text-white">Login</NavLink>
            <NavLink to="/register" className="text-sm text-white/80 hover:text-white">Register</NavLink>
          </nav>

          <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden py-3 border-t border-white/10">
            <div className="flex flex-col gap-2 py-2">
              {navItems.map((item) => (
                <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)} className="text-white/90">
                  {item.label}
                </NavLink>
              ))}
              <div className="flex gap-4 py-2">
                <NavLink to="/login" onClick={() => setOpen(false)} className="text-white">Login</NavLink>
                <NavLink to="/register" onClick={() => setOpen(false)} className="text-white">Register</NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
