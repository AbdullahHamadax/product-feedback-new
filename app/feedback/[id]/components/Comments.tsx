import { Separator } from "@/components/ui/separator";
import OmarPicture from "@/public/assets/user-images/GrandHero.webp";
import Image from "next/image";
const Comments = () => {
  return (
    <div className="rounded-[0.63rem] bg-white px-6">
      <h3 className="mt-6 text-feedback-title">4 Comments</h3>
      <div className="py-6">
        <div className="flex items-center gap-4">
          <Image
            src={OmarPicture}
            alt="Omar"
            className="size-10 rounded-full"
          />
          <div className="flex flex-1 flex-col">
            <p className="body-3 font-bold text-feedback-title">
              Omar Al Seddik
            </p>
            <p className="text-feedback-paragraph">@SolaceTheGrandHero</p>
          </div>
          <p className="body-3 text-blue">Reply</p>
        </div>
        <div>
          <p className="mt-4 text-feedback-paragraph">
            Brawl Stars is definitely better than Deadlock so it&apos;s worth
            your time.
          </p>
        </div>
      </div>
      <Separator className=" bg-[#8C92B3] opacity-25" />

      <div className="py-6">
        <div className="flex items-center gap-4">
          <Image
            src={OmarPicture}
            alt="Omar"
            className="size-10 rounded-full"
          />
          <div className="flex flex-1 flex-col">
            <p className="body-3 font-bold text-feedback-title">
              Omar Al Seddik
            </p>
            <p className="text-feedback-paragraph">@SolaceTheGrandHero</p>
          </div>
          <p className="body-3 text-blue">Reply</p>
        </div>
        <div>
          <p className="mt-4 text-feedback-paragraph">
            Deadlock is just for people who don&apos;t touch grass, like
            seriously. Imagine spending 1K hours on a game, you could easily
            learn an awesome framework like NextJS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
