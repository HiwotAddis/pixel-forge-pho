
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Plus, 
  Home, 
  FolderOpen, 
  FileImage, 
  Crown, 
  Sparkles, 
  Grid2X2,
  Bell 
} from "lucide-react";

export const PreEditorSidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { 
      icon: Plus, 
      label: "Create", 
      action: () => navigate('/editor'),
      isPrimary: true 
    },
    { icon: Home, label: "Home", action: () => navigate('/') },
    { icon: FolderOpen, label: "Projects", action: () => {} },
    { icon: FileImage, label: "Templates", action: () => {} },
    { 
      icon: Crown, 
      label: "Brand", 
      action: () => {},
      hasBadge: true 
    },
    { 
      icon: Sparkles, 
      label: "Canva AI", 
      action: () => navigate('/editor?tab=ai-tools') 
    },
    { icon: Grid2X2, label: "Apps", action: () => {} },
  ];

  return (
    <div className="w-20 bg-gradient-to-b from-gray-900 to-black border-r border-white/10 flex flex-col items-center py-6 space-y-4">
      {/* Logo */}
      <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-red-800 rounded-xl flex items-center justify-center mb-6">
        <span className="text-white font-bold text-lg">P</span>
      </div>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <div key={index} className="relative group">
          <Button
            variant="ghost"
            size="icon"
            onClick={item.action}
            className={`
              w-12 h-12 rounded-xl transition-all duration-200 relative
              ${item.isPrimary 
                ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
              }
            `}
          >
            <item.icon className="h-5 w-5" />
            {item.hasBadge && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full" />
            )}
          </Button>
          
          {/* Tooltip */}
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
            {item.label}
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45" />
          </div>
        </div>
      ))}

      {/* Notification */}
      <div className="mt-auto">
        <Button
          variant="ghost"
          size="icon"
          className="w-12 h-12 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
        >
          <Bell className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
