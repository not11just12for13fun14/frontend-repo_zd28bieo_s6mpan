import { useState } from 'react';
import { saveToken } from '../lib/auth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }
    const fakeToken = btoa(`${email}:${Date.now()}`);
    saveToken(fakeToken);
    window.location.href = '/results';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0b12] to-[#0b0f1a] text-white">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <h1 className="text-3xl font-bold">Login</h1>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <input value={email} onChange={(e)=>setEmail(e.target.value)} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none" placeholder="Email" />
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none" placeholder="Password" />
          {error && <p className="text-rose-400 text-sm">{error}</p>}
          <button className="px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500">Sign In</button>
        </form>
      </div>
    </div>
  );
}
