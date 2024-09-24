const CategoryCard = () => {
  return (
    <div className="flex h-[11.13rem]  flex-1 flex-col gap-6 rounded-[0.63rem] bg-white px-6 pt-[1.125rem]">
      <div className="flex items-center justify-between">
        <h3 className="text-feedback-title">Roadmap</h3>
        <p className="body-3 text-blue hover:underline">View</p>
      </div>
      <ul className="flex flex-col">
        <li className="body-1 flex items-center justify-between text-feedback-paragraph">
          <div className="flex items-center gap-4">
            <span className="size-2 rounded-full bg-orange" />
            <p>Planned</p>
          </div>
          <p className="font-bold">0</p>
        </li>
        <li className="body-1 flex items-center justify-between text-feedback-paragraph">
          <div className="flex items-center gap-4">
            <span className="size-2 rounded-full bg-purple" />
            <p>In-Progress</p>
          </div>
          <p className="font-bold">0</p>
        </li>
        <li className="body-1 flex items-center justify-between text-feedback-paragraph">
          <div className="flex items-center gap-4">
            <span className="size-2 rounded-full bg-cyan" />
            <p>Live</p>
          </div>
          <p className="font-bold">0</p>
        </li>
      </ul>
    </div>
  );
};

export default CategoryCard;
