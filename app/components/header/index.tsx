import CategoryCard from "./category-card";
import GradientCard from "./gradient-card";
import MobileNav from "./mobile-nav";
import RoadmapCard from "./roadmap-card";
import SuggestionsBar from "./suggestions-bar";

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
