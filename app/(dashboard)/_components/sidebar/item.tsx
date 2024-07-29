"use client";

import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Hint from "@/components/hint";

interface ItemProps {
  id: string;
  name: string;
  imageUrl: string;
}

const Item = ({ id, name, imageUrl }: ItemProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;
    setActive({ organization: id });
  };
  return (
    <div className="aspect-square relative ">
      <Hint lable={name} side="right" align="start" sideOffset={18}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          onClick={onClick}
          className={cn(
            "rounded-md opacity-75 hover:opacity-100 transition cursor-pointer",
            isActive && "opacity-100"
          )}
        />
      </Hint>
    </div>
  );
};

export default Item;
