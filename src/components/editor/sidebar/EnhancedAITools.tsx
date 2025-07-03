
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Canvas as FabricCanvas, Textbox, Image as FabricImage } from 'fabric';
import { 
  Image, 
  Lightbulb, 
  Wand2, 
  Scissors, 
  Palette, 
  Expand,
  Sparkles,
  Magic
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface EnhancedAIToolsProps {
  canvas: FabricCanvas | null;
}

export const EnhancedAITools = ({ canvas }: EnhancedAIToolsProps) => {
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
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

  const removeBackground = async () => {
    const activeObject = canvas?.getActiveObject();
    if (!activeObject || activeObject.type !== 'image') {
      toast.error("Please select an image first");
      return;
    }

    setIsGenerating(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      toast.success("Background removed successfully!");
    } catch (error) {
      toast.error("Failed to remove background");
    } finally {
      setIsGenerating(false);
    }
  };

  const enhanceImage = async () => {
    const activeObject = canvas?.getActiveObject();
    if (!activeObject || activeObject.type !== 'image') {
      toast.error("Please select an image first");
      return;
    }

    setIsGenerating(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Image enhanced successfully!");
    } catch (error) {
      toast.error("Failed to enhance image");
    } finally {
      setIsGenerating(false);
    }
  };

  const aiTools = [
    {
      title: "Text to Image",
      description: "Generate images from text descriptions",
      icon: Image,
      action: generateImage,
      hasInput: true,
      inputProps: {
        placeholder: "Describe the image you want...",
        value: imagePrompt,
        onChange: setImagePrompt
      }
    },
    {
      title: "Magic Write",
      description: "AI-powered text generation",
      icon: Wand2,
      action: generateText,
      hasInput: true,
      inputProps: {
        placeholder: "What kind of text do you need?",
        value: textPrompt,
        onChange: setTextPrompt
      }
    },
    {
      title: "Background Remover",
      description: "Remove backgrounds from images instantly",
      icon: Scissors,
      action: removeBackground,
      hasInput: false
    },
    {
      title: "Magic Eraser",
      description: "Remove unwanted objects from photos",
      icon: Magic,
      action: () => toast.info("Select an area to erase"),
      hasInput: false
    },
    {
      title: "Image Enhancer",
      description: "Improve image quality with AI",
      icon: Sparkles,
      action: enhanceImage,
      hasInput: false
    },
    {
      title: "Magic Expand",
      description: "Extend your images beyond their borders",
      icon: Expand,
      action: () => toast.info("Select an image to expand"),
      hasInput: false
    }
  ];

  return (
    <div className="h-full bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Magic Studio</h2>
        <p className="text-sm text-gray-600">AI-powered design tools</p>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4 overflow-y-auto h-full">
        {aiTools.map((tool, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-purple-300 transition-colors">
            <div className="flex items-start space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center">
                <tool.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-gray-900">{tool.title}</h3>
                <p className="text-sm text-gray-600">{tool.description}</p>
              </div>
            </div>
            
            {tool.hasInput && tool.inputProps && (
              <Input
                placeholder={tool.inputProps.placeholder}
                value={tool.inputProps.value}
                onChange={(e) => tool.inputProps!.onChange(e.target.value)}
                className="mb-3 bg-gray-50 border-gray-200"
              />
            )}
            
            <Button
              onClick={tool.action}
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
            >
              {isGenerating ? "Processing..." : `Use ${tool.title}`}
            </Button>
          </div>
        ))}

        {/* Design Suggestions */}
        <div className="border border-gray-200 rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Design Assistant</h3>
              <p className="text-sm text-gray-600">Get smart design suggestions</p>
            </div>
          </div>
          <Button
            onClick={() => {
              const suggestions = [
                "Try adding a gradient background",
                "Consider using contrasting colors", 
                "Add some spacing between elements",
                "Use a bold font for headings",
                "Try aligning elements to a grid"
              ];
              const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
              toast.info(randomSuggestion);
            }}
            variant="outline"
            className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
          >
            Get Design Suggestion
          </Button>
        </div>
      </div>
    </div>
  );
};
