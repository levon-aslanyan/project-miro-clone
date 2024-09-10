import { Skeleton } from "@/components/ui/skeleton";
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

const Toolbar = () => {
  return (
    <div className="flex flex-col gap-y-4 absolute  top-[50%] -translate-y-[50%] left-2">
      <div className="bg-white rounded-md p-1.5  flex flex-col items-center gap-y-4 shadow-md">
        <ToolButton
          label="Select"
          onClick={() => {}}
          icon={MousePointer2}
          isActive={false}
        />
        <ToolButton
          label="Text"
          onClick={() => {}}
          icon={Type}
          isActive={false}
        />
        <ToolButton
          label="Sticky Note"
          onClick={() => {}}
          icon={StickyNote}
          isActive={false}
        />
        <ToolButton
          label="Rectangle"
          onClick={() => {}}
          icon={Square}
          isActive={false}
        />
        <ToolButton
          label="Elipse"
          onClick={() => {}}
          icon={Circle}
          isActive={false}
        />
        <ToolButton
          label="Pen"
          onClick={() => {}}
          icon={Pencil}
          isActive={false}
        />
      </div>

      <div className="bg-white rounded-md p-1.5  flex flex-col items-center shadow-md">
        <ToolButton
          label="Undo"
          onClick={() => {}}
          icon={Undo2}
          isDisabled={true}
        />
        <ToolButton
          label="Redo"
          onClick={() => {}}
          icon={Redo2}
          isDisabled={true}
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
