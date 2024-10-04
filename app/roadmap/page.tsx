"use client";
import GoBackButtonWhite from "@/app/feedback/[id]/components/GoBackButtonWhite";
import { Button } from "@/components/ui/button";
import { feedbackItems } from "@/dummy-data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import FeedbackItem from "../components/Main/NotEmpty/FeedbackItem";
const Roadmap = () => {
  const [isSelected, setIsSelected] = useState("planned");

  return (
    <>
      <div className="flex h-[6.25rem] items-center justify-between bg-suggestions-bar px-6">
        <div className="flex flex-col items-center gap-1">
          <GoBackButtonWhite />
          <h3 className="text-white">Roadmap</h3>
        </div>
        <Link href={"/feedback-form"}>
          <Button className="body-3 h-10 bg-purple px-4 font-bold text-white-2 hover:bg-purple-hover">
            + Add Feedback
          </Button>
        </Link>
      </div>
      <div className="body-3 relative flex h-[3.75rem] items-center border-b border-[#8C92B3]/25 text-center font-bold text-feedback-title">
        <p className="flex-1" onClick={() => setIsSelected("planned")}>
          Planned {"(2)"}
        </p>
        <p className="flex-1 " onClick={() => setIsSelected("in-progress")}>
          In-Progress {"(3)"}
        </p>
        <p className="flex-1" onClick={() => setIsSelected("live")}>
          Live {"(1)"}
        </p>
        <span
          className={cn(
            "absolute bottom-0 left-0 h-1 w-1/3 bg-purple rounded-t-[0.31rem]",
            isSelected === "in-progress" && "left-1/3",
            isSelected === "live" && "left-2/3"
          )}
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <h3 className="text-feedback-title">In-Progress (3)</h3>
        <p className="body-3 font-normal text-feedback-paragraph">
          Features currently being developed
        </p>
        {feedbackItems.map((item, index) => {
          return (
            <FeedbackItem
              upvotes={item.upvotes}
              comments={item.comments}
              title={item.title}
              content={item.content}
              category={item.category}
              key={index}
              isInRoadmap
            />
          );
        })}
      </div>
    </>
  );
};

export default Roadmap;
