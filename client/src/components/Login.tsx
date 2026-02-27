import { useState } from 'react';
import { useAuth } from './AuthContext';
import { toast } from 'sonner@2.0.3';

// Colorful B logo matching the design
function BellahBeatrixLogo() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Top-left green segment */}
      <path
        d="M8 6C8 4.895 8.895 4 10 4H26V26H10C8.895 26 8 25.105 8 24V6Z"
        fill="#4CAF82"
      />
      {/* Top-right red/orange segment */}
      <path
        d="M26 4H36C40.418 4 44 7.582 44 12C44 16.418 40.418 20 36 20H26V4Z"
        fill="#E05C5C"
      />
      {/* Bottom bump top-right yellow */}
      <path
        d="M26 20H38C42.418 20 46 23.582 46 28C46 32.418 42.418 36 38 36H26V20Z"
        fill="#F5B942"
      />
      {/* Bottom-left blue segment */}
      <path
        d="M8 26H26V48H10C8.895 48 8 47.105 8 46V28C8 26.895 8.895 26 10 26H8Z"
        fill="#4A90D9"
      />
      {/* Bottom connector */}
      <path
        d="M26 36H38C42.418 36 46 39.582 46 44V44C46 46.209 44.209 48 42 48H26V36Z"
        fill="#9B59B6"
      />
    </svg>
  );
}

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      toast.error('Please enter both username and password');
      return;
    }

    const success = login(username, password);
    if (success) {
      toast.success(`Welcome back, ${username}!`);
    } else {
      toast.error('Invalid username or password. Use "admin" or "staff".');
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: 'radial-gradient(ellipse at center, #f3d8e8 0%, #ede0ef 40%, #e8d5ec 100%)',
      }}
    >
      {/* Login Card */}
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-sm">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center mb-6">
          <div className="mb-3">
            <BellahBeatrixLogo />
          </div>
          <h1 className="text-[#333333] text-xl tracking-tight mb-1" style={{ fontWeight: 600 }}>
            BellahBeatrix
          </h1>
          <p className="text-[#999999] text-xs">Sign in to access your dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-xs text-[#555555] mb-1.5">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2.5 border border-[#E5E5E5] rounded-md text-sm text-[#333333] placeholder-[#C5C5C5] focus:outline-none focus:border-[#F9A8C0] focus:ring-1 focus:ring-[#F9A8C0]/40 transition-all bg-white"
              autoComplete="username"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-xs text-[#555555] mb-1.5">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2.5 border border-[#E5E5E5] rounded-md text-sm text-[#333333] placeholder-[#C5C5C5] focus:outline-none focus:border-[#F9A8C0] focus:ring-1 focus:ring-[#F9A8C0]/40 transition-all bg-white"
              autoComplete="current-password"
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between pt-0.5">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-3.5 h-3.5 rounded border-[#DDDDDD] accent-[#F472B6] cursor-pointer"
              />
              <span className="text-xs text-[#777777]">Remember me</span>
            </label>
            <button
              type="button"
              className="text-xs text-[#F472B6] hover:text-[#EC4899] transition-colors"
            >
              Forgot Password?
            </button>
          </div>

          {/* Continue Button */}
          <button
            type="submit"
            className="w-full py-2.5 rounded-full text-white text-sm transition-all hover:opacity-90 active:scale-[0.98] mt-1"
            style={{
              background: 'linear-gradient(135deg, #F9A8C0 0%, #F472B6 100%)',
              boxShadow: '0 4px 14px rgba(244, 114, 182, 0.35)',
            }}
          >
            Continue
          </button>
        </form>

        {/* Hint */}
        <p className="text-center text-[10px] text-[#BBBBBB] mt-5">
          Use 'admin' or 'staff' as username
        </p>
      </div>
    </div>
  );
}
