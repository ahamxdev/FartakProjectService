import React from "react";

interface InputCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({
  label,
  checked,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-2">
      <label className="relative inline-block">
        <input
          type="checkbox"
          id={label}
          checked={checked}
          onChange={onChange}
          className="peer w-4 h-4 md:w-6 md:h-6 border-2 border-[#495AFF] rounded-md appearance-none bg-white checked:bg-[#495AFF] checked:border-[#495AFF]"
        />
        <svg
          className="absolute top-1/3 left-1/2 w-3 h-3 md:w-4 md:h-4 text-white transform -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 pointer-events-none"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </label>

      <label
        className="text-base whitespace-nowrap font-extrabold text-[#000]"
        htmlFor={label}
      >
        {label}
      </label>
    </div>
  );
};

export default InputCheckbox;
