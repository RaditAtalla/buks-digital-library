import Button from "./Button";
import HeartButton from "./HeartButton";
import axios from "axios";

const BookCard = ({ image, title, author, date, action, bukuId }) => {
  const id = bukuId;
  function handleLike(id) {
    axios.post(`http://localhost:3000/book/like/${id}`).catch(error => console.log(error))
  }

  return (
    <div className="w-[300px] rounded-lg border border-slate-200 shadow-md shadow-slate-200">
      <img
        src={image}
        alt="Cover buku"
        style={{ width: "100%", height: 226, objectFit: "contain" }}
      />
      <div className="flex flex-col gap-[50px] p-[20px]">
        <div>
          <h2 className="line-clamp-1 text-[1.5rem] font-medium leading-none">
            {title}
          </h2>
          <p className="line-clamp-1 text-[1.15rem] text-zinc-500">{author}</p>
          {date ? (
            <p className="line-clamp-1 text-[1.15rem] text-zinc-500">
              Dikembalikan pada {date}
            </p>
          ) : null}
        </div>
        <div className="flex gap-[8px]">
          <div className="w-full">
            <Button text="Lihat" isFull action={action} />
          </div>
          <HeartButton action={() => handleLike(id)} />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
