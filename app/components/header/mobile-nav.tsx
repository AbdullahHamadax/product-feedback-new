import HamburgerMenuIcon from "@/public/assets/shared/mobile/icon-hamburger.svg";
import Image from "next/image";

const MobileNav = () => {
  return (
    <div className="flex h-[4.5rem] items-center justify-between bg-gradient-to-r from-[#28A7ED] via-[#A337F6] to-[#E84D70] px-6 sm:hidden">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="body-2 font-bold">Frontend Mentor</p>
          <p className="body-3 text-[#D5DEFB]">Feedback Board</p>
        </div>
      </div>
      <Image src={HamburgerMenuIcon} alt="Hamburger Menu Icon"></Image>
    </div>
  );
};

export default MobileNav;
