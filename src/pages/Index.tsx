
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PreEditorSidebar } from "@/components/editor/sidebar/PreEditorSidebar";
import { useNavigate } from "react-router-dom";
import { 
  Plus, 
  Sparkles, 
  Users, 
  Star,
  ArrowRight,
  Play
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const templates = [
    { name: "Instagram Post", size: "1080 × 1080 px", bg: "bg-gradient-to-br from-pink-500 to-purple-600" },
    { name: "Presentation", size: "1920 × 1080 px", bg: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { name: "Logo", size: "500 × 500 px", bg: "bg-gradient-to-br from-green-500 to-emerald-500" },
    { name: "Poster", size: "2480 × 3508 px", bg: "bg-gradient-to-br from-orange-500 to-red-500" },
    { name: "Business Card", size: "1050 × 600 px", bg: "bg-gradient-to-br from-indigo-500 to-purple-500" },
    { name: "Resume", size: "2480 × 3508 px", bg: "bg-gradient-to-br from-gray-600 to-gray-800" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex">
      {/* Pre-Editor Sidebar */}
      <PreEditorSidebar />
      
      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-800 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-red-200 to-red-400 bg-clip-text text-transparent">
                Phoቶ
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Design anything. Publish anywhere. Create stunning visuals with our powerful AI-powered design platform.
            </p>
            
            {/* Action Buttons */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <Button
                onClick={() => navigate('/editor')}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg rounded-xl"
              >
                <Plus className="h-5 w-5 mr-2" />
                Create a design
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch tutorial
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
                <p className="text-gray-300">Generate images, remove backgrounds, and enhance your designs with cutting-edge AI technology.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Collaborative</h3>
                <p className="text-gray-300">Work together in real-time with your team to create amazing designs that stand out.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
                <p className="text-gray-300">Access thousands of templates, fonts, and design elements to create professional-quality designs.</p>
              </CardContent>
            </Card>
          </div>

          {/* Templates Section */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">Start designing</h2>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10"
              >
                See all templates
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {templates.map((template, index) => (
                <Card 
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-all duration-300 group"
                  onClick={() => navigate('/editor')}
                >
                  <CardContent className="p-4">
                    <div className={`w-full h-32 rounded-lg ${template.bg} mb-3 group-hover:scale-105 transition-transform duration-300`} />
                    <h3 className="font-medium text-white text-sm mb-1">{template.name}</h3>
                    <p className="text-gray-400 text-xs">{template.size}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-16">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to create?</h2>
            <p className="text-xl text-gray-300 mb-8">Join millions of users creating stunning designs with Phoቶ</p>
            <Button
              onClick={() => navigate('/editor')}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-12 py-4 text-lg rounded-xl"
            >
              Get started for free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
