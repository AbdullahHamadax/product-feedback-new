import CategoryCard from "../shared/CategoryCard";
import GradientCard from "../shared/GradientCard";
import RoadmapCard from "../shared/RoadmapCard";

const DesktopAside = () => {
  return (
    <aside className="hidden w-[15.938rem] gap-6 lg:flex lg:flex-col">
      <GradientCard />
      <CategoryCard />
      <RoadmapCard />
    </aside>
  );
};

export default DesktopAside;
