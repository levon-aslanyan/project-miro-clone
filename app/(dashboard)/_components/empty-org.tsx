import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { CreateOrganization } from "@clerk/nextjs";
import { DialogContent } from "@radix-ui/react-dialog";
import Image from "next/image";
import React from "react";

type Props = {};

const EmptyOrg = (props: Props) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src="/elements.png" alt="empty" height={200} width={200} />
      <h2 className="font-semibold text-2xl mt-6">Welcome to Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an organization to get started
      </p>

      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create an organization</Button>
          </DialogTrigger>
          <DialogContent>
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
