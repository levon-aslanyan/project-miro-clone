import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  throttle: 16,
  authEndpoint: "/api/liveblock-auth",
});

type Presence = {
  cursor: { x: number; y: number } | null;
};

type Storage = {};
type UserMeta = {
  id?: string;
  info?: {
    name?: string;
    picture?: string;
  };
};
type RoomEvent = {};
type ThreadMetadata = {};

export const { RoomProvider, useMyPresence } = createRoomContext<
  Presence,
  Storage,
  UserMeta,
  RoomEvent,
  ThreadMetadata
>(client);
