"use client";

import Info from "./Info";
import Participants from "./participants";
import Toolbar from "./toolbar";
import { useSelf } from "@liveblocks/react";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const info = useSelf((me) => me.info);

  console.log(info, "----");

  return (
    <main className="h-full w-full bg-neutral-100 relative touch-none">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
