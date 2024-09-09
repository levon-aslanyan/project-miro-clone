import { Skeleton } from "@/components/ui/skeleton";

const Toolbar = () => {
  return (
    <div className="flex flex-col gap-y-4 absolute  top-[50%] -translate-y-[50%] left-2">
      <div className="bg-white rounded-md p-1.5  flex flex-col gap-y-4 shadow-md">
        <div>Pencil</div>
        <div>Square</div>
        <div>Circle</div>
        <div>Elipsis</div>
      </div>

      <div className="bg-white rounded-md p-1.5  flex flex-col items-center shadow-md">
        <div>Undo</div>
        <div>Redo</div>
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className="flex flex-col gap-y-4 absolute shadow-md rounded-md  top-[50%] -translate-y-[50%] left-2 bg-white w-[51px] h-[360px]" />
  );
};

export default Toolbar;
