import { useParams } from "react-router-dom";
import InputGroup from "../components/InputGroup";
import { useEffect, useState } from "react";
import axios from "axios";

const ViewUser = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([{}]);

  useEffect(() => {
    async function getDetails() {
      const response = await axios.get(`http://localhost:3000/user/view/${id}`);
      setDetails(response.data.details);
    }

    getDetails();
  }, []);

  return (
    <div className="flex flex-col items-center gap-[50px] px-[37px] lg:flex-row lg:items-center lg:justify-center">
      <img
        src="img/profil.png"
        alt="Foto Profil"
        className="w-[400px] px-[20px]"
      />
      <div className="flex w-full flex-col lg:max-w-[911px] lg:rounded-lg lg:border lg:border-slate-200 lg:px-[90px] lg:py-[45px] lg:shadow-lg lg:shadow-slate-200">
        <h1 className="mb-[50px] text-[3rem] font-medium">Data Akun</h1>
        <div className="mb-[20px] flex flex-col gap-[20px] lg:flex-row lg:flex-wrap">
          <div className="lg:w-[350px]">
            <InputGroup
              label={"Username"}
              labelSize="1.5"
              value={details[0].Username || ""}
              isDisabled
            />
          </div>
          <div className="lg:w-[350px]">
            <InputGroup
              label={"Nama Lengkap"}
              labelSize="1.5"
              value={details[0].NamaLengkap || ""}
              isDisabled
            />
          </div>
          <div className="lg:w-[350px]">
            <InputGroup
              label={"Alamat"}
              labelSize="1.5"
              value={details[0].Alamat || ""}
              isDisabled
            />
          </div>
          <div className="lg:w-[350px]">
            <InputGroup
              label={"Email"}
              labelSize="1.5"
              value={details[0].Email || ""}
              isDisabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
