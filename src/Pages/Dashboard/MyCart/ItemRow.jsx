import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ItemRow = ({ item, index, refetch }) => {
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Do you want to Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "Order has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img src={item.image} alt="" className="w-16 h-16" />
      </td>
      <td>{item.name}</td>
      <td className="text-right">{item.price}</td>
      <td className="text-center">
        <button
          onClick={() => handleDelete(item._id)}
          className="bg-red-600 p-2 rounded-md"
        >
          {" "}
          <FaTrashAlt className="text-white" />
        </button>
      </td>
    </tr>
  );
};

export default ItemRow;
