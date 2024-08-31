import { create } from "zustand";

const defautlValue = { id: "", title: "" };

interface IRenameModal {
  isOpen: boolean;
  initialValue: typeof defautlValue;
  onOpen: (id: string, title: string) => void;
  onClose: () => void;
}

export const UseRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  onOpen: (id, title) =>
    set({
      isOpen: true,
      initialValue: { id, title },
    }),
  onClose: () =>
    set({
      isOpen: false,
      initialValue: defautlValue,
    }),
  initialValue: defautlValue,
}));

export default UseRenameModal;
