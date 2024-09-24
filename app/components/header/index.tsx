import CategoryCard from "./CategoryCard";
import GradientCard from "./GradientCard";
import MobileNav from "./MobileNav";
import RoadmapCard from "./RoadmapCard";
import SuggestionsBar from "./SuggestionsBar";

export default function Header() {
  return (
    <header className="flex flex-col sm:mx-10 sm:mt-14 sm:gap-10">
      <div className="hidden w-full gap-2.5 sm:flex">
        <GradientCard />
        <CategoryCard />
        <RoadmapCard />
      </div>
      <MobileNav />
      <SuggestionsBar />
    </header>
  );
}
