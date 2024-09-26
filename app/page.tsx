import DesktopAside from "./components/DesktopAside";
import Header from "./components/Header";
import Main from "./components/Main/";

export default function Home() {
  return (
    <div className="container mx-auto flex min-h-screen justify-center gap-[1.875rem] sm:pt-14">
      <DesktopAside />
      <div className="flex-1">
        <Header />
        <Main />
      </div>
    </div>
  );
}
