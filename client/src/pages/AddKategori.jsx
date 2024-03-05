import InputGroup from "../components/InputGroup";
import Button from "../components/Button";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddKategori = () => {
  const navigate = useNavigate();

  const [categories, setCategories] = useState();

  const handleCategory = (input) => {
    setCategories(input.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/category/add", { categories })
      .then((response) => {
        console.log(response);
        if (response.data.isAdded) {
          navigate("/admin/kategori");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="px-[20px]">
      <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
        Tambah Kategori
      </h1>
      <form className="max-w-[722px]" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-[20px]">
          <div className="w-full sm:max-w-[350px]">
            <InputGroup
              label={"Kategori"}
              hint={"Contoh: Filsafat"}
              name={"kategori"}
              required
              onChange={handleCategory}
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

export default AddKategori;
