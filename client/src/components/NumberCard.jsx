const NumberCard = ({ value = "000", name = "name" }) => {
  return (
    <div className="rounded-lg bg-black px-[30px] py-[45px] text-white">
      <p className="text-[3rem] font-semibold">{value}</p>
      <p className="text-[1.5rem] font-medium text-zinc-500">{name}</p>
    </div>
  );
};

export default NumberCard;
