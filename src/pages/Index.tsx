
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Image, Layers, Camera, Circle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Image className="h-8 w-8" />,
      title: "Design Templates",
      description: "Choose from thousands of professional templates"
    },
    {
      icon: <Layers className="h-8 w-8" />,
      title: "Layer Management",
      description: "Organize your design with advanced layer controls"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "AI Image Generation",
      description: "Create stunning images with AI-powered tools"
    },
    {
      icon: <Circle className="h-8 w-8" />,
      title: "Export Options",
      description: "Download in PNG, JPG, or PDF formats"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
              Phoቶ
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10"
              onClick={() => navigate('/editor')}
            >
              Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900"
              onClick={() => navigate('/editor')}
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-red-900/30 text-red-200 border-red-800">
            AI-Powered Design Tool
          </Badge>
          
          <h2 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-red-100 to-red-200 bg-clip-text text-transparent">
            Phoቶ
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Create stunning designs with our powerful AI-enhanced canvas editor. 
            Templates, layers, and intelligent tools at your fingertips.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-lg px-8 py-4"
              onClick={() => navigate('/editor')}
            >
              Start Creating
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-4"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">
            Everything You Need to Create
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <div className="text-red-400 mb-2">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 to-black/20">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of creators who trust Phoቶ for their design needs.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-lg px-8 py-4"
            onClick={() => navigate('/editor')}
          >
            Start Your Free Trial
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Phoቶ. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
