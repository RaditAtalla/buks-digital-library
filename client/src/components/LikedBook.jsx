import { Heart } from "react-feather";

const LikedBooks = ({ title, author, likes, image }) => {
  return (
    <div className="w-[300px] rounded-lg border border-slate-200 shadow-lg shadow-slate-200">
      {/* <div className="bg-green-300 w-full h-[228px] rounded-lg"></div> */}
      <img
        src={image}
        alt="Cover buku"
        style={{ width: "100%", height: 226, objectFit: "contain" }}
      />
      <div className="p-[20px]">
        <div>
          <div className="mb-[10px] flex items-center gap-1">
            <Heart />
            <p className="text-[1.15rem] font-medium">{likes}</p>
          </div>
          <p className="text-[1.5rem] font-medium">{title}</p>
          <p className="text-[1.15rem] text-zinc-500">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default LikedBooks;
