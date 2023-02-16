import { addToCart, removeFromCart, emptyCart } from "../action/index";
import { useDispatch, useSelector } from "react-redux";
import { ProductList } from "../action/ProductAction";

const Main = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  console.log(data);
  const product = {
    name: "I Phone",
    type: "Mobile",
    price: 10000,
    color: "red",
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary ms-3"
          onClick={() => dispatch(addToCart(product))}
        >
          add to cart
        </button>
        <button className="btn btn-primary ms-3" onClick={() => dispatch(removeFromCart(product))} >
          remove from cart
        </button>
        <button
          className="btn btn-primary ms-3"
          onClick={() => dispatch(emptyCart(product))}
        >
          Empty cart
        </button>
        <button
          className="btn btn-primary ms-3"
          onClick={() => dispatch(ProductList(product))}
        >
          Product List
        </button>        
      </div>
    </>
  );
};

export default Main 