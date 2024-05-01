import React, { useEffect, useState } from "react";

const Api = "https://fakestoreapi.com/products/";

const RazorUi = () => {
  const [products, setProduct] = useState("");
  const [booking, setBooking] = useState({
    title: "",
    price: "",
    id: "",
  });

  const handleAddtoCart = (product) => {
    console.log("e.target.value", product);
    const { title, price, id } = product;
    setBooking({
      ...booking,
      title,
      price,
      id,
    });
  };

  console.log("booking", booking);

  const getData = async () => {
    try {
      const response = await fetch(Api, { method: "GET" });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProduct(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="text-center">
      <h1 className="text-orange-600 text-5xl">Product List</h1>
      <div className="product-list grid grid-cols-4 gap-2 place-content-top place-items-top p-10">
        {products &&
          products.map((product) => (
            <div key={product.id} className="product-item text-center">
              <img
                src={product.image}
                className=" border-2 p-2 border-black my-1"
                alt={product.name}
              />
              <div className="bg-gray-300 p-1 px-auto py-auto text-xl text-black">
                <h3>Product Name :- {product.title}</h3>

                <button className="my-2 ">
                  {"Price"} ${product.price.toFixed(2)}
                </button>
                <button
                  onClick={() => {
                    handleAddtoCart(product);
                  }}
                  className="my-2 "
                >
                  {"Add to Cart"}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RazorUi;
