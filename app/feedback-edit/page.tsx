"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import EditFeedbackIcon from "@/public/assets/shared/icon-edit-feedback.svg";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GoBackButton from "../feedback/[id]/components/GoBackButton";
const EditFeedback = () => {
  const [selectOneIsOpen, setSelectOneIsOpen] = useState(false);
  const [selectTwoIsOpen, setselectTwoIsOpen] = useState(false);

  return (
    <div className="flex h-svh flex-col items-center px-6 py-[2.125rem]">
      <div className="w-full max-w-[33.75rem]">
        <GoBackButton className="mb-[2.188rem]" />
      </div>
      <div className="relative h-[90%] max-w-[33.75rem]">
        <Image
          src={EditFeedbackIcon}
          alt="new feedback"
          className="absolute left-5 top-[-20px] z-50 size-10 sm:left-9"
        />
        <div className="relative flex h-full flex-col gap-6 overflow-scroll rounded-[0.63rem] bg-white px-6 sm:px-[2.625rem]">
          <h3 className="pt-11 text-feedback-title">Editing &apos;{}&apos;</h3>
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
              <Select onOpenChange={setSelectOneIsOpen} open={selectOneIsOpen}>
                <SelectTrigger className="h-12 rounded-[0.31rem] bg-white-2 ">
                  <SelectValue placeholder="Feature" />
                  <ChevronDown
                    className={cn(
                      "h-4 transition text-blue",
                      selectOneIsOpen && "rotate-180"
                    )}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="feature">Feature</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="ui">UI</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="ux">UX</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="enhancement">Ehancement</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="bug">Bug</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <div className="body-3">
              <div className="flex flex-col gap-[0.188rem]">
                <p className="font-bold text-feedback-title">Update Status</p>
                <p className="mb-6 font-normal text-feedback-paragraph">
                  Change feature state
                </p>
              </div>
              <Select onOpenChange={setselectTwoIsOpen} open={selectTwoIsOpen}>
                <SelectTrigger className="h-12 rounded-[0.31rem] bg-white-2 ">
                  <SelectValue placeholder="Planned" />
                  <ChevronDown
                    className={cn(
                      "h-4 transition text-blue",
                      selectTwoIsOpen && "rotate-180"
                    )}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="feature">Planned</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="ui">In-Progress</SelectItem>
                    <SelectSeparator />
                    <SelectItem value="ux">Live</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-[0.188rem]">
              <h3 className="text-feedback-title">Feedback Detail</h3>
              <div className="body-3">
                <p className="mb-6 font-normal text-feedback-paragraph">
                  Include any specific comments on what should be improved,
                  added, etc.
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
              <Button className="body-3 rounded-[0.63rem] bg-delete-feedback-button font-bold hover:bg-delete-feedback-button-hover sm:mr-auto ">
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditFeedback;
