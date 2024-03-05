import InputGroup from "../components/InputGroup";
import FileInput from "../components/FileInput";
import Button from "../components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [judul, setJudul] = useState();
  const [foto, setFoto] = useState();
  const [penulis, setPenulis] = useState();
  const [penerbit, setPenerbit] = useState();
  const [tahunTerbit, setTahunTerbit] = useState();
  const [jumlahHalaman, setJumlahHalaman] = useState();
  const [kategori, setKategori] = useState();
  const [bahasa, setBahasa] = useState();
  const [lokasi, setLokasi] = useState();
  const [deskripsi, setDeskripsi] = useState();
  const [books, setBooks] = useState([{}]);

  useEffect(() => {
    async function fetchBooks() {
      await axios
        .get(`http://localhost:3000/book/edit/${id}`)
        .then((response) => {
          setBooks(response.data.books);
        })
        .catch((error) => console.log(error));
    }

    fetchBooks();
  }, []);

  console.log(books);

  const handleJudul = (input) => {
    setJudul(input.target.value);
  };
  // const handleFoto = (input) => {
  //   setFoto(input.target.files[0]);
  // };
  // const handlePenulis = (input) => {
  //   setPenulis(input.target.value);
  // };
  // const handlePenerbit = (input) => {
  //   setPenerbit(input.target.value);
  // };
  // const handleTahunTerbit = (input) => {
  //   setTahunTerbit(input.target.value);
  // };
  // const handleJumlahHalaman = (input) => {
  //   setJumlahHalaman(input.target.value);
  // };
  // const handleKategori = (input) => {
  //   setKategori(input.target.value);
  // };
  // const handleBahasa = (input) => {
  //   setBahasa(input.target.value);
  // };
  // const handleLokasi = (input) => {
  //   setLokasi(input.target.value);
  // };
  // const handleDeskripsi = (input) => {
  //   setDeskripsi(input.target.value);
  // };

  const handleSubmit = async (e, id) => {
    e.preventDefault();

    // const formData = new FormData();

    // await axios
    //   .patch(`http://localhost:3000/book/edit/${id}`, formData, {
    //     headers: { "Content-Type": "multipart/form-data" },
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     if (response.data.uploaded == false) {
    //       console.log("upload failed");
    //       return;
    //     }

    //     navigate("/admin/buku");
    //   })
    //   .catch((error) => console.log(error));
  };

  return (
    <div className="px-[20px]">
      <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
        Edit Buku
      </h1>
      <form className="max-w-[722px]" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-[20px]">
          <div className="w-full sm:max-w-[350px]">
            <InputGroup
              label={"Judul buku"}
              hint={"Contoh: Filosofi Teras"}
              name={"judul"}
              required
              onChange={handleJudul}
              defaultValue={books[0].Judul || ""}
            />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <FileInput
              label={"Foto Cover"}
              hint={"Tipe: png, jpg, jpeg. Ukuran: <1mb"}
              name={"foto"}
              accept={".jpg, .JPG, .jpeg, .JPEG, .png, .PNG"}
              required
              // onChange={handleFoto}
            />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup
              label={"Penulis buku"}
              hint={"Contoh: Henry Manampiring"}
              name={"penulis"}
              required
              // onChange={handlePenulis}
              defaultValue={books[0].Penulis || ""}
            />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup
              label={"Penerbit"}
              hint={"Contoh: Gramedia"}
              name={"penerbit"}
              required
              // onChange={handlePenerbit}
              defaultValue={books[0].Penerbit || ""}
            />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup
              label={"Tahun Terbit"}
              hint={"Contoh: 15/02/2024"}
              name={"tahunTerbit"}
              required
              // onChange={handleTahunTerbit}
              defaultValue={books[0].TahunTerbit || ""}
            />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup
              label={"Jumlah Halaman"}
              hint={"Contoh: 100"}
              name={"jumlahHalaman"}
              required
              // onChange={handleJumlahHalaman}
              defaultValue={books[0].JumlahHalaman || ""}
            />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup
              label={"Kategori"}
              hint={"Filsafat"}
              name={"kategori"}
              required
              // onChange={handleKategori}
              defaultValue={"Kategori"}
            />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup
              label={"Bahasa"}
              hint={"Indonesia"}
              name={"bahasa"}
              required
              // onChange={handleBahasa}
              defaultValue={books[0].Bahasa || ""}
            />
          </div>
          <div className="w-full sm:max-w-[350px]">
            <InputGroup
              label={"Lokasi"}
              hint={"Dipisah dengan titik koma"}
              name={"lokasi"}
              required
              // onChange={handleLokasi}
              defaultValue={"Lokasi"}
            />
          </div>
          <div className="flex w-full flex-col gap-[10px] sm:max-w-[722px]">
            <label htmlFor="description">Deskripsi</label>
            <textarea
              required
              // onChange={handleDeskripsi}
              name={"deskripsi"}
              className="mb-[10px] h-[260px] w-full rounded-lg border border-[#757575] p-[30px] text-[1.15rem] text-zinc-500 "
              defaultValue={books[0].Deskripsi || ""}
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

export default EditBook;
