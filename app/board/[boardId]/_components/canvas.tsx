"use client";
import { useCallback, useState } from "react";

import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import {
  useCanRedo,
  useCanUndo,
  useHistory,
  useMutation,
} from "@liveblocks/react";
import { pointerEventToCanvasPoint } from "@/lib/utils";

import Info from "./Info";
import Participants from "./participants";
import Toolbar from "./toolbar";
import CursorsPresence from "./cursors-presence";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

  const history = useHistory();
  const canRedo = useCanRedo();
  const canUndo = useCanUndo();

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pointerEventToCanvasPoint(e, camera);

      setMyPresence({ cursor: current });
    },
    []
  );

  return (
    <main className="h-full w-full bg-neutral-100 relative touch-none">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        canRedo={canRedo}
        canUndo={canUndo}
        redo={history.redo}
        undo={history.undo}
      />

      <svg
        className="h-[100vh] w-[100vh]"
        onWheel={onWheel}
        onPointerMove={onPointerMove}
      >
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};

export default Canvas;
