
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Canvas as FabricCanvas, Object as FabricObject } from 'fabric';
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

interface PropertiesPanelProps {
  canvas: FabricCanvas | null;
  object: FabricObject | null;
}

export const PropertiesPanel = ({ canvas, object }: PropertiesPanelProps) => {
  const [properties, setProperties] = useState({
    fill: '#000000',
    stroke: '#000000',
    strokeWidth: 1,
    opacity: 1,
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    angle: 0
  });

  useEffect(() => {
    if (!object) return;

    setProperties({
      fill: (object.fill as string) || '#000000',
      stroke: (object.stroke as string) || '#000000',
      strokeWidth: object.strokeWidth || 1,
      opacity: object.opacity || 1,
      left: Math.round(object.left || 0),
      top: Math.round(object.top || 0),
      width: Math.round(object.width || 0),
      height: Math.round(object.height || 0),
      angle: Math.round(object.angle || 0)
    });
  }, [object]);

  const updateProperty = (key: string, value: any) => {
    if (!object || !canvas) return;

    object.set(key, value);
    canvas.renderAll();
    
    setProperties(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const deleteObject = () => {
    if (!object || !canvas) return;
    
    canvas.remove(object);
    canvas.discardActiveObject();
    canvas.renderAll();
  };

  if (!object) return null;

  return (
    <div className="p-4 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">Properties</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={deleteObject}
          className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {/* Fill Color */}
        <div className="space-y-2">
          <Label className="text-white">Fill Color</Label>
          <div className="flex space-x-2">
            <Input
              type="color"
              value={properties.fill}
              onChange={(e) => updateProperty('fill', e.target.value)}
              className="w-12 h-8 p-0 border-0"
            />
            <Input
              type="text"
              value={properties.fill}
              onChange={(e) => updateProperty('fill', e.target.value)}
              className="flex-1 bg-white/5 border-white/10 text-white"
            />
          </div>
        </div>

        {/* Stroke Color */}
        <div className="space-y-2">
          <Label className="text-white">Stroke Color</Label>
          <div className="flex space-x-2">
            <Input
              type="color"
              value={properties.stroke}
              onChange={(e) => updateProperty('stroke', e.target.value)}
              className="w-12 h-8 p-0 border-0"
            />
            <Input
              type="text"
              value={properties.stroke}
              onChange={(e) => updateProperty('stroke', e.target.value)}
              className="flex-1 bg-white/5 border-white/10 text-white"
            />
          </div>
        </div>

        {/* Stroke Width */}
        <div className="space-y-2">
          <Label className="text-white">Stroke Width</Label>
          <Input
            type="number"
            value={properties.strokeWidth}
            onChange={(e) => updateProperty('strokeWidth', parseInt(e.target.value))}
            className="bg-white/5 border-white/10 text-white"
          />
        </div>

        {/* Opacity */}
        <div className="space-y-2">
          <Label className="text-white">Opacity</Label>
          <Input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={properties.opacity}
            onChange={(e) => updateProperty('opacity', parseFloat(e.target.value))}
            className="bg-white/5 border-white/10"
          />
        </div>

        {/* Position */}
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label className="text-white">X</Label>
            <Input
              type="number"
              value={properties.left}
              onChange={(e) => updateProperty('left', parseInt(e.target.value))}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-white">Y</Label>
            <Input
              type="number"
              value={properties.top}
              onChange={(e) => updateProperty('top', parseInt(e.target.value))}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
        </div>

        {/* Size */}
        <div className="grid grid-cols-2 gap-2">
          <div className="space-y-2">
            <Label className="text-white">Width</Label>
            <Input
              type="number"
              value={properties.width}
              onChange={(e) => updateProperty('width', parseInt(e.target.value))}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-white">Height</Label>
            <Input
              type="number"
              value={properties.height}
              onChange={(e) => updateProperty('height', parseInt(e.target.value))}
              className="bg-white/5 border-white/10 text-white"
            />
          </div>
        </div>

        {/* Rotation */}
        <div className="space-y-2">
          <Label className="text-white">Rotation</Label>
          <Input
            type="range"
            min="0"
            max="360"
            value={properties.angle}
            onChange={(e) => updateProperty('angle', parseInt(e.target.value))}
            className="bg-white/5 border-white/10"
          />
        </div>
      </div>
    </div>
  );
};
