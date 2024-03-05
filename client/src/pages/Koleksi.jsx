import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

const Koleksi = () => {
  return (
    <div className="px-[20px] md:px-[37px]">
      <h2 className="mb-[20px] text-[3rem] font-medium">Sedang dipinjam</h2>
      <SearchBar placeholder={"Cari buku.."} />
      <div className="mt-[30px] flex flex-wrap items-center justify-center gap-[50px] md:justify-start">
        <BookCard
          image={"img/cover.jpg"}
          date={"30/01/24"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          date={"30/01/24"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          date={"30/01/24"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
      </div>
      <h2 className="mb-[20px] mt-[50px] text-[3rem] font-medium">Disukai</h2>
      <SearchBar placeholder={"Cari buku.."} />
      <div className="mt-[30px] flex flex-wrap items-center justify-center gap-[50px] md:justify-start">
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
        <BookCard
          image={"img/cover.jpg"}
          title={"Filosofi Teras"}
          author={"Henry Manampiring"}
        />
      </div>
    </div>
  );
};

export default Koleksi;
