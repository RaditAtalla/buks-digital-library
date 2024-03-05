import { Eye, Slash } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import InputGroup from "../components/InputGroup";
import { Link, useNavigate } from "react-router-dom";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import formatDate from "../functions/formatDate";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [banUser, setBanUser] = useState();
  const [banId, setBanId] = useState();
  const [alasan, setAlasan] = useState();

  const navigate = useNavigate();

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleView = (id) => {
    navigate(`lihat/${id}`)
  }

  const handleAlasan = (input) => {
    setAlasan(input.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/user")
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => console.log("ada error: " + error));
  }, []);

  const handleSubmit = () => {
    const userId = banId;
    const alasanBan = alasan;
    axios
      .post(`http://localhost:3000/user/ban/${userId}`, { alasanBan })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

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
        <form action="" onSubmit={handleSubmit}>
          <p className="text-[3rem] font-bold">Ban Pengguna?</p>
          <p className="mb-[35px] text-[1.15rem] font-bold leading-none text-zinc-500">
            Ban {banUser}
          </p>
          <InputGroup
            label={"Alasan"}
            labelSize="1.5"
            className={"mb-[50px]"}
            onChange={handleAlasan}
          />
          <Button text={"Ban"} isFull />
        </form>
      </ReactModal>
      <div className="px-[20px]">
        <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
          Pengguna
        </h1>
        <div className="flex gap-[8px]">
          <SearchBar placeholder={"Cari buku.."} />
          <Link
            to={"banned"}
            className="flex items-center justify-center rounded-lg bg-black px-[15px]"
          >
            <Slash color="white" />
          </Link>
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
            {users.map((user) => {
              return (
                <ListCard
                  key={user.UserID}
                  no={i++}
                  col1={user.NamaLengkap}
                  col2={user.Username}
                  col3={`${formatDate(user.TanggalBergabung)[1]} ${formatDate(user.TanggalBergabung)[2]} ${formatDate(user.TanggalBergabung)[3]}`}
                  icon1={
                    <Eye onClick={() => handleView(user.UserID)} />
                  }
                  icon2={
                    <Slash
                      onClick={() => {
                        setBanId(user.UserID);
                        setBanUser(user.Username)
                        handleModal();
                      }}
                    />
                  }
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
