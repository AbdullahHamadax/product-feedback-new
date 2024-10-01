import { Button } from "@/components/ui/button";
import DetectiveIcon from "@/public/assets/suggestions/illustration-empty.svg";
import Image from "next/image";
import Link from "next/link";
const Empty = () => {
  return (
    <div className="mx-6 my-8 sm:mx-0 ">
      <div className="flex flex-col items-center rounded-[0.63rem] bg-white px-6 py-[4.75rem] sm:py-[6.875rem]">
        <Image
          src={DetectiveIcon}
          alt="Detective"
          className="mb-10 sm:mb-[3.375rem]"
        />
        <h3 className="mb-3.5 text-feedback-title sm:mb-4">
          There is no feedback yet.
        </h3>
        <p className="body-3 sm:body-1 mb-6 max-w-[29rem] text-center text-[#647196] opacity-75 sm:mb-12">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Link href={"/feedback-form"}>
          <Button className="body-3 h-10 bg-purple px-4 font-bold text-white-2 hover:bg-purple-hover">
            + Add Feedback
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Empty;
