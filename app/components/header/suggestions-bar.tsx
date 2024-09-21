import { Button } from "@/components/ui/button";
import SuggestionsIcon from "@/public/assets/suggestions/icon-suggestions.svg";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export const SuggestionsBar = () => {
  return (
    <div className="flex h-14 items-center justify-between bg-suggestions-bar px-6">
      <div className="flex items-center gap-[2.375rem]">
        <div className="hidden items-center gap-4 sm:flex">
          <Image
            src={SuggestionsIcon}
            alt="Suggestions"
            className="size-6"
          ></Image>
          <h3>6 Suggestions</h3>
        </div>
        <div className="flex gap-1">
          <div className="flex">
            <p className="body-3">Sort by : </p>
          </div>
          <div className="flex items-center">
            <p className="body-3 font-bold"> Most Upvotes</p>
            <ChevronDown className="h-4" strokeWidth={3} />
          </div>
        </div>
      </div>
      <Button className="body-3 h-10 bg-add-feedback-button px-4 font-bold text-white-2">
        + Add Feedback
      </Button>
    </div>
  );
};
