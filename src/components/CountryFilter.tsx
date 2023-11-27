import { ChangeEvent, useEffect, useState } from "react";

import TableContent from "./TableContent";
import { useAppDispatch } from "../app/store/hook";
import {
  getAll,
  setCountryList,
  getCountryByCategory,
} from "../features/country/countrySlice";

const options = [
  { value: "name", label: "Name", checked: false },
  { value: "code", label: "Code", checked: false },
  { value: "fullname", label: "Full name", checked: true },
  { value: "region", label: "Region", checked: false },
  { value: "subregion", label: "Subregion", checked: false },
  { value: "language", label: "Language", checked: false },
  { value: "all", label: "All", checked: false },
];
interface SearchData {
  selectedValue: string;
  keyword: string;
}
export default function CountryFilter() {
  const [selectedValue, setSelectedValue] = useState("all");
  const [keyword, setKeyword] = useState("");

  const dispatch = useAppDispatch();

  const getALlCountry = async () => {
    try {
      const res = await dispatch(getAll());
      await dispatch(setCountryList(res.payload));
    } catch (error) {
      console.log(error);
    }
  };
  const countryByCategory = async (data: SearchData) => {
    try {
      const res = await dispatch(getCountryByCategory(data));
      await dispatch(setCountryList(res.payload));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getALlCountry();
    return () => {};
  }, []);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const searchCountry = () => {
    countryByCategory({
      selectedValue: selectedValue,
      keyword: keyword,
    });
  };
  return (
    <div className="bg-white">
      <div>
        {/* Mobile filter dialog */}

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Country list
            </h1>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <div>
                  <label
                    htmlFor="categories"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Categories
                  </label>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="keysearch"
                      id="keysearch"
                      value={keyword}
                      onChange={(e) => {
                        setKeyword(e.target.value);
                      }}
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center">
                      <label htmlFor="categories" className="sr-only">
                        Categories
                      </label>
                      <select
                        id="categories"
                        name="categories"
                        value={selectedValue}
                        onChange={handleChange}
                        className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        {options.map((section, index) => (
                          <option key={index} value={section.value}>
                            {section.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <span
                  onClick={searchCountry}
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Search
                </span>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <TableContent />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
