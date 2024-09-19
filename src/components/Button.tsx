interface ButtonProps {
  text: string;
  transparent?: boolean;
  onClick: () => void;
  textSize?: "small" | "large";
  buttonSize?: "small" | "large";
}

const Button: React.FC<ButtonProps> = ({
  text,
  transparent = false,
  onClick,
  textSize = "small",
  buttonSize = "small",
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
        buttonSize === "small" ? "w-28 sm:w-32 h-10" : "w-28 sm:w-32 h-14"
      } border border-light-purple leading-tight p-0 flex items-center justify-center hover:filter hover:brightness-[1.2]`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
