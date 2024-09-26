import { Category } from "@/lib/types";
import FeedbackItem from "./FeedbackItem";
const feedbackItems = [
  {
    upvotes: 112,
    comments: [1, 2],
    title: "Hi lol",
    content: "fuck Frontend",
    category: Category.ENHANCEMENT,
  },
  {
    upvotes: 0,
    comments: [1],
    title: "Bye lol",
    content: "I love Frontend",
    category: Category.UI,
  },
];
const NotEmpty = () => {
  return (
    <div className="mt-6 flex flex-col gap-4 lg:gap-5">
      {feedbackItems.map((item, index) => {
        return (
          <FeedbackItem
            upvotes={item.upvotes}
            comments={item.comments}
            title={item.title}
            content={item.content}
            category={item.category}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default NotEmpty;
