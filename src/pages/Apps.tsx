
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PreEditorSidebar } from "@/components/editor/sidebar/PreEditorSidebar";
import { 
  Grid2X2,
  Sparkles,
  Image,
  Video,
  Music,
  FileText,
  QrCode,
  Zap
} from "lucide-react";

const Apps = () => {
  const apps = [
    { name: "Background Remover", icon: Image, description: "Remove backgrounds from images instantly", category: "AI Tools" },
    { name: "Video Editor", icon: Video, description: "Edit and enhance your videos", category: "Video" },
    { name: "QR Code Generator", icon: QrCode, description: "Create custom QR codes for your business", category: "Utilities" },
    { name: "Music Visualizer", icon: Music, description: "Generate visual music representations", category: "Audio" },
    { name: "Text to Speech", icon: FileText, description: "Convert text to natural speech", category: "AI Tools" },
    { name: "Image Enhancer", icon: Sparkles, description: "Enhance image quality with AI", category: "AI Tools" },
    { name: "Auto Animator", icon: Zap, description: "Automatically animate your designs", category: "Animation" },
    { name: "Color Palette", icon: Grid2X2, description: "Generate beautiful color palettes", category: "Design" },
  ];

  const categories = ["All", "AI Tools", "Video", "Audio", "Utilities", "Design", "Animation"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex">
      <PreEditorSidebar />
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <Grid2X2 className="h-8 w-8 text-purple-400 mr-3" />
              <h1 className="text-4xl font-bold text-white">Apps</h1>
            </div>
            <p className="text-gray-300">Extend your design capabilities with powerful apps and tools</p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                className="text-gray-300 hover:text-white hover:bg-white/10 rounded-full px-4 py-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {apps.map((app, index) => (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <app.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">{app.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{app.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-purple-400 bg-purple-400/20 px-2 py-1 rounded-full">
                      {app.category}
                    </span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white"
                    >
                      Install
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apps;
