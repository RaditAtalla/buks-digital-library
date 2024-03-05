const ListCard = ({ no, img, col1, col2, col3, col4, icon1, icon2 }) => {
  return (
    <tr className="rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200">
      <td className="px-[10px]">{no}</td>
      <td className="my-[20px] flex items-center gap-[5px]">
        <img src={img} className={`${img ? "w-[50px]" : "hidden"}`} />{" "}
        <span className="line-clamp-1">{col1}</span>
      </td>
      <td>{col2}</td>
      <td>{col3}</td>
      {col4 ? <td>{col4}</td> : null}
      <td className="px-[10px]">
        <div className="flex gap-[8px]">
          {icon1}
          {icon2}
        </div>
      </td>
    </tr>
  );
};

export default ListCard;
