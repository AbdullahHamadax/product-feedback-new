import FeedbackItem from "./FeedbackItem";
const feedbackItems = [
  {
    upvotes: 112,
    comments: [1, 2],
    title: "Hi lol",
    content: "fuck Frontend",
    tag: "Bug",
  },
  {
    upvotes: 0,
    comments: [1],
    title: "Bye lol",
    content: "I love Frontend",
    tag: "UI",
  },
];
const NotEmpty = () => {
  return (
    <div className="mt-6 flex flex-col gap-4 px-6 sm:px-0 lg:gap-5">
      {feedbackItems.map((item, index) => {
        return (
          <FeedbackItem
            upvotes={item.upvotes}
            comments={item.comments}
            title={item.title}
            content={item.content}
            tag={item.tag}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default NotEmpty;
