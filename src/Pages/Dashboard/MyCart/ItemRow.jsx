import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const ItemRow = ({ item, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img src={item.image} alt="" className="w-16 h-16" />
      </td>
      <td>{item.name}</td>
      <td className="text-right">{item.price}</td>
      <td className="text-center">
        <button className="bg-red-600 p-2 rounded-md">
          {" "}
          <FaTrashAlt className="text-white" />
        </button>
      </td>
    </tr>
  );
};

export default ItemRow;
