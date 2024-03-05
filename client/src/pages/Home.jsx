import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  function handleView(id) {
    navigate(`../lihat/${id}`);
  }

  axios.get("http://localhost:3000/");

  useEffect(() => {
    async function fetchBook() {
      const reponse = await axios.get("http://localhost:3000/book");
      setBooks(reponse.data.books);
    }

    fetchBook();
  }, []);

  return (
    <div className="md:px-10 xl:flex xl:items-start xl:gap-[50px]">
      <img
        src="img/banner.png"
        alt="banner"
        className="hidden w-[300px] border border-slate-200 object-contain shadow-lg shadow-slate-200 xl:inline-block"
      />
      <div>
        <div className="mb-[50px] flex w-full flex-col gap-[10px] px-[20px] sm:px-0 lg:flex-row">
          <SearchBar placeholder={"Cari buku.."} />
          <div className="w-full lg:w-[300px]">
            <Dropdown
              placeholder={"Kategori"}
              values={["Filasafat", "Psikologi", "Ilmiah", "Novel", "Komik"]}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center  justify-center gap-[50px]">
          {books.map((book) => {
            return (
              <BookCard
                bukuId={book.BukuID}
                key={book.BukuID}
                title={book.Judul}
                author={book.Penulis}
                image={
                  "http://localhost:3000/book-covers/" +
                  book.FotoCover +
                  book.CoverDataType
                }
                action={() => handleView(book.BukuID)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
