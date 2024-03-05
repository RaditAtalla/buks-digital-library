import { CheckSquare } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Peminjaman = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/book/peminjaman")
      .then((response) => setData(response.data.peminjaman))
      .catch((error) => console.log(error));
  }, []);

  let i = 1;
  return (
    <div className="px-[20px]">
      <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
        Permohonan Peminjaman
      </h1>
      <div className="flex gap-[8px]">
        <SearchBar placeholder={"Cari pengguna.."} />
      </div>
      <table className="mt-[30px] w-full border-separate border-spacing-y-[20px] text-left">
        <thead>
          <tr>
            <th className="px-[10px]">#</th>
            <th>Username</th>
            <th>Buku</th>
            <th>Lokasi</th>
            <th>Tanggal</th>
            <th className="px-[10px]">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => {
            <ListCard
              no={i++}
              col1={data.UserID}
              col2={data.BukuID}
              col3={data.TanggalPeminjaman}
              col4={data.TanggalPengembalian}
              icon1={<CheckSquare />}
            />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Peminjaman;
