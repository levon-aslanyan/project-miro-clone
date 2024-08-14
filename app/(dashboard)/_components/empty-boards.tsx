"use client";
import { useMutation } from "convex/react";
import { useOrganization } from "@clerk/nextjs";

import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

const EmptyBoards = () => {
  const { organization } = useOrganization();
  const create = useMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    create({
      orgId: organization.id,
      title: "Untitled",
    });
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/note.svg" alt="empty-search" width={110} height={110} />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <div className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </div>
      <div className="mt-6">
        <Button onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
