"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const AddComment = () => {
  const [characterCount, setCharacterCount] = useState(250);

  return (
    <div className="rounded-[0.63rem] bg-white p-6">
      <h3 className="mb-6 text-feedback-title">Add Comment</h3>
      <Textarea
        placeholder="Type your comments here"
        onChange={(e) => setCharacterCount(250 - e.target.value.length)}
        maxLength={250}
      />
      <div className="mt-4 flex items-center justify-between">
        <p className="body-3 font-normal text-feedback-paragraph">
          {characterCount} Characters left
        </p>
        <Button className="body-3 rounded-[0.63rem] bg-purple px-4 py-[0.656rem] font-bold hover:bg-purple-hover">
          Post Comment
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
