
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Canvas as FabricCanvas, FabricImage } from 'fabric';
import { Upload, Image, Camera } from "lucide-react";
import { useRef } from "react";

interface UploadsProps {
  canvas: FabricCanvas | null;
}

export const Uploads = ({ canvas }: UploadsProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !canvas) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      FabricImage.fromURL(result).then((img) => {
        img.set({
          left: 100,
          top: 100,
          scaleX: 0.5,
          scaleY: 0.5,
        });
        canvas.add(img);
        canvas.setActiveObject(img);
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="h-full bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Uploads</h2>
        
        {/* Upload Button */}
        <Button
          onClick={() => fileInputRef.current?.click()}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3"
        >
          <Upload className="h-4 w-4 mr-2" />
          Upload an image
        </Button>
        
        <Input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Recent uploads placeholder */}
        <div className="text-center py-8">
          <Image className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600 text-sm mb-2">No uploads yet</p>
          <p className="text-gray-500 text-xs">Upload images to use in your design</p>
        </div>

        {/* Stock photos section */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Stock photos</h3>
          <Button
            variant="outline"
            className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 py-3"
          >
            <Camera className="h-4 w-4 mr-2" />
            Browse stock photos
          </Button>
        </div>
      </div>
    </div>
  );
};
