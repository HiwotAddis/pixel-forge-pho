
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PreEditorSidebar } from "@/components/editor/sidebar/PreEditorSidebar";
import { useNavigate } from "react-router-dom";
import { 
  Plus,
  Palette,
  Type,
  Upload,
  Crown
} from "lucide-react";

const Brand = () => {
  const navigate = useNavigate();

  const brandColors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7", "#DDA0DD", "#98D8C8", "#F7DC6F"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex">
      <PreEditorSidebar />
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center mb-2">
                <Crown className="h-8 w-8 text-yellow-500 mr-3" />
                <h1 className="text-4xl font-bold text-white">Brand Kit</h1>
              </div>
              <p className="text-gray-300">Manage your brand colors, fonts, and logos</p>
            </div>
            <Button
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-3 rounded-xl font-medium"
            >
              <Crown className="h-5 w-5 mr-2" />
              Upgrade to Pro
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Brand Colors */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Palette className="h-6 w-6 text-purple-400 mr-3" />
                    <h2 className="text-xl font-semibold text-white">Brand Colors</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-400 hover:text-white hover:bg-white/10"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Color
                  </Button>
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {brandColors.map((color, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg cursor-pointer hover:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Brand Fonts */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Type className="h-6 w-6 text-blue-400 mr-3" />
                    <h2 className="text-xl font-semibold text-white">Brand Fonts</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-blue-400 hover:text-white hover:bg-white/10"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Font
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Inter' }}>Inter</h3>
                    <p className="text-gray-400 text-sm">Primary font for headings</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <h3 className="text-white text-lg mb-1" style={{ fontFamily: 'system-ui' }}>System UI</h3>
                    <p className="text-gray-400 text-sm">Secondary font for body text</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Brand Logos */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm lg:col-span-2">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <Upload className="h-6 w-6 text-green-400 mr-3" />
                    <h2 className="text-xl font-semibold text-white">Brand Logos</h2>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-green-400 hover:text-white hover:bg-white/10"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Upload Logo
                  </Button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="aspect-square bg-white/5 rounded-lg border-2 border-dashed border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors">
                    <div className="text-center">
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-400 text-sm">Upload Logo</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
