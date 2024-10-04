import { Button } from "@/components/ui/button";
import { Category } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ChevronUp, MessageCircle } from "lucide-react";
import Link from "next/link";
const FeedbackItem = ({
  upvotes,
  title,
  comments,
  content,
  category,
  isInRoadmap,
}: {
  upvotes: number;
  title: string;
  comments: any[];
  content: string;
  category: Category;
  isInRoadmap?: boolean;
}) => {
  return (
    <div
      className={cn(
        "body-3 flex items-start rounded-[0.63rem] bg-white p-6 font-bold sm:gap-10",
        isInRoadmap && "border-purple border-t-[0.375rem]"
      )}
    >
      <Button className="body-3 group hidden h-[3.313rem] flex-col items-center gap-1 rounded-[0.63rem] bg-white-1 px-2 text-feedback-title shadow-none hover:bg-blue-card-hover active:bg-blue active:text-white sm:flex">
        <ChevronUp
          className="h-4 text-blue transition group-active:text-white"
          strokeWidth={3}
        />
        <p>{upvotes}</p>
      </Button>
      <div className="flex flex-1 flex-col items-start">
        <div className="mb-4 flex items-center gap-2">
          <span className="size-2 rounded-full bg-purple" />
          <p className="body-3 font-normal text-feedback-paragraph">
            In Progress
          </p>
        </div>
        <p className="mb-2 text-feedback-title">{title}</p>
        <p className="mb-2 text-[#647196] opacity-75">{content}</p>
        <div className="mb-4 rounded-[0.63rem] bg-white-1 px-4 py-1.5 text-blue sm:mb-0">
          {category}
        </div>
        <div className="flex w-full justify-between sm:hidden">
          <Button className="body-3 group flex items-center gap-1 rounded-[0.63rem] bg-white-1 py-1.5 pl-2 pr-3 text-feedback-title shadow-none hover:bg-blue-card-hover active:bg-blue active:text-white">
            <ChevronUp
              className="h-4 text-blue transition group-active:text-white"
              strokeWidth={3}
            />
            <p>{upvotes}</p>
          </Button>
          <Link href={`/feedback/${1}`}>
            <div className="flex cursor-pointer items-center gap-1">
              <MessageCircle
                fill="#C5C8DE"
                className="size-6 opacity-60"
                strokeWidth={0}
              />
              <p className="text-feedback-title">{comments.length}</p>
            </div>
          </Link>
        </div>
      </div>
      <Link href={`/feedback/${1}`} className="self-center">
        <div className="hidden items-center gap-1 self-center sm:flex">
          <MessageCircle
            fill="#C5C8DE"
            className="size-6 opacity-60"
            strokeWidth={0}
          />
          <p className="text-feedback-title">{comments.length}</p>
        </div>
      </Link>
    </div>
  );
};

export default FeedbackItem;
