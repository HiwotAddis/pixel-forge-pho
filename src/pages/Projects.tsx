
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PreEditorSidebar } from "@/components/editor/sidebar/PreEditorSidebar";
import { useNavigate } from "react-router-dom";
import { 
  Plus, 
  FolderOpen,
  Calendar,
  Users
} from "lucide-react";

const Projects = () => {
  const navigate = useNavigate();

  const projects = [
    { name: "Instagram Campaign", type: "Social Media", date: "2 days ago", collaborators: 3 },
    { name: "Brand Presentation", type: "Presentation", date: "1 week ago", collaborators: 2 },
    { name: "Product Poster", type: "Print", date: "2 weeks ago", collaborators: 1 },
    { name: "Logo Design", type: "Brand", date: "1 month ago", collaborators: 1 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 flex">
      <PreEditorSidebar />
      
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Your Projects</h1>
              <p className="text-gray-300">Manage and organize your design projects</p>
            </div>
            <Button
              onClick={() => navigate('/editor')}
              className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-3 rounded-xl"
            >
              <Plus className="h-5 w-5 mr-2" />
              New Project
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm cursor-pointer hover:bg-white/10 transition-all duration-300 group"
                onClick={() => navigate('/editor')}
              >
                <CardContent className="p-6">
                  <div className="w-full h-40 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300" />
                  <h3 className="font-semibold text-white text-lg mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{project.type}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {project.collaborators}
                    </div>
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

export default Projects;
