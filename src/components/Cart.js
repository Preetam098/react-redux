import React, { useState ,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cartItems , emptyCart ,addItem } from "../redux/actions/cartActions";
import AddItem from "./AddItem";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const items = [
  {
    id: 1,
    name: "Product 1",
    price: 8.5,
  },
  {
    id: 2,
    name: "Product 2",
    price: 5.5,
  },
  {
    id: 3,
    name: "Product 3",
    price: 10.5,
  },
  {
    id: 4,
    name: "Product 4",
    price: 6.9,
  },
  {
    id: 5,
    name: "Product 5",
    price: 3.5,
  },
  {
    id: 6,
    name: "Product 6",
    price: 6.5,
  },
  {
    id: 7,
    name: "Product 7",
    price: 4.9,
  },
  {
    id: 8,
    name: "Product 8",
    price: 9.5,
  },
  {
    id: 9,
    name: "Product 9",
    price: 17.5,
  },
];

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((event) => event?.cartReducer?.cartItems);
  const [isAddItemVisible, setAddItemVisible] = useState(false);
  const [addDataitem ,setaddDataItem] =useState({})


  const handleCheckout = (cart) => {
    if (cart = null) {
      toast.success('Order Confirmed', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
        toast.error('Please Add Product', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

    
  };


  useEffect(() => {
    const addData = JSON.parse(localStorage.getItem('keyName'));
    if (addData) {
      const parsedData = (addData);
      setaddDataItem(parsedData);
    } else {
      setaddDataItem([]);
    }
  }, []);

  console.log('additem ' , addDataitem)

  const handleOpenAddItem = () => {
    setAddItemVisible(true);
  };

  const handleClose= () => {
    setAddItemVisible(false);
  };

  const handleAddToCart = (data) => {
    dispatch(cartItems(data));
  };

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };


  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  console.log("cart", cart);

  return (
    <>
      <header className="intro">
        <h1>Shopping Cart Example</h1>
        <div className="action"></div>
      </header>

      <main>
        {/* <!-- Start DEMO HTML (Use the following code into your project)--> */}
        <div className="container">
      
      <button className="add-cart" onClick={handleOpenAddItem}>
        Add Cart Items
      </button>

      {isAddItemVisible && <AddItem handleClose={handleClose} />}
         <div> 
         <h1>Simple JavaScript Shopping Cart</h1>
          <p>
            Click 'Empty Cart' button to remove session cookies from browser.
          </p>
         </div>
         <div>
        
         </div>
          <div id="alerts"></div>

          <div className="productcont">
          {/* {addDataitem ?
           (
            addDataitem && addDataitem?.map((data) => (
          <div className="product" key={data?.id}>
            <h3 className="productname">{data?.name}</h3>
            <p>{data?.description}</p>
            <p className="price">$ {data?.price}</p>
            <button onClick={() => handleAddToCart(data)} className="addtocart">
              Add To Cart
            </button>
          </div>
        ))
      ) : null
      } */}

          </div>
          <div className="productcont">
            {items.map((data) => (
              <>
                <div className="product" key={items?.id}>
                  <h3 className="productname">{data?.name}</h3>
                  <p>Product description except...</p>
                  <p className="price">$ {data?.price}</p>
                  <button
                    // onClick={() => dispatch(cartItems(cart.price + 1 , cart.value , cart.name))}
                    onClick={() => handleAddToCart(data)}
                    className="addtocart"
                  >
                    Add To Cart
                  </button>
                </div>
              </>
            ))}
            </div>
            <div className="cart-container">
              <h2>Cart</h2>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Product</strong>
                    </th>
                    <th>
                      <strong>Price</strong>
                    </th>
                  </tr>
                </thead>
                <tbody id="carttable">
                {cart.map((item) => (
                  <tr key={cart?.id}>
                    <td>
                    <strong>{item?.name}</strong>
                  </td>
                  <td>
                    <strong> $ <span>{item?.price}</span></strong>
                  </td>
                  </tr>
                     ))}
                </tbody>
              </table>
              <hr />
              <table id="carttotals">
                <tr>
                  <td>
                    <strong>Items</strong>
                  </td>
                  <td>
                    <strong>Total</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    x <span id="itemsquantity">{cart.length}</span>
                  </td>

                  <td>
                   
                    <td> $ {calculateTotalPrice()}</td>
                  </td>
                </tr>
              </table>

              <div className="cart-buttons">
                <button
                  id="emptycart"
                  onClick={handleEmptyCart}
                >
                  Empty Cart
                </button>
                <button id="checkout" onClick={handleCheckout}>Checkout</button>
              </div>
            </div>
        </div>
      </main>
      <footer className="credit"></footer>
      <ToastContainer />

    </>
  );
};

export default Cart;
