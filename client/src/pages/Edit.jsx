import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import InputGroup from "../components/InputGroup";
import PasswordInput from "../components/Passwordinput";
import FileInput from "../components/FileInput";

const Edit = () => {
  return (
    <div className="px-[20px] lg:mx-auto lg:w-[850px] lg:rounded-lg lg:border lg:border-slate-200 lg:px-[66px] lg:py-[45px] lg:shadow-lg lg:shadow-slate-200">
      <h1 className="mb-[60px] text-[3rem] font-medium">Edit</h1>
      <div className="flex flex-wrap lg:justify-end lg:gap-[15px]">
        <div className="mb-[20px] w-full lg:w-[350px]">
          <InputGroup
            label={"Username"}
            labelSize="1.5"
            value={books.username}
          />
        </div>
        <div className="mb-[20px] w-full lg:w-[350px]">
          <PasswordInput value={"Passwordkuat"} />
        </div>
        <div className="mb-[20px] w-full lg:w-[350px]">
          <InputGroup
            label={"Nama Lengkap"}
            labelSize="1.5"
            value={"Raditya Atallahasyrif Rachmadie"}
          />
        </div>
        <div className="mb-[20px] w-full lg:w-[350px]">
          <InputGroup label={"Alamat"} labelSize="1.5" value={"Tasbih 1"} />
        </div>
        <div className="mb-[20px] w-full lg:w-[350px]">
          <InputGroup
            label={"Email"}
            labelSize="1.5"
            value={"radit@mail.com"}
          />
        </div>
        <div className="mb-[20px] w-full lg:w-[350px]">
          <FileInput
            label={"Foto Profil"}
            labelSize="1.5"
            accept={".jpg, .JPG, .jpeg, .JPEG, .png, .PNG"}
          />
        </div>
        <div className="w-full lg:w-[350px]">
          <Link to={"/akun"}>
            <Button text={"Simpan"} isFull />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Edit;
