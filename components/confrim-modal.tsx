"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "./ui/alert-dialog";

interface ConfrimModalProps {
  children: React.ReactNode;
  onConfrim: () => void;
  disabled?: boolean;
  header: string;
  description?: string;
}

const ConfrimModal = ({
  children,
  onConfrim,
  disabled,
  header,
  description,
}: ConfrimModalProps) => {
  const handleConfrim = () => onConfrim();

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={disabled} onClick={handleConfrim}>
            Confrim
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfrimModal;
