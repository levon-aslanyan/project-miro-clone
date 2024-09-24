import {
  createClient,
  LiveList,
  LiveMap,
  LiveObject,
} from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";
import { Layer, Color } from "./types/canvas";

const client = createClient({
  throttle: 16,
  authEndpoint: "/api/liveblock-auth",
});

type Presence = {
  cursor: { x: number; y: number } | null;
  selection: string[];
};

type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};

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
