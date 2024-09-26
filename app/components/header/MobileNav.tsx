"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import CategoryCard from "../shared/CategoryCard";
import RoadmapCard from "../shared/RoadmapCard";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-[4.5rem] items-center justify-between bg-gradient-to-r from-[#28A7ED] via-[#A337F6] to-[#E84D70] px-6 sm:hidden">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="body-2 font-bold">Frontend Mentor</p>
          <p className="body-3 text-[#D5DEFB]">Feedback Board</p>
        </div>
      </div>
      <Sheet onOpenChange={setIsOpen} open={isOpen}>
        <SheetTrigger>
          {isOpen ? (
            <X size={24} strokeWidth={3} />
          ) : (
            <Menu size={24} strokeWidth={3} />
          )}
        </SheetTrigger>
        <SheetContent className="mt-[4.5rem] bg-white-1">
          <div className="flex w-full flex-col gap-6">
            <CategoryCard />
            <RoadmapCard />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
