import React, { useEffect } from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { callGetlistUserByPagination } from "./../../../redux/reducers/user/getUserByPagination";

export default function Pagination() {
  const [active, setActive] = React.useState(1);
  const dispatch = useDispatch();
  const listUserByPagination = useSelector(
    (state) => state.getUserByPagination.listUserByPagination
  );
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(callGetlistUserByPagination(active, 10, ""));
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [dispatch, active]);

  const handlePageChange = (index) => {
    setActive(index);
    dispatch(callGetlistUserByPagination(index, 10, ""));
  };
  const pageCount = listUserByPagination.pageCount;
  return (
    <div className="flex justify-center bg-white dark:bg-gray-800 dark:border-gray-700 pb-2 pt-2 bottom-0 fixed z-index left-0 w-full z-[1000]">
      <div className="flex items-center gap-4 ">
        <Button
          variant="text"
          className="flex items-center gap-2 text-white"
          onClick={() => setActive(active - 1)}
          disabled={active === 1}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>
          Previous
        </Button>
        <div className="flex items-center gap-2">
          {Array.from({ length: pageCount }).map((_, index) => (
            <IconButton
              key={index + 1}
              variant={active === index + 1 ? "filled" : "text"}
              color="gray"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </IconButton>
          ))}
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2 text-white"
          onClick={() => setActive(active + 1)}
          disabled={active === pageCount}
        >
          Next
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
}
