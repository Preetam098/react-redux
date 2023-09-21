import React, {
  useEffect,
  useInsertionEffect,
  useLayoutEffect,
  useState,
} from "react";

const AddItem = ({ handleClose, addData }) => {
  const [formInput, setFormInput] = useState([]);

  const handleChange = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (formInput) {
      const addData = localStorage.getItem("keyName")
        ? JSON.parse(localStorage.getItem("keyName"))
        : [];

      const formInputString = JSON.stringify([...addData, formInput]);
      localStorage.setItem("keyName", formInputString);
      console.log("Data stored in local storage:", formInput);
    } else {
      console.log("formInput is empty or not defined");
    }
    handleClose();
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-slate-200  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                      <label for="name">Name:</label>
                      <br />
                      <input
                        type="text"
                        id="name"
                        placeholder="product-name"
                        onChange={handleChange}
                        value={formInput?.name}
                        class=" px-4 text-black border-1 w-full h-10 border-gray-900 rounded-md my-1"
                        name="name"
                        required
                      />
                      <br />
                      <label for="description">Description:</label>
                      <br />
                      <input
                        type="text"
                        id="description"
                        name="description"
                        onChange={handleChange}
                        value={formInput?.description}
                        placeholder="description about product"
                        required
                        class="px-4 text-black border-1 w-full h-12 border-[#f6a82c]  rounded-md my-1"
                      />
                      <br />

                      <label for="price">Price:</label>
                      <br />
                      <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={handleChange}
                        value={formInput?.price}
                        placeholder="product price"
                        step="01"
                        class="px-4 text-black border-1 w-full h-8 border-gray-900 rounded-md my-1"
                        required
                      />
                      <br />
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="submit"
                    onClick={submitForm}
                    class="inline-flex w-full justify-center rounded-md bg-[#F38630] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#ec7d28] hover:text-white sm:ml-3 sm:w-auto border-1 border-[#FA6900]"
                  >
                    Submit
                  </button>
                  <button
                    onClick={handleClose}
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-inset  hover:bg-[#ec7d28] sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddItem;
