import { Button } from "@/components/ui/button";
import { ChevronUp, MessageCircle } from "lucide-react";
const FeedbackItem = () => {
  return (
    <div className="body-3 flex items-start gap-10 rounded-[0.63rem] bg-white p-6 font-bold">
      <Button className="body-3 group hidden h-14 flex-col items-center gap-1 rounded-[0.63rem] bg-white-1 px-2 text-feedback-title shadow-none hover:bg-blue-card-hover active:bg-blue active:text-white sm:flex">
        <ChevronUp
          className="h-4 text-blue transition group-active:text-white"
          strokeWidth={3}
        />
        <p>112</p>
      </Button>
      <div className="flex flex-1 flex-col items-start">
        <p className=" mb-2 text-feedback-title">Add tags for solutions</p>
        <p className="mb-2 text-[#647196] opacity-75">
          Easier to search for solutions based on a specific stack.
        </p>
        <div className="mb-4 rounded-[0.63rem] bg-white-1 px-4 py-1.5 text-blue sm:mb-0">
          Enhancement
        </div>
        <div className="flex w-full justify-between sm:hidden">
          <Button className="body-3 group flex items-center gap-1 rounded-[0.63rem] bg-white-1 py-1.5 pl-2 pr-3 text-feedback-title shadow-none hover:bg-blue-card-hover active:bg-blue active:text-white">
            <ChevronUp
              className="h-4 text-blue transition group-active:text-white"
              strokeWidth={3}
            />
            <p>112</p>
          </Button>
          <div className="flex  items-center gap-1">
            <MessageCircle
              fill="#C5C8DE"
              className="size-6 opacity-60"
              strokeWidth={0}
            />
            <p className="text-feedback-title">2</p>
          </div>
        </div>
      </div>
      <div className="hidden items-center gap-1 self-center sm:flex">
        <MessageCircle
          fill="#C5C8DE"
          className="size-6 opacity-60"
          strokeWidth={0}
        />
        <p className="text-feedback-title">2</p>
      </div>
    </div>
  );
};

export default FeedbackItem;
