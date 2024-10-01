import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
const GoBackButton = ({ className }: { className?: string }) => {
  return (
    <Link className={cn("flex items-center gap-4", className)} href={"/"}>
      <ChevronLeft className="text-blue" size={20} strokeWidth={3} />
      <p className="body-3 cursor-pointer font-bold text-feedback-paragraph hover:underline">
        Go Back
      </p>
    </Link>
  );
};

export default GoBackButton;
