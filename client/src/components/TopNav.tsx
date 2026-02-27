import { Search, Bell, ChevronDown, Plus, LogOut, User, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "./AuthContext";
import { toast } from "sonner@2.0.3";

interface TopNavProps {
  onGeneratePromo: () => void;
}

export function TopNav({ onGeneratePromo }: TopNavProps) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully");
  };

  return (
    <div className="h-16 bg-white border-b border-[#F9E0E7]/30 fixed top-0 right-0 left-64 z-10 flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#444444]/50" />
          <input
            type="text"
            placeholder="Search products, orders, analytics..."
            className="w-full pl-10 pr-4 py-2 bg-[#F9E0E7]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#D4A373]/30"
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-4">
        {/* Quick Action Button */}
        <Button
          onClick={onGeneratePromo}
          className="bg-gradient-to-r from-[#D4A373] to-[#D4A373]/80 hover:from-[#D4A373]/90 hover:to-[#D4A373]/70 text-white rounded-lg gap-2"
        >
          <Plus className="w-4 h-4" />
          Generate Promo
        </Button>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-[#F9E0E7]/30 rounded-lg transition-all">
          <Bell className="w-5 h-5 text-[#444444]/70" />
          <Badge className="absolute -top-1 -right-1 bg-[#D4A373] text-white text-xs w-5 h-5 flex items-center justify-center p-0 rounded-full">
            3
          </Badge>
        </button>

        {/* Admin Profile */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 hover:bg-[#F9E0E7]/30 rounded-lg px-3 py-2 transition-all">
              <Avatar className="w-8 h-8">
                <AvatarImage src={user?.avatar} />
                <AvatarFallback className="bg-[#F9E0E7] text-[#D4A373]">
                  {user?.name?.charAt(0) || 'A'}
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <p className="text-sm text-[#444444]">{user?.name || 'Admin'}</p>
                <p className="text-xs text-[#444444]/60">{user?.email || 'admin@bellabeatrix.com'}</p>
              </div>
              <ChevronDown className="w-4 h-4 text-[#444444]/50" />
            </button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent align="end" className="w-56 bg-white border-[#F9E0E7]/30">
            <DropdownMenuLabel className="text-[#444444]">My Account</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-[#F9E0E7]/30" />
            
            <DropdownMenuItem className="text-[#444444]/70 cursor-pointer hover:bg-[#F9E0E7]/20">
              <User className="w-4 h-4 mr-2" />
              Profile
            </DropdownMenuItem>
            
            <DropdownMenuItem className="text-[#444444]/70 cursor-pointer hover:bg-[#F9E0E7]/20">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="bg-[#F9E0E7]/30" />
            
            <DropdownMenuItem 
              onClick={handleLogout}
              className="text-red-600 cursor-pointer hover:bg-red-50 focus:bg-red-50 focus:text-red-600"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}