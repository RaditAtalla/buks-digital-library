import { useState } from "react";
import {
  BookOpen,
  Grid,
  LogIn,
  LogOut,
  Menu,
  User,
  Clipboard,
  MapPin,
} from "react-feather";
import { Link, NavLink } from "react-router-dom";

const SideBar = ({ isAdmin }) => {
  const [isDropped, setIsDropped] = useState(false);
  const handleClick = () => {
    setIsDropped(!isDropped);
  };

  const buttonStyle =
    "text-zinc-500 font-[1.15rem] py-[10px] px-[20px] transition-all cursor-pointer flex gap-2 hover:bg-neutral-800";
  const xlButtonStyle =
    "text-zinc-500 flex gap-2 items-center text-[1.15rem] px-[20px] py-[18px] bg-neutral-800 border border-neutral-700 rounded-lg w-[260px] hover:border-white transition";

  return (
    <>
      <div className="fixed block w-full xl:hidden">
        <div className="flex items-center justify-between bg-black px-[20px] py-2">
          <div className="flex items-center gap-2">
            <img src="/img/logo-white.png" alt="Logo" width={55} />
            <div>
              <p className="font-roboto-slab text-[2rem] font-bold leading-none text-white">
                BUKS
              </p>
              <p className="font-roboto-slab text-[1.15rem] font-light leading-none text-white">
                Perpustakaan Digital
              </p>
            </div>
          </div>
          <button
            onClick={handleClick}
            className="rounded-lg border-2 border-neutral-800 bg-neutral-900 p-3 hover:border-neutral-700"
          >
            <Menu color="white" />
          </button>
        </div>
        <div
          className={`${isDropped ? "flex flex-col gap-[10px]" : "hidden"} divide-y divide-neutral-800 rounded-b-lg bg-neutral-900 py-[10px] transition-all`}
        >
          <p className="mb-[20px] px-[20px] text-[1.5rem] font-semibold text-white">
            {isAdmin ? "Admin" : "Petugas"}
          </p>
          <NavLink
            to={"/admin/laporan"}
            className={[
              buttonStyle,
              ({ isActive }) => (isActive ? "active" : ""),
            ]}
          >
            <Grid /> Laporan
          </NavLink>
          <NavLink
            to={"/admin/buku"}
            className={[
              buttonStyle,
              ({ isActive }) => (isActive ? "active" : ""),
            ]}
          >
            <BookOpen /> Buku
          </NavLink>
          <NavLink
            to={"/admin/pengguna"}
            className={[
              buttonStyle,
              ({ isActive }) => (isActive ? "active" : ""),
            ]}
          >
            <User /> Pengguna
          </NavLink>
          <NavLink
            to={"/admin/pengguna"}
            className={[
              buttonStyle,
              ({ isActive }) => (isActive ? "active" : ""),
            ]}
          >
            <User /> Lokasi
          </NavLink>
          <NavLink
            to={"/admin/kategori"}
            className={[
              buttonStyle,
              ({ isActive }) => (isActive ? "active" : ""),
            ]}
          >
            <User /> Kategori
          </NavLink>
          <NavLink
            to={"/admin/peminjaman"}
            className={[
              buttonStyle,
              ({ isActive }) => (isActive ? "active" : ""),
            ]}
          >
            <LogOut style={{ rotate: "270deg" }} /> Peminjaman
          </NavLink>
          <NavLink
            to={"/admin/pengembalian"}
            className={[
              buttonStyle,
              ({ isActive }) => (isActive ? "active" : ""),
            ]}
          >
            <LogIn style={{ rotate: "90deg" }} /> Pengembalian
          </NavLink>
          {isAdmin ? (
            <NavLink
              to={"/admin/petugas"}
              className={[
                buttonStyle,
                ({ isActive }) => (isActive ? "active" : ""),
              ]}
            >
              <Clipboard /> Petugas
            </NavLink>
          ) : null}
        </div>
      </div>

      {/* XL Size sidebar */}
      <div className="hidden xl:fixed xl:flex xl:h-screen xl:flex-col xl:bg-black xl:px-[30px] xl:py-[50px]">
        <div className="flex items-center gap-2">
          <img src="/img/logo-white.png" alt="Logo" width={55} />
          <div>
            <p className="font-roboto-slab text-[2rem] font-bold leading-none text-white">
              BUKS
            </p>
            <p className="font-roboto-slab text-[1.15rem] font-light leading-none text-white">
              Perpustakaan Digital
            </p>
          </div>
        </div>
        <div className="mt-[50px] flex h-screen flex-col justify-between">
          <div className="flex flex-col gap-[20px]">
            <p className="text-[1.5rem] font-semibold text-white">
              {isAdmin ? "Admin" : "Petugas"}
            </p>
            <NavLink
              to={"/admin/laporan"}
              className={[
                xlButtonStyle,
                ({ isActive }) => (isActive ? "active" : ""),
              ]}
            >
              <Grid />
              Laporan
            </NavLink>
            <NavLink
              to={"/admin/buku"}
              className={[
                xlButtonStyle,
                ({ isActive }) => (isActive ? "active" : ""),
              ]}
            >
              <BookOpen />
              Buku
            </NavLink>
            <NavLink
              to={"/admin/pengguna"}
              className={[
                xlButtonStyle,
                ({ isActive }) => (isActive ? "active" : ""),
              ]}
            >
              <User /> Pengguna
            </NavLink>
            <NavLink
              to={"/admin/lokasi"}
              className={[
                xlButtonStyle,
                ({ isActive }) => (isActive ? "active" : ""),
              ]}
            >
              <MapPin /> Lokasi
            </NavLink>
            <NavLink
              to={"/admin/kategori"}
              className={[
                xlButtonStyle,
                ({ isActive }) => (isActive ? "active" : ""),
              ]}
            >
              <MapPin /> Kategori
            </NavLink>
            <NavLink
              to={"/admin/peminjaman"}
              className={[
                xlButtonStyle,
                ({ isActive }) => (isActive ? "active" : ""),
              ]}
            >
              <LogOut style={{ rotate: "270deg" }} /> Peminjaman
            </NavLink>
            <NavLink
              to={"/admin/pengembalian"}
              className={[
                xlButtonStyle,
                ({ isActive }) => (isActive ? "active" : ""),
              ]}
            >
              <LogIn style={{ rotate: "90deg" }} /> Pengembalian
            </NavLink>
            {isAdmin ? (
              <NavLink
                to={"/admin/petugas"}
                className={[
                  xlButtonStyle,
                  ({ isActive }) => (isActive ? "active" : ""),
                ]}
              >
                <Clipboard /> Petugas
              </NavLink>
            ) : null}
          </div>
          <Link
            to={"/"}
            className="flex w-[260px] items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800 px-[20px] py-[18px] text-[1.15rem] text-zinc-500 transition hover:border-white hover:text-white"
          >
            <LogOut style={{ rotate: "180deg" }} />
            Keluar
          </Link>
        </div>
      </div>
    </>
  );
};

export default SideBar;
