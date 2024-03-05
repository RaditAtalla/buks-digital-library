import { useState } from "react";
import Button from "../components/Button";
import InputGroup from "../components/InputGroup";
import PasswordInput from "../components/Passwordinput";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");

  const handleUsername = (input) => {
    setUsername(input.target.value);
  };
  const handlePassword = (input) => {
    setPassword(input.target.value);
  };
  const handleNama = (input) => {
    setNama(input.target.value);
  };
  const handleAlamat = (input) => {
    setAlamat(input.target.value);
  };
  const handleEmail = (input) => {
    setEmail(input.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/user/register", {
        username,
        password,
        nama,
        alamat,
        email,
      })
      .then((response) => {
        console.log(response.data);

        if (response.data.usernameTaken) {
          setUsername(true);
          return;
        }

        if (response.data.registered) {
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="px-[20px] sm:mx-auto sm:block sm:w-[850px] sm:border sm:border-slate-200 sm:px-[66px] sm:py-[45px] sm:shadow-lg sm:shadow-slate-200">
      <h1 className="mb-[60px] text-[3rem] font-medium">Daftar</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap items-center sm:gap-[15px]"
      >
        <div className="mb-[20px] w-full sm:mb-0 sm:max-w-[350px]">
          <InputGroup
            label={"Username"}
            labelSize="1.5"
            required
            onChange={handleUsername}
          />
        </div>
        <div className="mb-[20px] w-full sm:mb-0 sm:max-w-[350px]">
          <PasswordInput required onChange={handlePassword} />
        </div>
        <div className="mb-[20px] w-full sm:mb-0 sm:max-w-[350px]">
          <InputGroup
            label={"Nama Lengkap"}
            labelSize="1.5"
            required
            onChange={handleNama}
          />
        </div>
        <div className="mb-[20px] w-full sm:mb-0 sm:max-w-[350px]">
          <InputGroup
            label={"Alamat"}
            labelSize="1.5"
            required
            onChange={handleAlamat}
          />
        </div>
        <div className="mb-[20px] w-full sm:mb-0 sm:max-w-[350px]">
          <InputGroup
            label={"Email"}
            labelSize="1.5"
            required
            onChange={handleEmail}
          />
        </div>
        <div className="w-full sm:w-[350px] sm:self-end">
          <Button text={"Daftar"} isFull />
        </div>
      </form>
    </div>
  );
};

export default Register;
