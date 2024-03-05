import InputGroup from "../components/InputGroup";
import Button from "../components/Button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddLokasi = () => {
  const navigate = useNavigate();

  const [lokasi, setLokasi] = useState();

  const handleLokasi = (input) => {
    setLokasi(input.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/lokasi/add", { lokasi })
      .then((response) => {
        console.log(response);
        if (response.data.isAdded) {
          navigate("/admin/lokasi");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="px-[20px]">
      <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
        Tambah Buku
      </h1>
      <form className="max-w-[722px]" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-[20px]">
          <div className="w-full sm:max-w-[350px]">
            <InputGroup
              label={"Lokasi"}
              hint={"Contoh: Perpustakaan Telkom"}
              name={"lokasi"}
              required
              onChange={handleLokasi}
            />
          </div>
        </div>
        <div className="my-[30px] sm:max-w-[200px]">
          <Button text={"Tambah buku"} isFull />
        </div>
      </form>
    </div>
  );
};

export default AddLokasi;
