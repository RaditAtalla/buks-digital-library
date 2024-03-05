import { Edit, Plus, Trash } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Lokasi = () => {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/lokasi/delete/${id}`)
      .then((response) => console.log(response.data.message))
      .catch((error) => console.log(error));

    navigate(0);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/lokasi")
      .then((response) => {
        setLocations(response.data.locations);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(locations);

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
            <th>Lokasi</th>
            <th className="px-[10px]">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location) => {
            return (
              <ListCard
                key={location.LokasiID}
                no={i++}
                col1={location.Lokasi}
                icon2={
                  <Trash onClick={() => handleDelete(location.LokasiID)} />
                }
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Lokasi;
