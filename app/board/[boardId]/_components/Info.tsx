"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import UseRenameModal from "@/store/use-rename-modal";
import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import Hint from "@/components/hint";
import Actions from "@/components/actions";
import { Menu } from "lucide-react";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const Info = ({ boardId }: InfoProps) => {
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  const TabSeparator = () => {
    return <div className="text-neutral-300 px-1">|</div>;
  };

  const { onOpen } = UseRenameModal();

  if (!data) return <InfoSkeleton />;

  return (
    <div className="flex items-center absolute rounded-md top-2 left-2 bg-white px-1.5 h-12 shadow-md">
      <Hint lable="Go to boards" side="bottom" sideOffset={10}>
        <Button asChild variant="board" className="px-2">
          <Link href="/">
            <Image src="/logo.svg" alt="Logo" width={25} height={30} />
            <span
              className={cn(
                "font-semibold text-xl ml-2 text-black",
                font.className
              )}
            >
              Board
            </span>
          </Link>
        </Button>
      </Hint>
      <TabSeparator />
      <Hint lable="Edit title" side="bottom" sideOffset={10}>
        <Button
          variant="board"
          className="px-2 text-base font-medium"
          onClick={() => onOpen(data._id, data.title)}
        >
          {data.title}
        </Button>
      </Hint>

      <TabSeparator />
      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint lable="Main menu" side="bottom" sideOffset={10}>
            <Button variant="board" size="icon">
              <Menu />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="flex items-center absolute rounded-md top-2 left-2 bg-white px-1.5 h-12 shadow-md w-[300]px]" />
  );
};
export default Info;
