
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Canvas as FabricCanvas, Textbox } from 'fabric';
import { Type, Search, Wand2 } from "lucide-react";
import { useState } from "react";

interface TextPanelProps {
  canvas: FabricCanvas | null;
}

export const TextPanel = ({ canvas }: TextPanelProps) => {
  const [searchText, setSearchText] = useState("");

  const addTextBox = () => {
    if (!canvas) return;
    
    const text = new Textbox('Add a text box', {
      left: 100,
      top: 100,
      width: 300,
      fontSize: 24,
      fill: '#000000',
      fontFamily: 'Arial'
    });
    
    canvas.add(text);
    canvas.setActiveObject(text);
  };

  const addHeading = () => {
    if (!canvas) return;
    
    const heading = new Textbox('Add a heading', {
      left: 100,
      top: 100,
      width: 400,
      fontSize: 48,
      fill: '#000000',
      fontFamily: 'Arial',
      fontWeight: 'bold'
    });
    
    canvas.add(heading);
    canvas.setActiveObject(heading);
  };

  const addSubheading = () => {
    if (!canvas) return;
    
    const subheading = new Textbox('Add a subheading', {
      left: 100,
      top: 100,
      width: 350,
      fontSize: 32,
      fill: '#000000',
      fontFamily: 'Arial',
      fontWeight: '600'
    });
    
    canvas.add(subheading);
    canvas.setActiveObject(subheading);
  };

  const addBodyText = () => {
    if (!canvas) return;
    
    const bodyText = new Textbox('Add a little bit of body text', {
      left: 100,
      top: 100,
      width: 300,
      fontSize: 16,
      fill: '#000000',
      fontFamily: 'Arial'
    });
    
    canvas.add(bodyText);
    canvas.setActiveObject(bodyText);
  };

  return (
    <div className="h-full bg-white">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Text</h2>
        
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search fonts and combinations"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-10 bg-gray-50 border-gray-200"
          />
        </div>

        {/* Add Text Box Button */}
        <Button
          onClick={addTextBox}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 mb-3"
        >
          <Type className="h-4 w-4 mr-2" />
          Add a text box
        </Button>

        {/* Magic Write */}
        <Button
          variant="outline"
          className="w-full border-gray-200 text-gray-700 hover:bg-gray-50 py-3"
        >
          <Wand2 className="h-4 w-4 mr-2" />
          Magic Write
        </Button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-6">
        {/* Brand Kit */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-orange-500 rounded mr-2 flex items-center justify-center">
                <span className="text-white text-xs">👑</span>
              </div>
              <span className="font-medium text-gray-900">Brand Kit</span>
            </div>
            <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-700">
              Edit
            </Button>
          </div>
          <p className="text-sm text-gray-600 text-center py-8">
            Add your brand fonts
          </p>
        </div>

        {/* Default Text Styles */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Default text styles</h3>
          <div className="space-y-3">
            <Button
              variant="ghost"
              onClick={addHeading}
              className="w-full justify-start text-left h-auto p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <span className="text-2xl font-bold text-gray-900">Add a heading</span>
            </Button>
            
            <Button
              variant="ghost"
              onClick={addSubheading}
              className="w-full justify-start text-left h-auto p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <span className="text-lg font-semibold text-gray-900">Add a subheading</span>
            </Button>
            
            <Button
              variant="ghost"
              onClick={addBodyText}
              className="w-full justify-start text-left h-auto p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
            >
              <span className="text-sm text-gray-600">Add a little bit of body text</span>
            </Button>
          </div>
        </div>

        {/* Dynamic Text */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Dynamic text</h3>
          <Button
            variant="ghost"
            className="w-full justify-start text-left h-auto p-4 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-500 rounded mr-3 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <div className="font-medium text-gray-900">Page numbers</div>
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
