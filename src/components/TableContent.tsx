import { useState } from "react";
import { useAppSelector } from "../app/store/hook";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const TableContent = () => {
  const { countryList } = useAppSelector((state) => state.country);
  const [page, setPage] = useState(1);

  function paginate(
    array: Array<object>,
    pageNumber: number,
    pageSize: number
  ) {
    // Calculate the start and end indices for the current page
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Return the slice of the array for the current page
    return array.slice(startIndex, endIndex);
  }

  return (
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Country name
              </th>
              <th scope="col" className="px-6 py-3">
                Code
              </th>
              <th scope="col" className="px-6 py-3">
                Region
              </th>
              <th scope="col" className="px-6 py-3">
                Language
              </th>
            </tr>
          </thead>
          <tbody>
            {countryList.length ? (
              paginate(countryList, page, 10).map((country, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {country.name.official}
                  </th>
                  <td className="px-6 py-4">
                    {country.cioc ? country.cioc : country.cca3}
                  </td>
                  <td className="px-6 py-4">{country.region}</td>
                  <td className="px-6 py-4">
                    {country.languages
                      ? Object.values(country.languages).join(", ")
                      : " "}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"></tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            onClick={() => setPage(page > 0 ? page - 1 : page)}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            onClick={() =>
              setPage(page < countryList.length / 10 + 1 ? page + 1 : page)
            }
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-gray-700">
              Showing{" "}
              <span className="font-medium">
                {countryList.length ? (page - 1) * 10 + 1 : 0}
              </span>{" "}
              to{" "}
              <span className="font-medium">
                {countryList.length ? page * 10 : 0}
              </span>{" "}
              of <span className="font-medium">{countryList.length}</span>{" "}
              results
            </p>
          </div>
          <div>
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <a
                onClick={() => setPage(page > 1 ? page - 1 : page)}
                className={
                  "relative inline-flex items-center rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" +
                  (page == 1 ? "text-gray-400" : "")
                }
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
              <a
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {page}
              </a>
              <a
                onClick={() =>
                  setPage(page < countryList.length / 10 ? page + 1 : page)
                }
                className={
                  "relative inline-flex items-center rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" +
                  (page == countryList.length / 10 + 1 ? "text-gray-400" : "")
                }
              >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default TableContent;
