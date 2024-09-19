import { CanvasMode, CanvasState, LayerType } from "@/types/canvas";
import ToolButton from "./tool-button";
import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2,
} from "lucide-react";

interface ToolBarProps {
  canvasState: CanvasState;
  setCanvasState: (newState: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

const Toolbar = ({
  canvasState,
  setCanvasState,
  undo,
  redo,
  canRedo,
  canUndo,
}: ToolBarProps) => {
  return (
    <div className="flex flex-col gap-y-4 absolute  top-[50%] -translate-y-[50%] left-2">
      <div className="bg-white rounded-md p-1.5  flex flex-col items-center gap-y-4 shadow-md">
        <ToolButton
          label="Select"
          onClick={() => setCanvasState({ mode: CanvasMode.None })}
          icon={MousePointer2}
          isActive={
            canvasState.mode === CanvasMode.None ||
            canvasState.mode === CanvasMode.Translating ||
            canvasState.mode === CanvasMode.SelectionNet ||
            canvasState.mode === CanvasMode.Pressing ||
            canvasState.mode === CanvasMode.Resizing
          }
        />
        <ToolButton
          label="Text"
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text,
            })
          }
          icon={Type}
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
        />
        <ToolButton
          label="Sticky Note"
          icon={StickyNote}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Note
          }
        />
        <ToolButton
          label="Rectangle"
          icon={Square}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Rectangle,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
        />
        <ToolButton
          label="Elipse"
          icon={Circle}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellipse,
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Ellipse
          }
        />
        <ToolButton
          label="Pen"
          icon={Pencil}
          onClick={() => setCanvasState({ mode: CanvasMode.Pencil })}
          isActive={canvasState.mode === CanvasMode.Pencil}
        />
      </div>

      <div className="bg-white rounded-md p-1.5  flex flex-col items-center shadow-md">
        <ToolButton
          label="Undo"
          onClick={undo}
          icon={Undo2}
          isDisabled={!canUndo}
        />
        <ToolButton
          label="Redo"
          onClick={redo}
          icon={Redo2}
          isDisabled={!canRedo}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-4 absolute shadow-md rounded-md  top-[50%] -translate-y-[50%] left-2 bg-white w-[51px] h-[360px]" />
  );
};

export default Toolbar;
