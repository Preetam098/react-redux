import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [Data, setData] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res?.data);
    } catch (error) {
      console.log(error);
    }
  };


 const handleSearch = (value) => {
    setSearchTerm(value);
  };

  
  const filterData = Data && Data?.products?.filter((item) => {
    const combinedString=`${item.title} ${item.price} ${item.brand} ${item.category}`.toLowerCase();
    return combinedString.includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="container mx-auto px-4">
      <div className="flex gap-2 items-center mx-20 mt-16 mb-20">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full rounded-lg outline-none p-2 border-2"
          type="search"
        ></input>
        <button className="px-4 py-2 text-white font-medium bg-blue-400 rounded-lg">
          Search
        </button>
      </div>

      <ul>
        {/* {filterData?.map((item, index) => (
          <li key={index}>{item}</li>
        ))} */}
      </ul>
      <div className="product grid grid-cols-4 place-content-center gap-4 m-2">
        {filterData.length > 0 && (
          filterData.map((productData, index) => (
            <div className="my-4 text-center border-2 shadow-lg p-2 rounded-lg">
              <img
                className="w-44 h-52 mx-auto object-cover"
                src={productData.thumbnail}
                alt={productData.title}
              />
              <h2>{productData.title}</h2>
              <p>{productData.description}</p>
              <p>
                <strong>Price:</strong> ${productData.price}
              </p>
              <p>
                <strong>Discount:</strong> {productData.discountPercentage}%
              </p>
              <p>
                <strong>Rating:</strong> {productData.rating}
              </p>
              <p>
                <strong>Stock:</strong> {productData.stock}
              </p>
              <p>
                <strong>Brand:</strong> {productData.brand}
              </p>
              <p>
                <strong>Category:</strong> {productData.category}
              </p>
              <div className="product-images">
                {/* {productData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${productData.title} ${index + 1}`}
                  />
                ))} */}
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Search;
