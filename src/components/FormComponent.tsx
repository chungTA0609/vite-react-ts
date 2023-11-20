import { PhotoIcon } from "@heroicons/react/24/solid";
import Modal from "./Modal";
import { ChangeEvent, useState } from "react";
import { addProduct } from "../features/product/productListSlice";
import { useAppDispatch, useAppSelector } from "../app/hook";
const sizeArray = [
  { name: "XXS", inStock: false },
  { name: "XS", inStock: false },
  { name: "S", inStock: false },
  { name: "M", inStock: false },
  { name: "L", inStock: false },
  { name: "XL", inStock: false },
  { name: "2XL", inStock: false },
  { name: "3XL", inStock: false },
];
export default function FormComponent() {
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputForm, setInputForm] = useState({
    productId: 0,
    description: "",
    detail: "",
    name: "",
    price: "",
  });
  const [sizes, setSizes] = useState(sizeArray);
  const { productList } = useAppSelector((state) => state.productList);
  const dispatch = useAppDispatch();
  function handleModal(openState: boolean) {
    setOpen((e) => (e = openState));
    if (!openState) {
      handleError(false);
    }
  }
  function handleError(errorState: boolean) {
    setIsError((e) => (e = errorState));
  }
  function handleItemChange(key: string, e: ChangeEvent) {
    setInputForm({ ...inputForm, [key]: e.target.value });
  }
  function handleSizeChange(index: number) {
    const newSize = [...sizes];

    newSize[index].inStock = !newSize[index].inStock;

    setSizes(newSize);
  }
  function submitNewProduct() {
    try {
      if (Object.keys({}).length) {
        handleError(true);
      }
      const newProductObj = { ...inputForm, sizes: [...sizes] };
      const newListProduct = [...productList];

      newListProduct.push({
        id: `${newProductObj.productId}`,
        name: newProductObj.name,
        price: `$${newProductObj.price}`,
        href: `${newProductObj.productId}`,
        breadcrumbs: [
          { id: 1, name: "Men", href: "#" },
          { id: 2, name: "Clothing", href: "#" },
        ],
        images: [
          {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
            alt: "Two each of gray, white, and black shirts laying flat.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
            alt: "Model wearing plain black basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
            alt: "Model wearing plain gray basic tee.",
          },
          {
            src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
            alt: "Model wearing plain white basic tee.",
          },
        ],
        colors: [
          { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
          {
            name: "Gray",
            class: "bg-gray-200",
            selectedClass: "ring-gray-400",
          },
          {
            name: "Black",
            class: "bg-gray-900",
            selectedClass: "ring-gray-900",
          },
        ],
        sizes: [...newProductObj.sizes],
        description: newProductObj.description,
        highlights: [
          "Hand cut and sewn locally",
          "Dyed with our proprietary colors",
          "Pre-washed & pre-shrunk",
          "Ultra-soft 100% cotton",
        ],
        details: newProductObj.detail,
        imageSrc:
          "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
        imageAlt:
          "The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming 'Charcoal Gray' limited release.",
      });
      dispatch(addProduct(newListProduct));
      handleModal(false);
    } catch (error) {
      console.log(error);

      handleError(true);
    }
  }
  return (
    <>
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              New product
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              This information will be displayed publicly so be careful what you
              share.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="productId"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Id
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      product/
                    </span>
                    <input
                      value={inputForm.productId}
                      onChange={(e) => {
                        handleItemChange("productId", e);
                      }}
                      type="text"
                      name="productId"
                      id="productId"
                      autoComplete="productId"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Next id"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    value={inputForm.description}
                    onChange={(e) => {
                      handleItemChange("description", e);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences description your new product
                </p>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="details"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Details
                </label>
                <div className="mt-2">
                  <textarea
                    id="details"
                    name="details"
                    rows={3}
                    value={inputForm.detail}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      handleItemChange("detail", e);
                    }}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences description your new product
                </p>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="cover-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cover photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="overview-photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Overview photo
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    value={inputForm.name}
                    onChange={(e) => {
                      handleItemChange("name", e);
                    }}
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Price
                </label>
                <div className="mt-2">
                  <input
                    value={inputForm.price}
                    onChange={(e) => {
                      handleItemChange("price", e);
                    }}
                    type="text"
                    name="price"
                    id="price"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="text-sm font-semibold leading-6 text-gray-900">
                  Size
                </legend>
                <div className="mt-6 space-y-6">
                  {sizes.map((item, index) => (
                    <div className="relative flex gap-x-3" key={index}>
                      <div className="flex h-6 items-center">
                        <input
                          onChange={() => {
                            handleSizeChange(index);
                          }}
                          checked={item.inStock}
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-900"
                        >
                          {item.name}
                        </label>
                        <p className="text-gray-500">
                          Get notified when someones posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <span
            onClick={() => handleModal(true)}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </span>
        </div>
      </form>
      <Modal
        isConfirm={true}
        open={open && !isError}
        handleModal={handleModal}
        confirmModal={submitNewProduct}
        titleModal={"Add new product"}
        messageModal={"Are you sure you want to add this product?"}
      ></Modal>
      <Modal
        isConfirm={false}
        open={open && isError}
        handleModal={handleModal}
        confirmModal={submitNewProduct}
        titleModal={"Error"}
        messageModal={"Are you sure you want to add this product?"}
      ></Modal>
    </>
  );
}
