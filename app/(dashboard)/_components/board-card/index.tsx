"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";

import { Skeleton } from "@/components/ui/skeleton";
import Overlay from "./overlay";
import { formatDistanceToNow } from "date-fns";

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
          <img
            src={imageUrl}
            alt="Doodle"
            className="w-[180p] h-[150px] object-contain"
          />
          {/* <Image
            src={imageUrl}
            alt="Doodle"
            fill
            className="absolute"
          /> */}
          <Overlay />
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
