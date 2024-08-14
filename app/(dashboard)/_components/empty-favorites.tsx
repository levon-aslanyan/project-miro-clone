import Image from "next/image";

const EmptyFavorite = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/empty-favorite.svg"
        alt="empty-search"
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No found boards!</h2>
      <div className="text-muted-foreground text-sm mt-2">
        Try favoriting a board
      </div>
    </div>
  );
};

export default EmptyFavorite;
