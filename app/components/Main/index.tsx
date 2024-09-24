import Empty from "./Empty";
import NotEmpty from "./NotEmpty";

const Main = () => {
  const feedbackItems = [
    {
      title: "hi",
      content: "test",
      upvotes: 12,
      category: "UI",
      comments: [
        {
          username: "Omar",
          tag: "SolaceHero",
          content: "I hate brawl stars",
          imageUrl: "",
        },
      ],
    },
  ];
  return <main>{feedbackItems ? <NotEmpty /> : <Empty />}</main>;
};

export default Main;
