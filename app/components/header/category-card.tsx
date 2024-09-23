import { cn } from "@/lib/utils";
import { Toggle } from "@radix-ui/react-toggle";

const CategoryCard = () => {
  const categories = [
    { name: "All", isActive: true },
    { name: "UI", isActive: false },
    { name: "UX", isActive: false },
    { name: "Enhancement", isActive: false },
    { name: "Bug", isActive: false },
    { name: "Feature", isActive: false },
  ];
  return (
    <div className="h-[11.13rem]  flex-1 rounded-[0.63rem] bg-white pb-3 pl-6 pr-3 pt-6 text-center">
      <div className="flex flex-wrap sm:gap-x-1 sm:gap-y-2 md:gap-x-2 md:gap-y-4 ">
        {categories.map((category, index) => {
          return (
            <Toggle
              className={cn(
                "body-3 rounded-[0.63rem] bg-white-1 px-4 py-1 text-blue hover:bg-blue-card-hover",
                category.isActive && "bg-blue text-white hover:bg-blue"
              )}
              key={index}
            >
              {category.name}
            </Toggle>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCard;
