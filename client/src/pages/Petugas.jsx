import { Plus, Slash } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import InputGroup from "../components/InputGroup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import formatDate from "../functions/formatDate";

const Petugas = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [petugas, setPetugas] = useState([]);
  const [revoke, setRevoke] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleUsername = (input) => {
    setUsername(input.target.value);
  };
  const handleRevoke = async (id) => {
    setRevoke("revoke");

    await axios
      .post("http://localhost:3000/moderator/revoke", { id })
      .catch((error) => console.log(error));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/moderator/add", { username })
      .then((response) => {
        if (response.data.isAdmin) {
          console.log(`${username} adalah petugas baru`);
          navigate(0);
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/moderator")
      .then((response) => {
        setPetugas(response.data.petugas);
      })
      .catch((error) => console.log(error));

    return setRevoke("");
  }, [revoke]);

  let i = 1;

  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        shouldCloseOnOverlayClick
        shouldCloseOnEsc
        onRequestClose={handleModal}
        overlayClassName={
          "fixed top-0 left-0 right-0 bottom-0 bg-slate-100 bg-opacity-25"
        }
        className={
          "absolute left-[40px] right-[40px] top-1/4 max-w-[482px] overflow-auto rounded-lg border-2 border-slate-200 bg-white px-[20px] py-[20px] outline-none sm:left-1/3"
        }
      >
        <form onSubmit={handleSubmit}>
          <p className="mb-[35px] text-[3rem] font-bold">Tambah petugas</p>
          <InputGroup
            label={"Username"}
            labelSize="1.5"
            className={"mb-[50px]"}
            onChange={handleUsername}
            autoFocus
          />
          <Button text={"Tambah"} isFull />
        </form>
      </ReactModal>
      <div className="px-[20px]">
        <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
          Petugas
        </h1>
        <div className="flex gap-[8px]">
          <SearchBar placeholder={"Cari buku.."} />
          <div
            onClick={handleModal}
            className="flex items-center justify-center rounded-lg bg-black px-[15px]"
          >
            <Plus color="white" />
          </div>
        </div>
        <table className="mt-[30px] w-full border-separate border-spacing-y-[20px] text-left">
          <thead>
            <tr>
              <th className="px-[10px]">#</th>
              <th>Nama Lengkap</th>
              <th>Username</th>
              <th>Tgl. Bergabung</th>
              <th className="px-[10px]">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {petugas.map((ptgs) => {
              return (
                <ListCard
                  key={ptgs.UserID}
                  no={i++}
                  col1={ptgs.NamaLengkap}
                  col2={ptgs.Username}
                  col3={`${formatDate(ptgs.TanggalBergabung)[1]} ${formatDate(ptgs.TanggalBergabung)[2]} ${formatDate(ptgs.TanggalBergabung)[3]}`}
                  icon1={<Slash onClick={() => handleRevoke(ptgs.UserID)} />}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Petugas;
