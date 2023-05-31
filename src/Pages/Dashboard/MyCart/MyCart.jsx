import React from "react";
import useCart from "../../../Hooks/useCart";
import SectionHeader from "../../../components/SectionHeader";
import ItemRow from "./ItemRow";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((acc, item) => acc + item.price, 0);
  return (
    <div>
      <SectionHeader heading="Wanna Add More" subHeading="my cart" />
      <div className="overflow-x-auto">
        <div className="flex items-center justify-around mb-3">
          <h3 className="text-3xl">Total Orders: {cart.length}</h3>
          <h3 className="text-3xl">Total Price : $ {total}</h3>
          <button className="btn btn-warning">Pay</button>
        </div>
        <table className="table w-10/12 mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Name</th>
              <th className="text-right">Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <ItemRow
                key={item._id}
                item={item}
                index={index}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
