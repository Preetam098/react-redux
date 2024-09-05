import React, { useState } from "react";
import SimpleReactValidator from "simple-react-validator";
const AddMultiple = () => {
  const validator = new SimpleReactValidator({});
  const [errorMessage, setErrorMessage] = useState();
  const [tableData, setTableData] = useState([
    {
      name: "",
      phone: "",
      email: "",
    },
  ]);

  const handleUpdateValue = (index, e, selected) => {
    console.log(index, e, selected);
    let temp = [...tableData];

    temp[index][selected] = e.target.value;
    setTableData(temp);
  };

  const handleAddRow = () => {
    setTableData([
      ...tableData,
      {
        name: "",
        phone: "",
        email: "",
      },
    ]);
  };

  const handleSubmit = (e) => {
    // if (validator.allValid()) {
    console.log(tableData, "tabledata");
    // } else {
    //   validator.showMessages();
    //   setErrorMessage(validator.errorMessages);
    // }
    e.preventDefault();
    // setTableData([
    //   {
    //     name: "",
    //     phone: "",
    //     email: "",
    //   },
    // ]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Contact List
            </h2>
            <div className="">
              <button
                onClick={handleAddRow}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                {/* <PlusIcon className="w-5 h-5 mr-2" /> */}
                Add Row
              </button>
            </div>
          </div>
          <div className="space-y-4">
            {tableData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={item.name}
                    onChange={(e) => handleUpdateValue(index, e, "name")}
                    className="flex-1 outline-none p-2 "
                  />
                  {/* {validator.message("name", tableData?.name, "required")} */}
                  <p className="text-red-500">{errorMessage?.name}</p>
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={item.phone}
                    onChange={(e) => handleUpdateValue(index, e, "phone")}
                    className="flex-1 outline-none p-2 "
                  />
                  {/* {validator.message("phone", tableData?.phone, "required")} */}
                  <p className="text-red-500">{errorMessage?.phone}</p>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={item.email}
                    onChange={(e) => handleUpdateValue(index, e, "email")}
                    className="flex-1 outline-none p-2 "
                  />
                  {/* {validator.message("email", tableData?.email, "required")} */}
                  <p className="text-red-500">{errorMessage?.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {/* <PlusIcon className="w-5 h-5 mr-2" /> */}
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMultiple;
