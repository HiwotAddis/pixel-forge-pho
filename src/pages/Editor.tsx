
import { useState, useEffect, useRef } from "react";
import { Canvas as FabricCanvas, Circle, Rect, Textbox } from "fabric";
import { Toolbar } from "@/components/editor/Toolbar";
import { Sidebar } from "@/components/editor/Sidebar";
import { PropertiesPanel } from "@/components/editor/PropertiesPanel";
import { useEditorStore } from "@/store/editorStore";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Editor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const navigate = useNavigate();
  const { setCanvas, activeObject, setActiveObject } = useEditorStore();

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 800,
      height: 600,
      backgroundColor: "#ffffff",
    });

    canvas.on('selection:created', (e) => {
      setActiveObject(e.selected?.[0] || null);
    });

    canvas.on('selection:updated', (e) => {
      setActiveObject(e.selected?.[0] || null);
    });

    canvas.on('selection:cleared', () => {
      setActiveObject(null);
    });

    setFabricCanvas(canvas);
    setCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, [setCanvas, setActiveObject]);

  return (
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => navigate('/')}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-red-600 to-red-800 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                Phoቶ Editor
              </h1>
            </div>
          </div>
          
          <Toolbar canvas={fabricCanvas} />
        </div>
      </header>

      {/* Main Editor */}
      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <div className="w-64 border-r border-white/10 bg-black/20 backdrop-blur-sm">
          <Sidebar canvas={fabricCanvas} />
        </div>

        {/* Canvas Area */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <canvas ref={canvasRef} className="block" />
          </div>
        </div>

        {/* Right Properties Panel */}
        {activeObject && (
          <div className="w-64 border-l border-white/10 bg-black/20 backdrop-blur-sm">
            <PropertiesPanel canvas={fabricCanvas} object={activeObject} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Editor;
