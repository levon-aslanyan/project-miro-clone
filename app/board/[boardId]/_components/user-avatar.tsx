import Hint from "@/components/hint";
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar";
import {} from "@radix-ui/react-avatar";

interface UserAvatarProps {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
}

export const UserAvatar = ({
  src,
  name,
  fallback,
  borderColor,
}: UserAvatarProps) => {
  return (
    <Hint lable={name || "Teammate"} sideOffset={18} side="bottom">
      <Avatar className="w-8 h-8 border-2" style={{ borderColor }}>
        <AvatarImage src={src} />
        <AvatarFallback className="text-xs font-semibold">
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};

export default UserAvatar;
