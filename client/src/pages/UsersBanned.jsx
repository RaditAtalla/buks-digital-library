import { Eye, ThumbsUp } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";
import axios from "axios";
import { useEffect, useState } from "react";
import formatDate from "../functions/formatDate";
import { useNavigate } from "react-router-dom";

const UsersBanned = () => {
  const [users, setUsers] = useState([]);
  const [unban, setUnban] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get("http://localhost:3000/user/banned");
      setUsers(response.data.bannedUsers);
    }

    fetchUsers();
    return setUnban("")
  }, [unban]);

  const handleView = (id) => {
    navigate(`../lihat/${id}`);
  };

  function handleUnban(id) {
    setUnban("unban")

    axios
      .post(`http://localhost:3000/user/unban/${id}`)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  let i = 1;

  return (
    <div className="px-[20px]">
      <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
        Pengguna di-ban
      </h1>
      <div className="flex gap-[8px]">
        <SearchBar placeholder={"Cari buku.."} />
      </div>
      <table className="mt-[30px] w-full border-separate border-spacing-y-[20px] text-left">
        <thead>
          <tr>
            <th className="px-[10px]">#</th>
            <th>Username</th>
            <th>Alasan</th>
            <th>Tgl. Ban</th>
            <th className="px-[10px]">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <ListCard
                key={user.UserID}
                no={i++}
                col1={user.Username}
                col2={user.AlasanBan}
                col3={`${formatDate(user.TanggalBan)[1]} ${formatDate(user.TanggalBan)[2]} ${formatDate(user.TanggalBan)[3]}`}
                icon1={<Eye onClick={() => handleView(user.UserID)} />}
                icon2={<ThumbsUp onClick={() => handleUnban(user.UserID)} />}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersBanned;
