import { Home, Package, TrendingUp, Sparkles, Image, Facebook, Users, Settings } from "lucide-react";
import { cn } from "./ui/utils";

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export function Sidebar({ activePage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "products", label: "Product Management", icon: Package },
    { id: "analytics", label: "Sales Analytics", icon: TrendingUp },
    { id: "ai-promotions", label: "AI Promotions", icon: Sparkles },
    { id: "poster-generator", label: "Poster Generation", icon: Image },
    { id: "facebook", label: "Facebook Automation", icon: Facebook },
    { id: "users", label: "Users & Roles", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="w-64 bg-white border-r border-[#F9E0E7]/30 h-screen fixed left-0 top-0 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-[#F9E0E7]/30">
        <h1 className="text-[#D4A373]">Bellabeatrix</h1>
        <p className="text-[#444444]/60 text-sm mt-1">Admin Dashboard</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activePage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition-all",
                isActive
                  ? "bg-gradient-to-r from-[#F9E0E7] to-[#F9E0E7]/50 text-[#D4A373]"
                  : "text-[#444444]/70 hover:bg-[#F9E0E7]/30"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#F9E0E7]/30">
        <div className="bg-[#F9E0E7]/30 rounded-xl p-4">
          <p className="text-xs text-[#444444]/70">
            Need help? Contact support
          </p>
        </div>
      </div>
    </div>
  );
}
