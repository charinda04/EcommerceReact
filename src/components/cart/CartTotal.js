import React from "react";
import { Link } from "react-router-dom";

export default function CartTotal({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button>clear cart</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
