const InputGroup = ({
  label,
  labelSize = "1.15",
  labelWeight,
  placeholder,
  hint,
  value,
  isDisabled,
  className,
  required,
  onChange,
  name,
  autoFocus,
  defaultValue,
  id
}) => {
  return (
    <div className={`flex flex-col gap-[10px] leading-none ${className}`}>
      <label
        htmlFor="judulBuku"
        className={`text-[${labelSize}rem] font-${labelWeight}`}
      >
        {label}
      </label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={isDisabled}
        required={required}
        onChange={onChange}
        name={name}
        autoFocus={autoFocus}
        className="w-full rounded-lg border border-[#757575] px-4 py-2 text-[1.25rem] text-zinc-500 focus:outline-none"
      />
      <p className="text-[1.15rem] text-zinc-500">{hint}</p>
    </div>
  );
};

export default InputGroup;
