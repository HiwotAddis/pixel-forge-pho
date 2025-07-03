import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Canvas as FabricCanvas, Rect, Textbox, Circle } from 'fabric';

interface TemplatesProps {
  canvas: FabricCanvas | null;
}

export const Templates = ({ canvas }: TemplatesProps) => {
  const templates = [
    {
      id: 1,
      name: 'Social Media Post',
      preview: 'bg-gradient-to-r from-purple-500 to-pink-500',
      create: () => createSocialMediaTemplate()
    },
    {
      id: 2,
      name: 'Business Card',
      preview: 'bg-gradient-to-r from-blue-500 to-cyan-500',
      create: () => createBusinessCardTemplate()
    },
    {
      id: 3,
      name: 'Poster',
      preview: 'bg-gradient-to-r from-green-500 to-emerald-500',
      create: () => createPosterTemplate()
    },
    {
      id: 4,
      name: 'Presentation',
      preview: 'bg-gradient-to-r from-orange-500 to-red-500',
      create: () => createPresentationTemplate()
    }
  ];

  const createSocialMediaTemplate = () => {
    if (!canvas) return;
    
    canvas.clear();
    canvas.backgroundColor = '#f0f0f0';
    canvas.renderAll();
    
    // Background
    const bg = new Rect({
      left: 0,
      top: 0,
      width: 800,
      height: 600,
      fill: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
      selectable: false
    });
    
    // Title
    const title = new Textbox('Your Title Here', {
      left: 50,
      top: 50,
      width: 700,
      fontSize: 48,
      fill: '#ffffff',
      fontFamily: 'Arial Black',
      textAlign: 'center'
    });
    
    // Subtitle
    const subtitle = new Textbox('Add your subtitle here', {
      left: 50,
      top: 150,
      width: 700,
      fontSize: 24,
      fill: '#ffffff',
      fontFamily: 'Arial',
      textAlign: 'center'
    });
    
    canvas.add(bg, title, subtitle);
  };

  const createBusinessCardTemplate = () => {
    if (!canvas) return;
    
    canvas.clear();
    canvas.backgroundColor = '#ffffff';
    canvas.renderAll();
    
    // Background
    const bg = new Rect({
      left: 0,
      top: 0,
      width: 800,
      height: 600,
      fill: '#1e3a8a',
      selectable: false
    });
    
    // Company Name
    const company = new Textbox('Your Company', {
      left: 50,
      top: 50,
      width: 700,
      fontSize: 32,
      fill: '#ffffff',
      fontFamily: 'Arial Bold'
    });
    
    // Name
    const name = new Textbox('John Doe', {
      left: 50,
      top: 120,
      width: 700,
      fontSize: 24,
      fill: '#ffffff',
      fontFamily: 'Arial'
    });
    
    canvas.add(bg, company, name);
  };

  const createPosterTemplate = () => {
    if (!canvas) return;
    
    canvas.clear();
    
    // Background
    const bg = new Rect({
      left: 0,
      top: 0,
      width: 800,
      height: 600,
      fill: '#059669',
      selectable: false
    });
    
    // Main Title
    const mainTitle = new Textbox('EVENT POSTER', {
      left: 50,
      top: 100,
      width: 700,
      fontSize: 56,
      fill: '#ffffff',
      fontFamily: 'Arial Black',
      textAlign: 'center'
    });
    
    // Decorative Circle
    const circle = new Circle({
      left: 350,
      top: 300,
      radius: 100,
      fill: 'rgba(255, 255, 255, 0.2)',
      stroke: '#ffffff',
      strokeWidth: 3
    });
    
    canvas.add(bg, mainTitle, circle);
  };

  const createPresentationTemplate = () => {
    if (!canvas) return;
    
    canvas.clear();
    
    // Background
    const bg = new Rect({
      left: 0,
      top: 0,
      width: 800,
      height: 600,
      fill: '#dc2626',
      selectable: false
    });
    
    // Title Area
    const titleBg = new Rect({
      left: 0,
      top: 0,
      width: 800,
      height: 150,
      fill: 'rgba(0, 0, 0, 0.3)',
      selectable: false
    });
    
    // Title
    const title = new Textbox('Presentation Title', {
      left: 50,
      top: 50,
      width: 700,
      fontSize: 40,
      fill: '#ffffff',
      fontFamily: 'Arial Bold',
      textAlign: 'center'
    });
    
    canvas.add(bg, titleBg, title);
  };

  return (
    <div className="p-4 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Templates</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {templates.map((template) => (
          <Card 
            key={template.id} 
            className="bg-white border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors"
            onClick={template.create}
          >
            <CardContent className="p-3">
              <div className={`w-full h-16 rounded ${template.preview} mb-2`} />
              <p className="text-sm text-gray-700 text-center">{template.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
