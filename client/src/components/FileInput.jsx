const FileInput = ({
  label,
  accept,
  hint,
  labelSize = "1.15",
  required,
  onChange,
  name,
}) => {
  return (
    <div className="flex flex-col gap-[10px] leading-none">
      <label htmlFor="uploadCover" className={`text-[${labelSize}rem]`}>
        {label}
      </label>
      <input
        type="file"
        accept={accept}
        required={required}
        onChange={onChange}
        name={name}
        className="rounded-md border border-[#757575] text-[1.25rem] file:me-[20px] file:w-[50%] file:cursor-pointer file:rounded-md file:border-none file:bg-neutral-950 file:px-[20px] file:py-[14px] file:text-white lg:w-[350px]"
      />
      <p className="text-[1.15rem] text-zinc-500">{hint}</p>
    </div>
  );
};

export default FileInput;
