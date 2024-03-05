import { Link } from "react-router-dom";
import Button from "../components/Button";
import InputGroup from "../components/InputGroup";
import PasswordInput from "../components/Passwordinput";
import { LogIn } from "react-feather";

const Account = () => {
  return (
    <div className="flex flex-col items-center gap-[50px] px-[37px] lg:flex-row lg:items-center lg:justify-center">
      <img
        src="img/profil.png"
        alt="Foto Profil"
        className="w-[400px] px-[20px]"
      />
      <div className="flex w-full flex-col lg:max-w-[911px] lg:rounded-lg lg:border lg:border-slate-200 lg:px-[90px] lg:py-[45px] lg:shadow-lg lg:shadow-slate-200">
        <div className="mb-[50px] flex flex-col lg:flex-row-reverse lg:items-center lg:justify-between">
          <Link to={"/"} className="flex items-center gap-[10px]">
            <LogIn style={{ rotate: "180deg" }} className="text-zinc-500" />
            <p>Logout</p>
          </Link>
          <h1 className="text-[3rem] font-medium">Data Akun</h1>
        </div>
        <div className="mb-[20px] flex flex-col gap-[20px] lg:flex-row lg:flex-wrap">
          <div className="lg:w-[350px]">
            <InputGroup
              label={"Username"}
              labelSize="1.5"
              value={"@radit.rchmd"}
              isDisabled
            />
          </div>
          <div className="lg:mb-0 lg:w-[350px]">
            <PasswordInput placeholder={"*******"} isDisabled />
          </div>
          <div className="lg:w-[350px]">
            <InputGroup
              label={"Nama Lengkap"}
              labelSize="1.5"
              value={"Raditya Atallahasyrif Rachmadie"}
              isDisabled
            />
          </div>
          <div className="lg:w-[350px]">
            <InputGroup
              label={"Alamat"}
              labelSize="1.5"
              value={"Tasbih 1"}
              isDisabled
            />
          </div>
          <div className="lg:w-[350px]">
            <InputGroup
              label={"Email"}
              labelSize="1.5"
              value={"radit@mail.com"}
              isDisabled
            />
          </div>
          <Link to={"/verifikasi"} className="lg:w-[350px] lg:self-end">
            <Button text={"Edit"} isFull />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Account;
