import FeedbackItem from "@/app/components/Main/NotEmpty/FeedbackItem";
import { Button } from "@/components/ui/button";
import { Category } from "@/lib/types";
import Link from "next/link";
import AddComment from "./components/AddComment";
import Comments from "./components/Comments";
import GoBackButton from "./components/GoBackButton";

const FeedbackPage = () => {
  return (
    <div className="container mx-auto flex flex-col gap-6 p-6">
      <div className="flex justify-between">
        <GoBackButton />
        <Link href={"/feedback-edit"}>
          <Button className="rounded-[0.63rem] bg-blue px-4 py-[0.656rem] font-bold hover:bg-edit-feedback-button-hover">
            Edit Feedback
          </Button>
        </Link>
      </div>
      <FeedbackItem
        upvotes={0}
        comments={[1, 2]}
        title={"Noooo"}
        content={"Yeees"}
        category={Category.BUG}
      />
      <Comments />
      <AddComment />
    </div>
  );
};

export default FeedbackPage;
