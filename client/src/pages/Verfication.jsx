import Button from "../components/Button";
import { Link } from "react-router-dom";
import PasswordInput from "../components/Passwordinput";

const Verification = () => {
  return (
    <div className="mx-auto max-w-[482px] rounded-lg border border-slate-200 px-[66px] pb-[100px] pt-[45px] shadow-lg shadow-slate-200">
      <div className="mb-[30px]">
        <h1 className="text-[3rem] font-medium">Verifikasi</h1>
        <p className="text-[1.25rem] text-zinc-500">
          Harap masukkan password sebelum mengubah data
        </p>
      </div>
      <div className="mb-[50px]">
        <PasswordInput />
      </div>
      <Link to={"/edit"}>
        <Button text={"Masuk"} isFull />
      </Link>
    </div>
  );
};

export default Verification;
