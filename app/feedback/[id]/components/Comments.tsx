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
        <p className="mt-4 text-feedback-paragraph">
          Brawl Stars is definitely better than Deadlock so it&apos;s worth your
          time.
        </p>
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
        <p className="mt-4 text-feedback-paragraph">
          Deadlock is just for people who don&apos;t touch grass, like
          seriously. Imagine spending 1K hours on a game, you could easily learn
          an awesome framework like NextJS.
        </p>
        <div className="flex gap-6">
          <div className="flex flex-col pb-36">
            <Separator
              className="mt-6 bg-[#8C92B3] opacity-25"
              orientation="vertical"
            />
          </div>
          <div className="flex-1 py-6">
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
            <p className="mt-4 text-feedback-paragraph">
              <span className="body-3 font-bold leading-[0] text-purple">
                @SolaceTheGrandHero
              </span>{" "}
              But imo, Persona is the king of all games. MOBA sucks, like
              really.
            </p>
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
              <p className="mt-4 text-feedback-paragraph">
                <span className="body-3 font-bold leading-[0] text-purple">
                  @SolaceTheGrandHero
                </span>{" "}
                NextJS is better than Vite, change my mind looool.
              </p>
            </div>
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
              <p className="mt-4 text-feedback-paragraph">
                <span className="body-3 font-bold leading-[0] text-purple">
                  @SolaceTheGrandHero
                </span>{" "}
                I&apos;m the final boss for Web Development, just like a
                souls-like game, enjoy the show.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
