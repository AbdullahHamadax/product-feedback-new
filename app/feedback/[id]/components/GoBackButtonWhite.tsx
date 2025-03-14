import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
const GoBackButtonWhite = ({ className }: { className?: string }) => {
  return (
    <Link className={cn("flex items-center gap-2", className)} href={"/"}>
      <ChevronLeft className="text-[#CDD2EE]" size={16} strokeWidth={3} />
      <p className="body-3 cursor-pointer font-bold text-white hover:underline">
        Go Back
      </p>
    </Link>
  );
};

export default GoBackButtonWhite;
