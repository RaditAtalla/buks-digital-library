import { Edit, Plus, Trash } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import formatDate from "../functions/formatDate";

const Buku = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/book/delete/${id}`)
      .then((response) => console.log(response.data.message))
      .catch((error) => console.log(error));

    navigate(0);
  };

  const handleEdit = (id) => {
    navigate(`edit/${id}`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/book")
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((error) => console.log(error));
  }, []);

  let i = 1;
  return (
    <div className="px-[20px]">
      <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
        Buku
      </h1>
      <div className="flex gap-[8px]">
        <SearchBar placeholder={"Cari buku.."} />
        <Link
          to={"tambah"}
          className="flex items-center justify-center rounded-lg bg-black px-[15px]"
        >
          <Plus color="white" />
        </Link>
      </div>
      <table className="mt-[30px] w-full border-separate border-spacing-y-[20px] text-left">
        <thead>
          <tr>
            <th className="px-[10px]">#</th>
            <th>Judul</th>
            <th>Penulis</th>
            <th>Tgl. Ditambah</th>
            <th className="px-[10px]">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => {
            return (
              <ListCard
                key={book.BukuID}
                no={i++}
                img={
                  "http://localhost:3000/book-covers/" +
                  book.FotoCover +
                  book.CoverDataType
                }
                col1={book.Judul}
                col2={book.Penulis}
                col3={`${formatDate(book.TanggalDitambah)[1]} ${formatDate(book.TanggalDitambah)[2]} ${formatDate(book.TanggalDitambah)[3]}`}
                icon1={<Edit onClick={() => handleEdit(book.BukuID)} />}
                icon2={<Trash onClick={() => handleDelete(book.BukuID)} />}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Buku;
