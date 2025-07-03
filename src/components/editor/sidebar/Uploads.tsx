
import { Button } from "@/components/ui/button";
import { Canvas as FabricCanvas, Image as FabricImage } from 'fabric';
import { Upload, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

interface UploadsProps {
  canvas: FabricCanvas | null;
}

export const Uploads = ({ canvas }: UploadsProps) => {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setUploadedImages(prev => [...prev, imageUrl]);
      };
      reader.readAsDataURL(file);
    });
  };

  const addImageToCanvas = (imageUrl: string) => {
    if (!canvas) return;

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
    img.src = imageUrl;
  };

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-semibold text-white">Uploads</h3>
      
      <div className="relative">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
        <Button 
          variant="outline" 
          className="w-full h-32 border-dashed border-white/20 text-white hover:bg-white/10 flex flex-col items-center justify-center"
        >
          <Upload className="h-8 w-8 mb-2" />
          <span>Click to upload images</span>
          <span className="text-xs text-gray-400">PNG, JPG, GIF up to 10MB</span>
        </Button>
      </div>

      {uploadedImages.length > 0 && (
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-white">Your Images</h4>
          <div className="grid grid-cols-2 gap-2">
            {uploadedImages.map((imageUrl, index) => (
              <div
                key={index}
                className="relative aspect-square bg-white/5 rounded-lg overflow-hidden cursor-pointer hover:bg-white/10"
                onClick={() => addImageToCanvas(imageUrl)}
              >
                <img
                  src={imageUrl}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
