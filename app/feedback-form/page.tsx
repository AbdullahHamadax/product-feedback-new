"use client";
import NewFeedbackIcon from "@/public/assets/shared/icon-new-feedback.svg";
import Image from "next/image";
import GoBackButton from "../feedback/[id]/components/GoBackButton";

const FeedbackForm = () => {
  return (
    <div className="container mx-auto px-6 py-[2.125rem]">
      <GoBackButton className="mb-[2.188rem]" />
      <div className="bg-white px-6">
        <Image
          src={NewFeedbackIcon}
          alt="new feedback"
          className="ml-12 size-10"
        />
        <h3 className="text-feedback-title">Create New Feedback</h3>
      </div>
    </div>
  );
};

export default FeedbackForm;
