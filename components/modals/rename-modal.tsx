"use client";

import { FormEventHandler, useEffect, useState } from "react";

import {
  Dialog,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "@/components//ui/dialog";

import UseRenameModal from "@/store/use-rename-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const RenameModal = () => {
  const { mutate, pending } = useApiMutation(api.board.update);

  const { isOpen, onClose, initialValue } = UseRenameModal();

  const [title, setTitle] = useState(initialValue.title);

  useEffect(() => {
    setTitle(initialValue.title);
  }, [initialValue.title]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate({
      id: initialValue.id,
      title,
    })
      .then(() => {
        toast.success("Board renamed");
        onClose();
      })
      .catch(() => {
        toast.error("Failed to rename board");
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edith board Title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Edith a new title for this board</DialogDescription>
        <form className="space-y-4" onSubmit={onSubmit}>
          <Input
            disabled={pending}
            value={title}
            required
            maxLength={60}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Board Title"
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={pending} type="submit">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModal;
