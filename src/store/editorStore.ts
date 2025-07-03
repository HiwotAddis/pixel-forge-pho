
import { create } from 'zustand';
import { Canvas as FabricCanvas, Object as FabricObject } from 'fabric';

interface EditorState {
  canvas: FabricCanvas | null;
  activeObject: FabricObject | null;
  activeTool: 'select' | 'text' | 'rectangle' | 'circle' | 'image' | 'ai-image';
  sidebarTab: 'templates' | 'elements' | 'uploads' | 'ai-tools';
  setCanvas: (canvas: FabricCanvas) => void;
  setActiveObject: (object: FabricObject | null) => void;
  setActiveTool: (tool: EditorState['activeTool']) => void;
  setSidebarTab: (tab: EditorState['sidebarTab']) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  canvas: null,
  activeObject: null,
  activeTool: 'select',
  sidebarTab: 'templates',
  setCanvas: (canvas) => set({ canvas }),
  setActiveObject: (object) => set({ activeObject: object }),
  setActiveTool: (tool) => set({ activeTool: tool }),
  setSidebarTab: (tab) => set({ sidebarTab: tab }),
}));
