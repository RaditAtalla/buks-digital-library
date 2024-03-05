import { CheckSquare } from "react-feather";
import SearchBar from "../components/SearchBar";
import ListCard from "../components/ListCard";

const Pengembalian = () => {
  return (
    <div className="px-[20px]">
      <h1 className="mb-[35px] text-[1.5rem] font-semibold leading-none">
        Pengembalian
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
          <ListCard
            no={1}
            col1={"@radit.rchmd"}
            col2={"Filosofi Teras"}
            col3={"Telkom"}
            col4={"15/02/2024"}
            icon1={<CheckSquare />}
          />
          <ListCard
            no={2}
            col1={"@radit.rchmd"}
            col2={"Filosofi Teras"}
            col3={"Telkom"}
            col4={"15/02/2024"}
            icon1={<CheckSquare />}
          />
          <ListCard
            no={3}
            col1={"@radit.rchmd"}
            col2={"Filosofi Teras"}
            col3={"Telkom"}
            col4={"15/02/2024"}
            icon1={<CheckSquare />}
          />
          <ListCard
            no={4}
            col1={"@radit.rchmd"}
            col2={"Filosofi Teras"}
            col3={"Telkom"}
            col4={"15/02/2024"}
            icon1={<CheckSquare />}
          />
          <ListCard
            no={5}
            col1={"@radit.rchmd"}
            col2={"Filosofi Teras"}
            col3={"Telkom"}
            col4={"15/02/2024"}
            icon1={<CheckSquare />}
          />
          <ListCard
            no={6}
            col1={"@radit.rchmd"}
            col2={"Filosofi Teras"}
            col3={"Telkom"}
            col4={"15/02/2024"}
            icon1={<CheckSquare />}
          />
          <ListCard
            no={7}
            col1={"@radit.rchmd"}
            col2={"Filosofi Teras"}
            col3={"Telkom"}
            col4={"15/02/2024"}
            icon1={<CheckSquare />}
          />
          <ListCard
            no={8}
            col1={"@radit.rchmd"}
            col2={"Filosofi Teras"}
            col3={"Telkom"}
            col4={"15/02/2024"}
            icon1={<CheckSquare />}
          />
          <ListCard
            no={9}
            col1={"@radit.rchmd"}
            col2={"Filosofi Teras"}
            col3={"Telkom"}
            col4={"15/02/2024"}
            icon1={<CheckSquare />}
          />
          <ListCard
            no={10}
            col1={"@radit.rchmd"}
            col2={"Filosofi Teras"}
            col3={"Telkom"}
            col4={"15/02/2024"}
            icon1={<CheckSquare />}
          />
        </tbody>
      </table>
    </div>
  );
};

export default Pengembalian;
