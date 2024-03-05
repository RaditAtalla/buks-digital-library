import { Heart, Home, Menu, User } from "react-feather";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  const { pathname } = location;
  const isHome = pathname == "/home" ? true : false;
  const isCollection = pathname == "/koleksi" ? true : false;
  const isAccount = pathname == "/akun" ? true : false;

  return (
    <header className="fixed z-50 flex w-full flex-col">
      <nav className="flex items-center justify-between bg-white px-[20px] py-2 shadow-md shadow-slate-200 md:px-10">
        <div className="flex items-center gap-2">
          <img src="img/logo.png" width={55} />
          <div>
            <p className="font-roboto-slab text-[2rem] font-bold leading-none">
              BUKS
            </p>
            <p className="font-roboto-slab text-[1.15rem] font-light leading-none">
              Perpustakaan Digital
            </p>
          </div>
        </div>
        <div>
          <div
            className="rounded-lg p-3 shadow-md hover:bg-slate-100 md:hidden"
            onClick={handleClick}
          >
            <Menu />
          </div>
          <div className="hidden gap-5 md:flex">
            {isHome ? (
              <Link to={"/home"}>
                <Home fill="black" />
              </Link>
            ) : (
              <Link to={"/home"}>
                <Home />
              </Link>
            )}
            {isCollection ? (
              <Link to={"/koleksi"}>
                <Heart fill="black" />
              </Link>
            ) : (
              <Link to={"/koleksi"}>
                <Heart />
              </Link>
            )}
            {isAccount ? (
              <Link to={"/akun"}>
                <User fill="black" />
              </Link>
            ) : (
              <Link to={"/akun"}>
                <User />
              </Link>
            )}
          </div>
        </div>
      </nav>
      {isOpen ? (
        <div className="me-1 flex gap-3 self-end rounded-b-lg border bg-white px-5 py-5 shadow-lg md:hidden">
          {isHome ? (
            <Link to={"/home"}>
              <Home fill="black" />
            </Link>
          ) : (
            <Link to={"/home"}>
              <Home />
            </Link>
          )}
          {isCollection ? (
            <Link to={"/koleksi"}>
              <Heart fill="black" />
            </Link>
          ) : (
            <Link to={"/koleksi"}>
              <Heart />
            </Link>
          )}
          {isAccount ? (
            <Link to={"/akun"}>
              <User fill="black" />
            </Link>
          ) : (
            <Link to={"/akun"}>
              <User />
            </Link>
          )}
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
