"use client";

import { connectionIdToColor } from "@/lib/utils";
import { useSelf, useOthers } from "@liveblocks/react";
import { UserAvatar } from "./user-avatar";

const MAX_SHOW_USERS = 2;

const Participants = () => {
  const users = useOthers();

  const currentUser = useSelf();
  console.log(currentUser, "---");

  const hasMoreUser = users.length > MAX_SHOW_USERS;
  return (
    <div className="absolute h-12 top-2 right-2 rounded-md p-3  flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOW_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIdToColor(connectionId)}
              key={connectionId}
              src={info?.avatar}
              name={info?.name}
              fallback={info?.name?.[0] || "T"}
            />
          );
        })}

        {currentUser && (
          <UserAvatar
            borderColor={connectionIdToColor(currentUser.connectionId)}
            src={currentUser.info?.avatar}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}

        {hasMoreUser && (
          <UserAvatar
            name={`${users.length - MAX_SHOW_USERS} (You)`}
            fallback={`+${users.length - MAX_SHOW_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 rounded-md p-3  flex items-center shadow-md w-[100px]" />
  );
};

export default Participants;
