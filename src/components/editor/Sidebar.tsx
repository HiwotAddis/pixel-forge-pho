
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/editorStore";
import { Canvas as FabricCanvas } from 'fabric';
import { Templates } from "./sidebar/Templates";
import { Elements } from "./sidebar/Elements";
import { Uploads } from "./sidebar/Uploads";
import { AITools } from "./sidebar/AITools";

interface SidebarProps {
  canvas: FabricCanvas | null;
}

export const Sidebar = ({ canvas }: SidebarProps) => {
  const { sidebarTab, setSidebarTab } = useEditorStore();

  const tabs = [
    { id: 'templates', label: 'Templates' },
    { id: 'elements', label: 'Elements' },
    { id: 'uploads', label: 'Uploads' },
    { id: 'ai-tools', label: 'AI Tools' }
  ] as const;

  const renderTabContent = () => {
    switch (sidebarTab) {
      case 'templates':
        return <Templates canvas={canvas} />;
      case 'elements':
        return <Elements canvas={canvas} />;
      case 'uploads':
        return <Uploads canvas={canvas} />;
      case 'ai-tools':
        return <AITools canvas={canvas} />;
      default:
        return <Templates canvas={canvas} />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Tab Navigation */}
      <div className="border-b border-white/10 p-4">
        <div className="grid grid-cols-2 gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={sidebarTab === tab.id ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setSidebarTab(tab.id)}
              className="text-xs text-white hover:bg-white/10"
            >
              {tab.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="flex-1 overflow-y-auto">
        {renderTabContent()}
      </div>
    </div>
  );
};
