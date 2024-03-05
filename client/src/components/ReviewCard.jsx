import { Star } from "react-feather";

const ReviewCard = ({ image, name, username, rating, comment }) => {
  return (
    <div className="flex flex-col gap-[20px] rounded-lg border border-slate-100 px-[20px] py-[30px] shadow-lg shadow-slate-100">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-[10px]">
          <img src={image} alt="profil" width={50} />
          <div className="flex flex-col gap-2 leading-none">
            <p className="text-[1.15rem] font-medium">{name}</p>
            <p className="text-[1.15rem] text-zinc-500">{username}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <p className="text-[1.15rem] font-medium">{rating}</p>
          <Star />
        </div>
      </div>
      <p className="text-zinc-500">{comment}</p>
    </div>
  );
};

export default ReviewCard;
