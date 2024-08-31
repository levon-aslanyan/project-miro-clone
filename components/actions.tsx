"use client";

import { DropdownMenuContentProps } from "@radix-ui/react-dropdown-menu";
import { toast } from "sonner";
import { Ghost, Link2, Pencil, Trash2 } from "lucide-react";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import ConfrimModal from "./confrim-modal";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import RenameModal from "./modals/rename-modal";
import { UseRenameModal } from "@/store/use-rename-modal";

interface ActionsProps {
  children: React.ReactNode;
  side?: DropdownMenuContentProps["side"];
  sideOffset?: DropdownMenuContentProps["sideOffset"];
  id: string;
  title: string;
}

const Actions = ({ children, side, sideOffset, id, title }: ActionsProps) => {
  const { onOpen } = UseRenameModal();
  const { mutate, pending } = useApiMutation(api.board.remove);

  const copyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success("Link copied"))
      .catch(() => toast.error("Failed to copy link"));
  };

  const onDelete = () => {
    mutate({ id })
      .then(() => toast.success("Board delete"))
      .catch(() => toast.error("Failed to delete board"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        onClick={(e) => {
          e.preventDefault();
        }}
        side={side}
        sideOffset={sideOffset}
        className="w-60  z-50"
      >
        <DropdownMenuItem
          onClick={(e) => {
            e.preventDefault();
            copyLink();
          }}
          className="cursor-pointer p-3 text-sm w-full justify-start font-normal"
        >
          <Link2 className="h-4 w-4 mr-2" />
          Copy board Link
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onOpen(id, title)}
          className="cursor-pointer p-3 text-sm w-full justify-start font-normal"
        >
          <Pencil className="h-4 w-4 mr-2" />
          <RenameModal />
          Rename
        </DropdownMenuItem>

        <ConfrimModal
          disabled={pending}
          header="Delete board?"
          description="This will delete the board and all of its contents"
          onConfrim={onDelete}
        >
          <Button
            variant="ghost"
            className="cursor-pointer p-3 text-sm w-full justify-start font-normal"
          >
            <Trash2 className=" h-4 w-4 mr-2" />
            Delete
          </Button>
        </ConfrimModal>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
