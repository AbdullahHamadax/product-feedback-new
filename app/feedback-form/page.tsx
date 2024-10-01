"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import NewFeedbackIcon from "@/public/assets/shared/icon-new-feedback.svg";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import GoBackButton from "../feedback/[id]/components/GoBackButton";
const FeedbackForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Feature");
  return (
    <div className="container mx-auto px-6 py-[2.125rem]">
      <GoBackButton className="mb-[2.188rem]" />
      <div className="flex flex-col rounded-[0.63rem] bg-white px-6">
        <Image
          src={NewFeedbackIcon}
          alt="new feedback"
          className="ml-12 size-10"
        />
        <h3 className="text-feedback-title">Create New Feedback</h3>
        <div className="body-3">
          <p className="font-bold text-feedback-title">Feedback Title</p>
          <p className="font-normal text-feedback-paragraph">
            Add a short, descriptive headline
          </p>
        </div>
        <Input className="h-12 resize-none rounded-[0.31rem] bg-white-1" />
        <div className="body-3">
          <p className="font-bold text-feedback-title">Category</p>
          <p className="font-normal text-feedback-paragraph">
            Choose a category for your feedback
          </p>
          <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
            <DropdownMenuTrigger className="w-full">
              <div
                className={cn(
                  "flex flex-col gap-1 text-white-2 ",
                  isOpen && "text-[#c3c7d8]"
                )}
              >
                <div className="flex h-12 items-center justify-between rounded-[0.31rem] bg-white-1 px-4">
                  <p className="body-3 font-normal text-feedback-title">
                    Feature
                  </p>
                  <ChevronDown className="size-3 text-blue" />
                </div>
                <div className="flex cursor-pointer items-center">
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
              <DropdownMenuItem
                className="flex justify-between px-6"
                onClick={() => setSortBy("most upvotes")}
              >
                <p>Most Upvotes</p>
                <Check
                  size={18}
                  className={cn(
                    "hidden text-purple",
                    sortBy === "most upvotes" && "flex"
                  )}
                />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="flex justify-between px-6"
                onClick={() => setSortBy("least upvotes")}
              >
                <p>Least Upvotes</p>
                <Check
                  size={18}
                  className={cn(
                    "hidden text-purple",
                    sortBy === "least upvotes" && "flex"
                  )}
                />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="flex justify-between px-6"
                onClick={() => setSortBy("most comments")}
              >
                <p>Most Comments</p>
                <Check
                  size={18}
                  className={cn(
                    "hidden text-purple",
                    sortBy === "most comments" && "flex"
                  )}
                />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                className="flex justify-between px-6"
                onClick={() => setSortBy("least comments")}
              >
                <p>Least Comments</p>
                <Check
                  size={18}
                  className={cn(
                    "hidden text-purple",
                    sortBy === "least comments" && "flex"
                  )}
                />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
