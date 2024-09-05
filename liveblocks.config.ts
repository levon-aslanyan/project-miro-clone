import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

const client = createClient({
  publicApiKey:
    "pk_prod__MsExOYnr5LPMN1q47ped1-ID7Sx8-F8ylQ-0JmxQet9Gvwv-AwHjckro3-S418k",
});

type Presence = {};
type Storage = {};
type UserMeta = {};
type RoomEvent = {};
type ThreadMetadata = {};

export const { RoomProvider, useMyPresence } = createRoomContext<
  Presence,
  Storage,
  UserMeta,
  RoomEvent,
  ThreadMetadata
>(client);
