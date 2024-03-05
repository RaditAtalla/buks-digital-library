import { useState } from "react";
import { Eye, EyeOff } from "react-feather";

const PasswordInput = ({
  value,
  isDisabled,
  placeholder,
  required,
  onChange,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleClick = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className="w-full sm:mb-0">
      <p className="text-[1.5rem]">Password</p>
      <div className="flex items-center rounded-lg border border-[#757575] bg-white px-4 py-2">
        <input
          type={isShowPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          disabled={isDisabled}
          required={required}
          onChange={onChange}
          className="w-full text-[1.25rem] text-zinc-500 focus:outline-none"
        />
        {isShowPassword ? (
          <Eye className="text-zinc-500" onClick={handleClick} />
        ) : (
          <EyeOff className="text-zinc-500" onClick={handleClick} />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
