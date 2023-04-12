import { useEffect, useState } from "react";

export const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const listItemHoverStyle = "hover:bg-gray-100 rounded-md p-2 cursor-pointer";

  return (
    <div className="dropdown relative flex flex-col items-center">
      <button
        id="dropdown-button"
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

export const Calendar = () => {
  let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weak = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  console.log(date, currYear, currMonth);
  console.log("first" + " " + new Date(currYear, currMonth, 1).getDay());
  console.log("last" + " " + new Date(currYear, currMonth + 1, 0).getDate());
  return (
    <div className="calander flex flex-col gap-4 h-[27rem] w-[27rem] rounded-md border-2 border-gray-200 p-7 bg-white">
      <div className="month-year h-10 w-full flex items-center justify-between">
        <div className="flex items-center justify-center rounded-full w-10 h-10 hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-left"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </div>
        <div className="flex items-center justify-center">{`${months[selectedMonth]}, ${selectedYear}`}</div>
        <div className="flex items-center justify-center rounded-full w-10 h-10 hover:bg-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-chevron-right"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
      <div className="day flex-1 flex  flex-col items-center gap-2">
        <div className="week grid grid-cols-7 gap-2">
          {weak.map((day, index) => (
            <span
              className="h-10 w-10 flex items-center justify-center "
              key={index}
            >
              {day}
            </span>
          ))}
        </div>
        <div className=" grid grid-cols-7 gap-2 ">
          {[...Array(42)].map((i, j) => (
            <span
              key={j}
              className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-gray-200"
            >
              {j}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
