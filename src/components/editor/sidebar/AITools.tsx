
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Canvas as FabricCanvas, Textbox, Image as FabricImage } from 'fabric';
import { Image, Lightbulb, Wand2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface AIToolsProps {
  canvas: FabricCanvas | null;
}

export const AITools = ({ canvas }: AIToolsProps) => {
  const [imagePrompt, setImagePrompt] = useState("");
  const [textPrompt, setTextPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const generateImage = async () => {
    if (!imagePrompt.trim()) {
      toast.error("Please enter a prompt for image generation");
      return;
    }

    setIsGenerating(true);
    try {
      // Simulate AI image generation
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll use a placeholder image
      const img = new window.Image();
      img.onload = () => {
        const fabricImg = new FabricImage(img, {
          left: 100,
          top: 100,
          scaleX: 0.5,
          scaleY: 0.5
        });
        canvas?.add(fabricImg);
        canvas?.setActiveObject(fabricImg);
        toast.success("AI image generated successfully!");
      };
      img.src = `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=center`;
      
    } catch (error) {
      toast.error("Failed to generate image");
    } finally {
      setIsGenerating(false);
    }
  };

  const generateText = async () => {
    if (!textPrompt.trim()) {
      toast.error("Please enter a prompt for text generation");
      return;
    }

    setIsGenerating(true);
    try {
      // Simulate AI text generation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const generatedTexts = [
        "Unleash Your Creativity",
        "Design Like a Pro",
        "Make It Happen",
        "Your Vision, Our Tools",
        "Create Something Amazing"
      ];
      
      const randomText = generatedTexts[Math.floor(Math.random() * generatedTexts.length)];
      
      const textObj = new Textbox(randomText, {
        left: 100,
        top: 100,
        width: 300,
        fontSize: 24,
        fill: '#000000',
        fontFamily: 'Arial'
      });
      
      canvas?.add(textObj);
      canvas?.setActiveObject(textObj);
      toast.success("AI text generated successfully!");
      
    } catch (error) {
      toast.error("Failed to generate text");
    } finally {
      setIsGenerating(false);
    }
  };

  const suggestDesign = () => {
    const suggestions = [
      "Try adding a gradient background",
      "Consider using contrasting colors",
      "Add some spacing between elements",
      "Use a bold font for headings",
      "Try aligning elements to a grid"
    ];
    
    const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
    toast.info(randomSuggestion);
  };

  return (
    <div className="p-4 space-y-6">
      <h3 className="text-lg font-semibold text-white">AI Tools</h3>
      
      {/* AI Image Generation */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Image className="h-5 w-5 text-red-400" />
          <h4 className="text-sm font-medium text-white">Text to Image</h4>
        </div>
        <Input
          placeholder="Describe the image you want..."
          value={imagePrompt}
          onChange={(e) => setImagePrompt(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
        />
        <Button
          onClick={generateImage}
          disabled={isGenerating}
          className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900"
        >
          {isGenerating ? "Generating..." : "Generate Image"}
        </Button>
      </div>

      {/* AI Text Generation */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Wand2 className="h-5 w-5 text-red-400" />
          <h4 className="text-sm font-medium text-white">Magic Write</h4>
        </div>
        <Input
          placeholder="What kind of text do you need?"
          value={textPrompt}
          onChange={(e) => setTextPrompt(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
        />
        <Button
          onClick={generateText}
          disabled={isGenerating}
          className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900"
        >
          {isGenerating ? "Generating..." : "Generate Text"}
        </Button>
      </div>

      {/* Design Suggestions */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Lightbulb className="h-5 w-5 text-red-400" />
          <h4 className="text-sm font-medium text-white">Design Assistant</h4>
        </div>
        <Button
          onClick={suggestDesign}
          variant="outline"
          className="w-full border-white/20 text-white hover:bg-white/10"
        >
          Get Design Suggestion
        </Button>
      </div>
    </div>
  );
};
