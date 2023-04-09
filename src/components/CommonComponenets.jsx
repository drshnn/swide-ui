import { useState } from "react";

export const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <div className="dropdown relative flex flex-col items-center">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md outline-none hover:bg-blue-600 active:bg-blue-700"
        onClick={() => setToggleDropdown((prev) => !prev)}
      >
        dropdown
      </button>
      {toggleDropdown && (
        <ul className="absolute top-12  flex flex-col py-3 px-2 w-36 bg-white rounded-md border-2 border-gray-200">
          <li>first item</li>
          <li>second item</li>
          <li>third item</li>
        </ul>
      )}
    </div>
  );
};
