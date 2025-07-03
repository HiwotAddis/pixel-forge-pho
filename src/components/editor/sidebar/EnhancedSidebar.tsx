
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/editorStore";
import { Canvas as FabricCanvas } from 'fabric';
import { Templates } from "./Templates";
import { Elements } from "./Elements";
import { Uploads } from "./Uploads";
import { EnhancedAITools } from "./EnhancedAITools";
import { TextPanel } from "./TextPanel";
import { 
  FileImage, 
  Shapes, 
  Type, 
  Crown, 
  Upload, 
  Sparkles,
  ArrowLeft 
} from "lucide-react";

interface EnhancedSidebarProps {
  canvas: FabricCanvas | null;
}

export const EnhancedSidebar = ({ canvas }: EnhancedSidebarProps) => {
  const { sidebarTab, setSidebarTab } = useEditorStore();

  const tabs = [
    { id: 'templates', label: 'Design', icon: FileImage },
    { id: 'elements', label: 'Elements', icon: Shapes },
    { id: 'text', label: 'Text', icon: Type },
    { id: 'brand', label: 'Brand', icon: Crown, hasBadge: true },
    { id: 'uploads', label: 'Uploads', icon: Upload },
    { id: 'ai-tools', label: 'Magic Studio', icon: Sparkles }
  ] as const;

  const renderTabContent = () => {
    switch (sidebarTab) {
      case 'templates':
        return <Templates canvas={canvas} />;
      case 'elements':
        return <Elements canvas={canvas} />;
      case 'text':
        return <TextPanel canvas={canvas} />;
      case 'uploads':
        return <Uploads canvas={canvas} />;
      case 'ai-tools':
        return <EnhancedAITools canvas={canvas} />;
      default:
        return <Templates canvas={canvas} />;
    }
  };

  return (
    <div className="flex h-full">
      {/* Left Tab Bar */}
      <div className="w-20 bg-gradient-to-b from-gray-900 to-black border-r border-white/10 flex flex-col items-center py-4">
        <div className="flex flex-col space-y-2 flex-1">
          {tabs.map((tab) => (
            <div key={tab.id} className="relative group">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSidebarTab(tab.id)}
                className={`
                  w-12 h-12 rounded-xl transition-all duration-200 relative flex flex-col items-center justify-center
                  ${sidebarTab === tab.id 
                    ? 'bg-white/10 text-white border border-white/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }
                `}
              >
                <tab.icon className="h-4 w-4 mb-1" />
                <span className="text-xs">{tab.label}</span>
                {tab.hasBadge && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full" />
                )}
              </Button>
              
              {/* Tooltip */}
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {tab.label}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-800 rotate-45" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content Panel */}
      <div className="w-80 bg-white border-r border-gray-200 overflow-hidden">
        {renderTabContent()}
      </div>
    </div>
  );
};
