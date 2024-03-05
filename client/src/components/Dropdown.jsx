import { useState } from "react";
import { Triangle } from "react-feather";

const Dropdown = ({ placeholder, values }) => {
  const [isDropped, setIsDropped] = useState(false);
  const handleClick = () => {
    setIsDropped(!isDropped);
  };
  return (
    <div className="relative flex flex-col">
      <button
        onClick={handleClick}
        className={`${isDropped ? "rounded-b-none border-b-2" : "shadow-lg shadow-slate-200"} relative flex items-center justify-between rounded-lg border border-slate-200 p-[20px] hover:bg-slate-100`}
      >
        <p className="text-[1.15rem] text-zinc-500">{placeholder}</p>
        <Triangle
          className="text-zinc-500"
          fill="#71717a"
          size={12}
          style={{ rotate: isDropped ? "" : "180deg" }}
        />
      </button>
      <div
        className={`${isDropped ? "" : "hidden"} absolute top-[70px] flex w-full flex-col rounded-b-lg rounded-t-none border border-t-0 border-slate-200 bg-white py-[20px] shadow-lg shadow-slate-100`}
      >
        {values.map((value, index) => {
          return (
            <button
              key={index}
              className="px-[20px] py-[10px] text-[1.15rem] hover:bg-slate-100 "
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
