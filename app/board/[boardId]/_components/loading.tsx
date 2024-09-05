import { Loader } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Info from "./Info";
import Participants from "./participants";
import Toolbar from "./toolbar";

const Loading = () => {
  return (
    <main className="h-full w-full bg-neutral-100 relative touch-none flex items-center justify-center">
      <Loader className="h-6 w-6 text-muted-foreground animate-spin" />
      <Info.Skeleton />
      <Participants.Skeleton />
      <Toolbar.Skeleton />
    </main>
  );
};

export default Loading;
