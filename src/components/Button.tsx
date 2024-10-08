import { ReactNode } from "react";

interface ButtonProps {
  text: string | ReactNode;
  transparent?: boolean;
  onClick?: () => void;
  textSize?: "small" | "large";
  buttonSize?: "small" | "large";
  private?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  transparent = false,
  onClick,
  textSize = "small",
  buttonSize = "small",
  private: isPrivate = false,
}) => {
  return (
    <button
      className={`${
        transparent ? "bg-transparent" : "bg-light-purple"
      } rounded-lg font-semibold ${
        textSize === "small"
          ? "text-[14px] sm:text-[16px]"
          : "text-[16px] sm:text-[20px]"
      } ${
        buttonSize === "small" ? "w-32 sm:w-36 h-10" : "w-32 sm:w-40 h-14"
      } border-2 border-light-purple leading-tight p-0 flex items-center justify-center ${
        isPrivate ? "cursor-not-allowed" : "hover:filter hover:brightness-[1.2]"
      }`}
      onClick={!isPrivate ? onClick : undefined} // Disable onClick if private
      disabled={isPrivate} // Disable the button if private
      title={isPrivate ? "Sorry, repository is private" : ""} // Show hover text if private
    >
      {text}
    </button>
  );
};

export default Button;
