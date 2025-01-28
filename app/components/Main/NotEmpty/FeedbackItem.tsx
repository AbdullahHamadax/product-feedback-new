import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronUp, MessageCircle } from "lucide-react";
import Link from "next/link";
const FeedbackItem = ({
  upvotes,
  title,
  comments,
  content,
  roadmapCategory,
  isInRoadmap,
  tag,
}: {
  upvotes: number;
  title: string;
  comments: any[];
  content: string;
  roadmapCategory?: string;
  isInRoadmap?: boolean;
  tag: string;
}) => {
  return (
    <div
      className={cn(
        "body-3 flex items-start rounded-[0.63rem] bg-white p-6 font-bold sm:gap-10",
        isInRoadmap && "border-purple border-t-[0.375rem] sm:gap-0",
        roadmapCategory === "Planned" &&
          "border-orange border-t-[0.375rem] sm:gap-0",
        roadmapCategory === "In-Progress" &&
          "border-purple border-t-[0.375rem] sm:gap-0",
        roadmapCategory === "Live" && "border-cyan border-t-[0.375rem] sm:gap-0"
      )}
    >
      <Button
        className={cn(
          "body-3 group hidden h-[3.313rem] flex-col items-center gap-1 rounded-[0.63rem] bg-white-1 px-2 text-feedback-title shadow-none hover:bg-blue-card-hover active:bg-blue active:text-white sm:flex",
          isInRoadmap && "sm:hidden"
        )}
      >
        <ChevronUp
          className="h-4 text-blue transition group-active:text-white"
          strokeWidth={3}
        />
        <p>{upvotes}</p>
      </Button>
      <div className="flex flex-1 flex-col items-start">
        <div
          className={cn(
            "mb-4 hidden",
            isInRoadmap && "flex items-center gap-2"
          )}
        >
          <span
            className={cn(
              "size-2 rounded-full bg-purple",
              roadmapCategory === "Planned" && "bg-orange",
              roadmapCategory === "In-Progress" && "bg-purple",
              roadmapCategory === "Live" && "bg-cyan"
            )}
          />
          <p className="body-3 font-normal text-feedback-paragraph">
            {roadmapCategory}
          </p>
        </div>
        <p className="mb-2 text-feedback-title">{title}</p>
        <p className="mb-2 text-[#647196] opacity-75">{content}</p>
        <div
          className={cn(
            "mb-4 rounded-[0.63rem] bg-white-1 px-4 py-1.5 text-blue sm:mb-0",
            isInRoadmap && "sm:mb-4"
          )}
        >
          {tag}
        </div>
        <div
          className={cn(
            "flex w-full items-center justify-between sm:hidden",
            isInRoadmap && "sm:flex "
          )}
        >
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
        <div
          className={cn(
            "hidden items-center gap-1 self-center sm:flex",
            isInRoadmap && "sm:hidden"
          )}
        >
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
