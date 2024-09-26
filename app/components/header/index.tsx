import CategoryCard from "../shared/CategoryCard";
import GradientCard from "../shared/GradientCard";
import RoadmapCard from "../shared/RoadmapCard";
import MobileNav from "./MobileNav";
import SuggestionsBar from "./SuggestionsBar";

export default function Header() {
  return (
    <header className="flex flex-col sm:gap-10">
      <div className="hidden w-full gap-2.5 sm:flex lg:hidden">
        <GradientCard />
        <CategoryCard />
        <RoadmapCard />
      </div>
      <MobileNav />
      <SuggestionsBar />
    </header>
  );
}
