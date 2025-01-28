import { Button } from "@/components/ui/button";
import Link from "next/link";
import FeedbackItem from "../components/Main/NotEmpty/FeedbackItem";
import GoBackButtonWhite from "../feedback/[id]/components/GoBackButtonWhite";
const LargeView = () => {
  const feedbackItems = [
    {
      upvotes: 123,
      title: "Wow",
      comments: [1, 2],
      content: "I am a feedback",
      tag: "UX",
      isInRoadmap: true,
      roadmapCategory: "Planned",
      id: 1,
    },
    {
      upvotes: 123,
      title: "Wow",
      comments: [1, 2],
      content: "I am a feedback",
      tag: "UX",
      isInRoadmap: true,
      roadmapCategory: "Planned",
      id: 2,
    },
    {
      upvotes: 123,
      title: "Wow",
      comments: [1, 2],
      content: "I am a feedback",
      tag: "UX",
      isInRoadmap: true,
      roadmapCategory: "In-Progress",
      id: 3,
    },
    {
      upvotes: 123,
      title: "Wow",
      comments: [1, 2],
      content: "I am a feedback",
      tag: "UX",
      isInRoadmap: true,
      roadmapCategory: "In-Progress",
      id: 4,
    },
    {
      upvotes: 123,
      title: "Wow",
      comments: [1, 2],
      content: "I am a feedback",
      tag: "UX",
      isInRoadmap: true,
      roadmapCategory: "In-Progress",
      id: 5,
    },
    {
      upvotes: 123,
      title: "Wow",
      comments: [1, 2],
      content: "I am a feedback",
      tag: "UX",
      isInRoadmap: true,
      roadmapCategory: "Live",
      id: 6,
    },
  ];

  return (
    <div className="container mx-auto hidden h-svh py-14 md:block">
      <div className="flex items-center justify-between rounded-[0.625rem] bg-suggestions-bar p-8">
        <div className="flex flex-col gap-1">
          <GoBackButtonWhite />
          <h1 className="text-white">Roadmap</h1>
        </div>
        <Link href={"/feedback-form"}>
          <Button className="body-3 h-10 bg-purple px-4 font-bold text-white-2 hover:bg-purple-hover">
            + Add Feedback
          </Button>
        </Link>
      </div>
      <div className="mt-8">
        <div className="flex gap-2.5 lg:gap-[1.875rem]">
          <div className="flex-1">
            <h4 className="text-feedback-title">Planned ({})</h4>
            <p className="mb-6 text-feedback-paragraph">
              Ideas prioritized for research
            </p>
            <div className="flex flex-col gap-4">
              {feedbackItems
                .filter((item) => item.roadmapCategory === "Planned")
                .map((item) => (
                  <FeedbackItem
                    key={item.id}
                    upvotes={item.upvotes}
                    comments={item.comments}
                    title={item.title}
                    content={item.content}
                    roadmapCategory={item.roadmapCategory}
                    tag={item.tag}
                    isInRoadmap
                  />
                ))}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-feedback-title">In-Progress ({})</h4>
            <p className="mb-6 text-feedback-paragraph">
              Currently being developed
            </p>
            <div className="flex flex-col gap-4">
              {feedbackItems
                .filter((item) => item.roadmapCategory === "In-Progress")
                .map((item) => (
                  <FeedbackItem
                    key={item.id}
                    upvotes={item.upvotes}
                    comments={item.comments}
                    title={item.title}
                    content={item.content}
                    roadmapCategory={item.roadmapCategory}
                    tag={item.tag}
                    isInRoadmap
                  />
                ))}
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-feedback-title">Live ({})</h4>
            <p className="mb-6 text-feedback-paragraph">Released features</p>
            <div className="flex flex-col gap-4">
              {feedbackItems
                .filter((item) => item.roadmapCategory === "Live")
                .map((item) => (
                  <FeedbackItem
                    key={item.id}
                    upvotes={item.upvotes}
                    comments={item.comments}
                    title={item.title}
                    content={item.content}
                    roadmapCategory={item.roadmapCategory}
                    tag={item.tag}
                    isInRoadmap
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeView;
