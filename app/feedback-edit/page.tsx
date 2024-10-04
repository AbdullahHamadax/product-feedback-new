"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import EditFeedbackIcon from "@/public/assets/shared/icon-edit-feedback.svg";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GoBackButton from "../feedback/[id]/components/GoBackButton";
const EditFeedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sortBy, setSortBy] = useState("Feature");
  return (
    <div className="container mx-auto px-6 py-[2.125rem] ">
      <GoBackButton className="mb-[2.188rem]" />

      <div className="relative flex flex-col gap-6 rounded-[0.63rem]  bg-white px-6 sm:px-[2.625rem]">
        <Image
          src={EditFeedbackIcon}
          alt="new feedback"
          className="absolute left-5 top-[-20px] z-50 size-10 "
        />
        <h3 className="mt-6 text-feedback-title">Editing &apos; {} &apos;</h3>
        <div>
          <div className="body-3">
            <div className="flex flex-col gap-[0.188rem]">
              <p className="font-bold text-feedback-title">Feedback Title</p>
              <p className="mb-4 font-normal text-feedback-paragraph">
                Add a short, descriptive headline
              </p>
            </div>
          </div>
          <Input className="h-12 resize-none rounded-[0.31rem] bg-white-1" />
        </div>
        <div>
          <div className="body-3">
            <div className="flex flex-col gap-[0.188rem]">
              <p className="font-bold text-feedback-title">Category</p>
              <p className="mb-6 font-normal text-feedback-paragraph">
                Choose a category for your feedback
              </p>
            </div>
            <DropdownMenu onOpenChange={setIsOpen} open={isOpen}>
              <DropdownMenuTrigger className="w-full" asChild>
                <div
                  className={cn(
                    "flex flex-col gap-1 text-white-2 ",
                    isOpen && "text-[#c3c7d8]"
                  )}
                >
                  <div className="cursor-pointer">
                    <div className="flex h-12 items-center justify-between rounded-[0.31rem] bg-white-1 px-4">
                      <p className="body-3 font-normal text-feedback-title">
                        Feature
                      </p>

                      <ChevronDown className="size-3 text-blue" />
                    </div>
                  </div>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="body-1 ml-[5.5rem] mt-[2.625rem] w-64 rounded-[0.63rem] text-feedback-paragraph">
                <DropdownMenuItem
                  className="flex justify-between px-6"
                  onClick={() => setSortBy("feature")}
                >
                  <p>Feature</p>
                  <Check
                    size={18}
                    className={cn(
                      "hidden text-purple",
                      sortBy === "feature" && "flex"
                    )}
                  />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="flex justify-between px-6"
                  onClick={() => setSortBy("ui")}
                >
                  <p>UI</p>
                  <Check
                    size={18}
                    className={cn(
                      "hidden text-purple",
                      sortBy === "ui" && "flex"
                    )}
                  />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="flex justify-between px-6"
                  onClick={() => setSortBy("ux")}
                >
                  <p>UX</p>
                  <Check
                    size={18}
                    className={cn(
                      "hidden text-purple",
                      sortBy === "ux" && "flex"
                    )}
                  />
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="flex justify-between px-6"
                  onClick={() => setSortBy("enhancement")}
                >
                  <p>Enhancement</p>
                  <Check
                    size={18}
                    className={cn(
                      "hidden text-purple",
                      sortBy === "enhancement" && "flex"
                    )}
                  />
                </DropdownMenuItem>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  className="flex justify-between px-6"
                  onClick={() => setSortBy("bug")}
                >
                  <p>Bug</p>
                  <Check
                    size={18}
                    className={cn(
                      "hidden text-purple",
                      sortBy === "bug" && "flex"
                    )}
                  />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div>
          <div className="body-3">
            <div className="flex flex-col gap-[0.188rem]">
              <p className="font-bold text-feedback-title">Update Status</p>
              <p className="mb-4 font-normal text-feedback-paragraph">
                Change feature state
              </p>
            </div>
          </div>
          <Input className="h-12 resize-none rounded-[0.31rem] bg-white-1" />
        </div>
        <div>
          <div className="flex flex-col gap-[0.188rem]">
            <h3 className="text-feedback-title">Feedback Detail</h3>
            <div className="body-3">
              <p className="mb-6 font-normal text-feedback-paragraph">
                Include any specific comments on what should be improved, added,
                etc.
              </p>
            </div>
            <Textarea className="h-[7.5rem] resize-none" />
          </div>
          <div className=" mb-6 mt-[3.188rem] flex flex-col gap-4 sm:mb-10 sm:mt-8 sm:flex-row-reverse">
            <Button className="body-3 rounded-[0.63rem] bg-purple font-bold hover:bg-purple-hover">
              Add Feedback
            </Button>
            <Link href={"/"}>
              <Button className="body-3 w-full rounded-[0.63rem] bg-suggestions-bar font-bold hover:bg-cancel-button-hover">
                Cancel
              </Button>
            </Link>
            <Button className="body-3 w-full rounded-[0.63rem]  bg-delete-feedback-button font-bold hover:bg-delete-feedback-button-hover sm:mr-auto sm:w-[5.81rem]">
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFeedback;
