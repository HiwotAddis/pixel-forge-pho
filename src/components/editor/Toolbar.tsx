
import { Button } from "@/components/ui/button";
import { useEditorStore } from "@/store/editorStore";
import { Canvas as FabricCanvas, Textbox, Rect, Circle, Image as FabricImage } from 'fabric';
import { Square, Circle as CircleIcon, Image, Download, Upload } from "lucide-react";

interface ToolbarProps {
  canvas: FabricCanvas | null;
}

export const Toolbar = ({ canvas }: ToolbarProps) => {
  const { activeTool, setActiveTool } = useEditorStore();

  const addText = () => {
    if (!canvas) return;
    
    const text = new Textbox('Add your text here', {
      left: 100,
      top: 100,
      width: 200,
      fontSize: 20,
      fill: '#000000',
      fontFamily: 'Arial'
    });
    
    canvas.add(text);
    canvas.setActiveObject(text);
    setActiveTool('text');
  };

  const addRectangle = () => {
    if (!canvas) return;
    
    const rect = new Rect({
      left: 100,
      top: 100,
      width: 100,
      height: 100,
      fill: '#ff0000',
      stroke: '#000000',
      strokeWidth: 2
    });
    
    canvas.add(rect);
    canvas.setActiveObject(rect);
    setActiveTool('rectangle');
  };

  const addCircle = () => {
    if (!canvas) return;
    
    const circle = new Circle({
      left: 100,
      top: 100,
      radius: 50,
      fill: '#00ff00',
      stroke: '#000000',
      strokeWidth: 2
    });
    
    canvas.add(circle);
    canvas.setActiveObject(circle);
    setActiveTool('circle');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !canvas) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new window.Image();
      img.onload = () => {
        const fabricImg = new FabricImage(img, {
          left: 100,
          top: 100,
          scaleX: 0.5,
          scaleY: 0.5
        });
        canvas.add(fabricImg);
        canvas.setActiveObject(fabricImg);
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const exportCanvas = async () => {
    if (!canvas) return;
    
    const dataURL = canvas.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1
    });
    
    const link = document.createElement('a');
    link.download = 'photo-design.png';
    link.href = dataURL;
    link.click();
  };

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={activeTool === 'text' ? 'default' : 'ghost'}
        size="sm"
        onClick={addText}
        className="text-white hover:bg-white/10"
      >
        Text
      </Button>
      
      <Button
        variant={activeTool === 'rectangle' ? 'default' : 'ghost'}
        size="sm"
        onClick={addRectangle}
        className="text-white hover:bg-white/10"
      >
        <Square className="h-4 w-4" />
      </Button>
      
      <Button
        variant={activeTool === 'circle' ? 'default' : 'ghost'}
        size="sm"
        onClick={addCircle}
        className="text-white hover:bg-white/10"
      >
        <CircleIcon className="h-4 w-4" />
      </Button>
      
      <div className="relative">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <Button
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/10"
        >
          <Upload className="h-4 w-4" />
        </Button>
      </div>
      
      <Button
        variant="ghost"
        size="sm"
        onClick={exportCanvas}
        className="text-white hover:bg-white/10"
      >
        <Download className="h-4 w-4" />
      </Button>
    </div>
  );
};
