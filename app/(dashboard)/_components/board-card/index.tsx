"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";

import { Skeleton } from "@/components/ui/skeleton";
import { formatDistanceToNow } from "date-fns";
import Actions from "@/components/actions";
import { MoreHorizontal } from "lucide-react";
import Overlay from "./overlay";

interface BoardCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorId: string;
  authorName: string;
  createAt: number;
  orgId: string;
  isFavorite: boolean;
}

const BoardCard = ({
  id,
  title,
  imageUrl,
  authorId,
  authorName,
  createAt,
  orgId,
  isFavorite,
}: BoardCardProps) => {
  const { userId } = useAuth();
  const authorLabel = userId === authorId ? "You" : authorName;

  const createdAtLabel = formatDistanceToNow(createAt, {
    addSuffix: true,
  });

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
        <div className="relative flex-1 bg-amber-50">
          <div className="w-[180p] h-[150px] ">
            <img src={imageUrl} alt="Doodle" className="object-contain" />
          </div>

          {/* <Image
            src={imageUrl}
            alt="Doodle"
            fill
            className="absolute"
          /> */}

          <Actions id={id} side="right" title={title}>
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2 outline-none">
              <MoreHorizontal className=" text-write opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          disabled={false}
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          onClick={() => {}}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="rounded-lg aspect-[100/127] overflow-hidden">
      <Skeleton className="h-full  w-full" />
    </div>
  );
};

export default BoardCard;
