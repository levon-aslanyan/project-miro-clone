import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import React from "react";

interface FooterProps {
  title: string;
  disabled: boolean;
  isFavorite: boolean;
  authorLabel: string;
  createdAtLabel: string;
  onClick: () => void;
}

const Footer = ({
  title,
  disabled,
  isFavorite,
  authorLabel,
  createdAtLabel,
  onClick,
}: FooterProps) => {
  const handlerClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    onClick();
  };

  return (
    <div className="relative p-3 bg-white">
      <p className="text-[13px] truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-between text-[11px] text-muted-foreground">
        {authorLabel}, {createdAtLabel}
        <button
          disabled={disabled}
          onClick={handlerClick}
          className={cn(
            "opacity-0 group-hover:opacity-100 transition abnsolute top-3 right-3 text-muted-foreground hover:text-blue-600",
            disabled && "cursor-not-allowed opacity-75"
          )}
        >
          <Star
            className={cn(
              "w-4 h-4",
              isFavorite && "fill-blue-600 text-blue-600"
            )}
          />
        </button>
      </p>
    </div>
  );
};

export default Footer;
