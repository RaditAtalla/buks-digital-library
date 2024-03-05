import { Edit, Plus, Trash } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Kategori = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/category/delete/${id}`)
      .then((response) => console.log(response.data.message))
      .catch((error) => console.log(error));

    navigate(0);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/category")
      .then((response) => {
        setCategories(response.data.category);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(categories);

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
            <th>Kategori</th>
            <th className="px-[10px]">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            return (
              <ListCard
                key={category.KategoriID}
                no={i++}
                col1={category.NamaKategori}
                icon2={
                  <Trash onClick={() => handleDelete(category.KategoriID)} />
                }
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Kategori;
