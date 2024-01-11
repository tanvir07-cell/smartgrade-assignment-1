import React from "react";

const SearchParams = () => {
  return (
    <div className="mb-16 flex flex-col items-center">
      <h2 className="mb-9 text-3xl font-bold lg:text-[40px]">
        <span className="text-[#00CC8C]">Students</span> of the Year
      </h2>
      <form>
        <div className="flex">
          <div className="relative overflow-hidden rounded-[63px] text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
            <input
              type="search"
              id="search-dropdown"
              className="z-20 block w-full rounded-[63px] bg-white px-4 py-2.5 pr-10 text-neutral-800 placeholder:text-neutral-400 focus:outline-none"
              placeholder="Search by Student "
              required
            />
            <button
              type="submit"
              className="rounded-e-lg absolute right-0 top-0 inline-flex h-full w-10 items-center justify-center text-neutral-800"
            >
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchParams;
