import React from "react";

interface IDropDown {
  rowsPerPageItems: Array<number>
  rowsPerPage: number
  rowsPerPageChange: (rows: number) => void
}

const DropDown = ({ rowsPerPageItems, rowsPerPage, rowsPerPageChange }: IDropDown) => {
  const [dropdown, setDropdown] = React.useState(false);

  const rowsPerPageHandler = (item: number) => {
    rowsPerPageChange(item)
    setDropdown(false)
  }

  return (
    <div className="flex justify-center">
      <div className="dropdown relative">
        <button
          className="dropdown-toggle px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => setDropdown(!dropdown)}
        >
          {rowsPerPage}
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
          </svg>
        </button>
        {dropdown ? (
          <ul className="dropdown-menu min-w-max bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none">
            {rowsPerPageItems.map(item => (
              <li
                key={item}
              >
                <a
                  onClick={() => rowsPerPageHandler(item)}
              >{item}</a>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default DropDown;
