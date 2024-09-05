import { Skeleton } from "@/components/ui/skeleton";

const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 rounded-md p-3  flex items-center shadow-md">
      User List
    </div>
  );
};

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 rounded-md p-3  flex items-center shadow-md w-[100px]" />
  );
};

export default Participants;
