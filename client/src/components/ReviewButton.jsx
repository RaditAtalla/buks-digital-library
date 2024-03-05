import { useState } from "react";
import Button from "./Button";
import { ChevronDown, Plus, Star } from "react-feather";

const ReviewButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  const handleClick = () => {
    setIsPressed(!isPressed);
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="mb-[20px] flex max-w-[216px] items-center gap-[10px] rounded-lg border border-slate-100 p-[20px] shadow-lg shadow-slate-100 transition-all"
      >
        {isPressed ? (
          <Plus className="text-zinc-500" style={{ rotate: "45deg" }} />
        ) : (
          <>
            <Plus className="text-zinc-500" />
            <p className="text-[1.15rem] leading-none text-zinc-500">
              Tambah Ulasan
            </p>
          </>
        )}
      </button>
      {isPressed ? (
        <>
          <textarea
            placeholder="Tambah Ulasan.."
            className="mb-[10px] h-[260px] w-full rounded-lg border border-zinc-500 bg-zinc-200 p-[30px] text-[1.15rem] text-zinc-500 "
          />
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-[5px] divide-x divide-zinc-500 rounded-lg border border-zinc-500 bg-zinc-100 p-[10px]">
              <div className="flex items-center gap-[5px]">
                <p className="text-[1.15rem] text-zinc-500">5</p>
                <Star className="text-zinc-500" />
              </div>
              <ChevronDown className="text-zinc-500" />
            </button>
            <Button text={"Tambah"} />
          </div>
        </>
      ) : null}
    </>
  );
};

export default ReviewButton;
