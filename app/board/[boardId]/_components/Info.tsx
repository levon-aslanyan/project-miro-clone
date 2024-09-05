import { Skeleton } from "@/components/ui/skeleton";

const Info = () => {
  return (
    <div className="flex items-center absolute rounded-md top-2 left-2 bg-white px-1.5 h-12 shadow-md">
      ToDo information about board
    </div>
  );
};

Info.Skeleton = function InfoSkeleton() {
  return (
    <div className="flex items-center absolute rounded-md top-2 left-2 bg-white px-1.5 h-12 shadow-md w-[300]px]" />
  );
};
export default Info;
