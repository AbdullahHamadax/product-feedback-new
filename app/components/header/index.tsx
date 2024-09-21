import MobileNav from "./mobile-nav";
import { SuggestionsBar } from "./suggestions-bar";

export default function Header() {
  return (
    <header>
      <MobileNav />
      <SuggestionsBar />
    </header>
  );
}
