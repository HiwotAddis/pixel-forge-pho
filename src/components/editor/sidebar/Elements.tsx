
import { Button } from "@/components/ui/button";
import { Canvas as FabricCanvas, Circle, Rect, Polygon, Textbox } from 'fabric';
import { Square, Circle as CircleIcon, ArrowUp } from "lucide-react";

interface ElementsProps {
  canvas: FabricCanvas | null;
}

export const Elements = ({ canvas }: ElementsProps) => {
  const addShape = (type: string) => {
    if (!canvas) return;
    
    let shape;
    
    switch (type) {
      case 'rectangle':
        shape = new Rect({
          left: 100,
          top: 100,
          width: 100,
          height: 100,
          fill: '#3b82f6',
          stroke: '#1e40af',
          strokeWidth: 2
        });
        break;
      case 'circle':
        shape = new Circle({
          left: 100,
          top: 100,
          radius: 50,
          fill: '#ef4444',
          stroke: '#dc2626',
          strokeWidth: 2
        });
        break;
      case 'triangle':
        shape = new Polygon([
          { x: 0, y: -50 },
          { x: -50, y: 50 },
          { x: 50, y: 50 }
        ], {
          left: 150,
          top: 150,
          fill: '#10b981',
          stroke: '#059669',
          strokeWidth: 2
        });
        break;
      default:
        return;
    }
    
    canvas.add(shape);
    canvas.setActiveObject(shape);
  };

  const shapes = [
    { type: 'rectangle', icon: <Square className="h-6 w-6" />, name: 'Rectangle' },
    { type: 'circle', icon: <CircleIcon className="h-6 w-6" />, name: 'Circle' },
    { type: 'triangle', icon: <ArrowUp className="h-6 w-6" />, name: 'Triangle' }
  ];

  const colors = [
    '#000000', '#ffffff', '#3b82f6', '#ef4444', '#10b981', '#f59e0b',
    '#8b5cf6', '#ec4899', '#06b6d4', '#84cc16', '#f97316', '#6366f1'
  ];

  return (
    <div className="p-4 space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Shapes</h3>
        <div className="grid grid-cols-2 gap-2">
          {shapes.map((shape) => (
            <Button
              key={shape.type}
              variant="ghost"
              className="h-16 flex flex-col items-center justify-center text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              onClick={() => addShape(shape.type)}
            >
              {shape.icon}
              <span className="text-xs mt-1">{shape.name}</span>
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Colors</h3>
        <div className="grid grid-cols-6 gap-2">
          {colors.map((color) => (
            <div
              key={color}
              className="w-8 h-8 rounded-full cursor-pointer border-2 border-gray-200 hover:border-gray-400"
              style={{ backgroundColor: color }}
              onClick={() => {
                const activeObject = canvas?.getActiveObject();
                if (activeObject) {
                  activeObject.set('fill', color);
                  canvas?.renderAll();
                }
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
