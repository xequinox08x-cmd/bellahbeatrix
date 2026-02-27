import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { TopNav } from "./components/TopNav";
import { Dashboard } from "./components/Dashboard";
import { AIAnalysis } from "./components/AIAnalysis";
import { PosterGenerator } from "./components/PosterGenerator";
import { FacebookAutomation } from "./components/FacebookAutomation";
import { Settings } from "./components/Settings";
import { Login } from "./components/Login";
import { AuthProvider, useAuth } from "./components/AuthContext";
import { Toaster } from "./components/ui/sonner";

function AppContent() {
  const [activePage, setActivePage] = useState("dashboard");
  const { isAuthenticated } = useAuth();

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <Login />;
  }

  const handleGeneratePromo = () => {
    setActivePage("poster-generator");
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <p className="text-[#444444]/60">Product Management page coming soon...</p>
            </div>
          </div>
        );
      case "analytics":
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <p className="text-[#444444]/60">Sales Analytics page coming soon...</p>
            </div>
          </div>
        );
      case "ai-promotions":
        return <AIAnalysis onGeneratePoster={handleGeneratePromo} />;
      case "poster-generator":
        return <PosterGenerator />;
      case "facebook":
        return <FacebookAutomation />;
      case "users":
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <p className="text-[#444444]/60">Users & Roles page coming soon...</p>
            </div>
          </div>
        );
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#F9E0E7]/10 to-white">
      {/* Sidebar */}
      <Sidebar activePage={activePage} onPageChange={setActivePage} />

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Navigation */}
        <TopNav onGeneratePromo={handleGeneratePromo} />

        {/* Page Content */}
        <main className="pt-16 p-6">
          <div className="max-w-7xl mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>

      {/* Toast Notifications */}
      <Toaster />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}