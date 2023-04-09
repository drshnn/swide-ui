import { useState } from "react";

export const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const listItemHoverStyle = "hover:bg-gray-200 rounded-md p-2 cursor-pointer";
  return (
    <div className="dropdown relative flex flex-col items-center">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded-md outline-none hover:bg-blue-600 active:bg-blue-700"
        onClick={() => setToggleDropdown((prev) => !prev)}
      >
        dropdown
      </button>
      {toggleDropdown && (
        <ul className="absolute top-12 flex flex-col py-3 px-2 w-36 bg-white rounded-md border-2 border-gray-200 ">
          <li className={listItemHoverStyle}>first item</li>
          <li className={listItemHoverStyle}>second item</li>
          <li className={listItemHoverStyle}>third item</li>
        </ul>
      )}
    </div>
  );
};
