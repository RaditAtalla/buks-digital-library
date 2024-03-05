const Button = ({ text, action, variant, isFull }) => {
  return (
    <button
      className={`rounded-md px-[24px] py-[10px] text-center text-[1.25rem] font-medium ${variant == "outline" ? "bg-transparent text-neutral-950" : "bg-neutral-950 text-white"} ${isFull ? "w-full" : ""} hover:bg-neutral-900`}
      onClick={action}
    >
      {text}
    </button>
  );
};

export default Button;
