import { useState } from "react";
import { Heart } from "react-feather";

const HeartButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const handlePress = () => {
    setIsPressed(!isPressed);
  };
  return (
    <button
      className="rounded-md border-2 border-neutral-950 p-[10px] hover:bg-slate-100"
      onClick={handlePress}
    >
      <Heart fill={isPressed ? "black" : "white"} />
    </button>
  );
};

export default HeartButton;
