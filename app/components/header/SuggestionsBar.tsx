"use client";

import { Button } from "@/components/ui/button";
import SuggestionsIcon from "@/public/assets/suggestions/icon-suggestions.svg";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useState } from "react";

const SuggestionsBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-14 items-center justify-between bg-suggestions-bar px-6 sm:h-[4.5rem] sm:rounded-[0.63rem] sm:pl-6 sm:pr-3">
      <div className="flex items-center gap-[2.375rem]">
        <div className="hidden items-center gap-4 sm:flex">
          <Image
            src={SuggestionsIcon}
            alt="Suggestions"
            className="size-6"
          ></Image>
          <h3>6 Suggestions</h3>
        </div>
        <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
          <DropdownMenuTrigger>
            <div
              className={cn(
                "flex gap-1 text-white-2",
                isOpen && "text-[#c3c7d8]"
              )}
            >
              <div className="flex">
                <h4 className="font-normal ">Sort by : </h4>
              </div>
              <div className="flex cursor-pointer items-center">
                <h4> Most Upvotes</h4>
                <ChevronDown
                  className={cn(
                    "h-4 transition text-white",
                    isOpen && "rotate-180"
                  )}
                  strokeWidth={3}
                />
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="body-1 ml-[5.5rem] mt-[2.625rem] w-64 rounded-[0.63rem] text-feedback-paragraph">
            <DropdownMenuItem className="flex justify-between px-6">
              <p>Most Upvotes</p>
              <Check size={18} className="text-purple" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-between px-6">
              <p>Least Upvotes</p>
              <Check size={18} className="text-purple" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-between px-6">
              <p>Most Comments</p>
              <Check size={18} className="text-purple" />
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex justify-between px-6">
              <p>Least Comments</p>
              <Check size={18} className="text-purple" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Button className="body-3 h-10 bg-purple px-4 font-bold text-white-2 hover:bg-purple-hover">
        + Add Feedback
      </Button>
    </div>
  );
};
export default SuggestionsBar;
