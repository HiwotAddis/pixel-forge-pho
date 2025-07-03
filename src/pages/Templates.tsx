
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PreEditorSidebar } from "@/components/editor/sidebar/PreEditorSidebar";
import { useNavigate } from "react-router-dom";
import { 
  Search,
  Filter,
  Star
} from "lucide-react";

const Templates = () => {
  const navigate = useNavigate();

  const categories = [
    "All", "Social Media", "Presentations", "Logos", "Posters", "Business Cards", "Flyers", "Brochures"
  ];

  const templates = [
    { name: "Instagram Story", category: "Social Media", premium: false, bg: "bg-gradient-to-br from-pink-500 to-purple-600" },
    { name: "Business Presentation", category: "Presentations", premium: true, bg: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { name: "Modern Logo", category: "Logos", premium: false, bg: "bg-gradient-to-br from-green-500 to-emerald-500" },
    { name: "Event Poster", category: "Posters", premium: true, bg: "bg-gradient-to-br from-orange-500 to-red-500" },
    { name: "Corporate Card", category: "Business Cards", premium: false, bg: "bg-gradient-to-br from-indigo-500 to-purple-500" },
    { name: "Product Flyer", category: "Flyers", premium: false, bg: "bg-gradient-to-br from-yellow-500 to-orange-500" },
    { name: "Travel Brochure", category: "Brochures", premium: true, bg: "bg-gradient-to-br from-teal-500 to-blue-500" },
    { name: "Food Menu", category: "Menus", premium: false, bg: "bg-gradient-to-br from-red-500 to-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex">
      <PreEditorSidebar />
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Templates</h1>
            <p className="text-gray-300">Choose from thousands of professional templates</p>
          </div>

          {/* Search and Filter */}
          <div className="flex items-center space-x-4 mb-8">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search templates..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-6 py-3 rounded-xl"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
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

          {/* Templates Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {templates.map((template, index) => (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-all duration-300 group relative"
                onClick={() => navigate('/editor')}
              >
                <CardContent className="p-4">
                  <div className={`w-full h-48 rounded-lg ${template.bg} mb-3 group-hover:scale-105 transition-transform duration-300 relative`}>
                    {template.premium && (
                      <div className="absolute top-2 right-2 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-medium flex items-center">
                        <Star className="h-3 w-3 mr-1" />
                        PRO
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-white text-sm mb-1">{template.name}</h3>
                  <p className="text-gray-400 text-xs">{template.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
