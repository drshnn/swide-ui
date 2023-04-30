import React, { useEffect, useRef, useState } from "react";

export const Dropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const listItemHoverStyle = "hover:bg-gray-100 rounded-md p-2 cursor-pointer";
  const buttonRef = useRef();
  const menuRef = useRef();

  React.useEffect(() => {
    window.addEventListener("click", handleClick);

    // cleanup this component
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  function handleClick(event) {
    if (
      event.target !== buttonRef.current &&
      event.target !== menuRef.current
    ) {
      setToggleDropdown(false);
    }
  }

  return (
    <div className="dropdown relative flex flex-col items-center">
      <button
        id="dropdown-button"
        className="px-4 py-2 text-white bg-blue-500 rounded-md outline-none hover:bg-blue-600 active:bg-blue-700"
        onClick={(event) => {
          setToggleDropdown((prev) => !prev);
          event.stopPropagation();
        }}
        ref={buttonRef}
      >
        dropdown
      </button>
      {toggleDropdown && (
        <ul
          className="absolute top-12 flex flex-col py-3 px-2 w-36 bg-white rounded-md border-2 border-gray-200 "
          ref={menuRef}
        >
          {["First Item", "Second Item", "Third Item"].map((i, j) => (
            <li
              className={listItemHoverStyle}
              key={j}
              onClick={(event) => {
                setToggleDropdown(false);
                event.stopPropagation();
              }}
            >
              {i}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const Calendar = () => {
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
  const week = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const [date, setDate] = useState(new Date());
  const [dateArr, setDateArr] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(date.getMonth());
  const [selectedYear, setSelectedYear] = useState(date.getFullYear());
  useEffect(() => {
    setDateArr(createDateArray());
  }, [selectedMonth, selectedYear]);
  const decreaseMonthHandler = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth((prev) => prev - 1);
    }
  };

  const increaseMonthHandler = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth((prev) => prev + 1);
    }
  };
  const createDateArray = () => {
    let tempDateArr = [];
    let lastDateOfLastMonth = getLastDateOfLastMonth(
      selectedMonth,
      selectedYear
    );
    for (
      let i = new Date(selectedYear, selectedMonth, 1).getDay() - 1;
      i >= 0;
      i--
    ) {
      tempDateArr.push([lastDateOfLastMonth - i, -1]);
    }

    for (
      let i = 1;
      i <= new Date(selectedYear, selectedMonth + 1, 0).getDate();
      i++
    ) {
      tempDateArr.push([i, selectedMonth]);
    }
    let tempArrLength = tempDateArr.length;
    for (let i = 1; i <= 42 - tempArrLength; i++) {
      tempDateArr.push([i, -1]);
    }
    return tempDateArr;
  };
  function getLastDateOfLastMonth(month, year) {
    var date = new Date(year, month, 1);
    date.setDate(0);
    var lastDayOfLastMonth = date.getDate();
    return lastDayOfLastMonth;
  }
  createDateArray();
  return (
    <div className="calander flex flex-col gap-4 h-[27rem] w-[27rem] rounded-md border-2 border-gray-200 p-7 bg-white">
      <div className="month-year h-10 w-full flex items-center justify-between">
        <div
          className="flex items-center justify-center rounded-full w-10 h-10 hover:bg-gray-200"
          onClick={decreaseMonthHandler}
        >
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
        <div
          className="flex items-center justify-center rounded-full w-10 h-10 hover:bg-gray-200"
          onClick={increaseMonthHandler}
        >
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
          {week.map((day, index) => (
            <span
              className="h-10 w-10 flex items-center justify-center "
              key={index}
            >
              {day}
            </span>
          ))}
        </div>
        <div className=" grid grid-cols-7 gap-2 ">
          {dateArr.map((i, j) => (
            <span
              key={j}
              className={`h-10 w-10 flex items-center justify-center rounded-full ${
                i[1] === selectedMonth
                  ? "cursor-pointer hover:bg-black hover:text-white"
                  : "text-gray-400"
              }`}
            >
              {i[0]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ProfileDropdown = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const listItemHoverStyle = "hover:bg-gray-100 rounded-md p-2 cursor-pointer";
  const buttonRef = useRef();
  const menuRef = useRef();

  React.useEffect(() => {
    window.addEventListener("click", handleClick);

    // cleanup this component
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);
  function handleClick(event) {
    if (
      event.target !== buttonRef.current &&
      event.target !== menuRef.current
    ) {
      setToggleDropdown(false);
    }
  }

  return (
    <div className="profile-dropdown relative flex flex-col items-center">
      <div
        className="pic h-14 w-14  rounded-full border-2 border-gray-200 flex items-center justify-center cursor-pointer"
        onClick={(event) => {
          setToggleDropdown((prev) => !prev);
          event.stopPropagation();
        }}
        ref={buttonRef}
      >
        <div className="flex flex-col items-center gap-1">
          <div className="head h-3 w-3 bg-gray-400   rounded-full"></div>
          <div className="body w-6 h-2 rounded-t-lg bg-gray-400  "></div>
        </div>
      </div>
      {toggleDropdown && (
        <ul
          className="absolute top-16 flex flex-col py-3 px-2 w-36 bg-white rounded-md border-2 border-gray-200 "
          ref={menuRef}
        >
          {["First Item", "Second Item", "Third Item"].map((i, j) => (
            <li
              className={listItemHoverStyle}
              key={j}
              onClick={(event) => {
                setToggleDropdown((prev) => false);
                event.stopPropagation();
              }}
            >
              {i}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
