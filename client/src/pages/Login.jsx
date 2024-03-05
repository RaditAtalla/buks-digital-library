import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputGroup from "../components/InputGroup";
import PasswordInput from "../components/Passwordinput";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [hasUsername, setHasUsername] = useState(true);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const handleUsername = (input) => {
    setUsername(input.target.value);
  };
  const handlePassword = (input) => {
    setPassword(input.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:3000/user/login", {
        username,
        password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.hasUsername == false) {
          console.log("no username found");
          setHasUsername(false);
          return;
        }

        if (response.data.isPasswordCorrect == false) {
          console.log("password incorrect");
          setIsPasswordCorrect(false);
          return;
        }

        if (response.data.isAdmin) {
          navigate("/admin/laporan");
          return;
        }

        navigate("/home");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-[20px] sm:mx-auto sm:block sm:w-[500px] sm:self-center sm:rounded-lg sm:border sm:border-slate-200 sm:px-[66px] sm:py-[45px] sm:shadow-lg sm:shadow-slate-200"
    >
      <h1 className="mb-[60px] text-[3rem] font-medium">Masuk</h1>
      <div className="mb-[50px]">
        <InputGroup
          label={"Username"}
          labelSize="1.5"
          required
          onChange={handleUsername}
        />
        {hasUsername ? (
          ""
        ) : (
          <p className="mt-1 text-red-500">Username tidak ditemukan!</p>
        )}
        <PasswordInput required onChange={handlePassword} />
        {isPasswordCorrect ? (
          ""
        ) : (
          <p className="mt-1 text-red-500">Password salah!</p>
        )}
        <p className="text-[1.25rem] text-zinc-500">
          Belum ada akun?{" "}
          <Link to={"/daftar"} className="underline">
            Daftar
          </Link>
        </p>
      </div>
      <div className="">
        <Button text={"Masuk"} isFull />
      </div>
    </form>
  );
};

export default Login;
