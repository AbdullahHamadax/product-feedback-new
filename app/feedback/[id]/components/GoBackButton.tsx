import { ChevronLeft } from "lucide-react";

const GoBackButton = () => {
  return (
    <div className="flex items-center gap-4 ">
      <ChevronLeft className="text-blue" size={20} strokeWidth={3} />
      <p className="body-3 cursor-pointer text-feedback-paragraph hover:underline">
        Go Back
      </p>
    </div>
  );
};

export default GoBackButton;
