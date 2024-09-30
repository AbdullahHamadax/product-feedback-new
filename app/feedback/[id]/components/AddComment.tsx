import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const AddComment = () => {
  return (
    <div className="rounded-[0.63rem] bg-white p-6">
      <h3 className="mb-6 text-feedback-title">Add Comment</h3>
      <Textarea placeholder="Type your comments here" />
      <div className="mt-4 flex items-center justify-between">
        <p className="body-3 font-normal text-feedback-paragraph">
          250 Characters left
        </p>
        <Button className="body-3 rounded-[0.63rem] bg-purple px-4 py-[0.656rem] font-bold hover:bg-purple-hover">
          Post Comment
        </Button>
      </div>
    </div>
  );
};

export default AddComment;
