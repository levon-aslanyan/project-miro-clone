"use client";

import { MousePointer2 } from "lucide-react";
import { connectionIdToColor } from "@/lib/utils";
import { memo } from "react";
import { useOther } from "@liveblocks/react";

interface CursorProps {
  connectionId: number;
}

const Cursor = memo(({ connectionId }: CursorProps) => {
  const info = useOther(connectionId, (user) => user?.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);

  const name = info?.name || "Teammate";

  console.log(info, cursor, "*********8");

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;

  return (
    <foreignObject
      style={{ transform: `translateX(${x}px) translateY(${y}px)` }}
      height={50}
      width={name.length * 5 + 24}
      className="relative drop-shadow-md"
    >
      <MousePointer2
        className="h-5 w-5"
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId),
        }}
      />

      <div
        className="absolute left-2 px-1.5 font-semibold  text-white rounded-md py-0.5 text-xs"
        style={{ backgroundColor: connectionIdToColor(connectionId) }}
      ></div>
    </foreignObject>
  );
});

Cursor.displayName = "Cursor";

export default Cursor;
