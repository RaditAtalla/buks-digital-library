import { Search } from "react-feather";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="flex w-full items-center gap-[5px] rounded-lg border border-slate-200 bg-white px-[20px] py-[15px] shadow-md shadow-slate-200">
      <Search className="text-zinc-500" />
      <input
        type="text"
        className="w-full text-[1.25rem] text-zinc-500 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
