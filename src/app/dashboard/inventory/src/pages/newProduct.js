import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { AppContext } from "../context/AppProvider";

export const NewProduct = () => {
  const { newProduct } = useContext(AppContext);

  const navigate = useNavigate();

  const [productDetails, setProductDetails] = useState({
    id: uuid(),
    department: "",
    name: "",
    description: "",
    price: 0,
    stock: 0,
    sku: "",
    supplier: "",
    delivered: 0,
    imageUrl:
      "https://4.imimg.com/data4/NF/XX/MY-3554754/electric-coffee-maker-500x500.jpg"
  });

  const addNewProduct = () => {
    newProduct(productDetails);
    navigate("/products");
  };

  return (
    <div
      style={{
        textAlign: "left",
        margin: "20px 15px",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
      }}
    >
      <h2>Add New Product</h2>
      <p>Department:</p>
      <select
        onChange={(e) =>
          setProductDetails({ ...productDetails, department: e.target.value })
        }
        style={{ width: "500px", padding: "10px", borderRadius: "5px" }}
        defaultValue="Select Department"
      >
        <option value="Select Department">Select Department</option>
        <option value="Kitchen">Kitchen</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>

      <p>Name:</p>
      <input
        onChange={(e) =>
          setProductDetails({ ...productDetails, name: e.target.value })
        }
        style={{
          width: "500px",
          padding: "10px",
          borderRadius: "5px",
          borderColor: "grey"
        }}
      ></input>

      <p>Description:</p>
      <input
        onChange={(e) =>
          setProductDetails({ ...productDetails, description: e.target.value })
        }
        style={{
          width: "500px",
          padding: "10px",
          borderRadius: "5px",
          borderColor: "grey"
        }}
      ></input>

      <p>Price:</p>
      <input
        onChange={(e) =>
          setProductDetails({ ...productDetails, price: e.target.value })
        }
        type="number"
        defaultValue="0"
        style={{
          width: "500px",
          padding: "10px",
          borderRadius: "5px",
          borderColor: "grey"
        }}
      ></input>

      <p>Stock:</p>
      <input
        onChange={(e) =>
          setProductDetails({ ...productDetails, stock: e.target.value })
        }
        type="number"
        defaultValue="0"
        style={{
          width: "500px",
          padding: "10px",
          borderRadius: "5px",
          borderColor: "grey"
        }}
      ></input>

      <p>SKU:</p>
      <input
        onChange={(e) =>
          setProductDetails({ ...productDetails, sku: e.target.value })
        }
        style={{
          width: "500px",
          padding: "10px",
          borderRadius: "5px",
          borderColor: "grey"
        }}
      ></input>

      <p>Supplier:</p>
      <input
        onChange={(e) =>
          setProductDetails({ ...productDetails, supplier: e.target.value })
        }
        style={{
          width: "500px",
          padding: "10px",
          borderRadius: "5px",
          borderColor: "grey"
        }}
      ></input>

      <p>Delivered:</p>
      <input
        onChange={(e) =>
          setProductDetails({ ...productDetails, delivered: e.target.value })
        }
        type="number"
        defaultValue="0"
        style={{
          width: "500px",
          padding: "10px",
          borderRadius: "5px",
          borderColor: "grey"
        }}
      ></input>

      <p>Image URL: (Paste your own url)</p>
      <input
        onChange={(e) =>
          setProductDetails({ ...productDetails, imageUrl: e.target.value })
        }
        defaultValue="https://4.imimg.com/data4/NF/XX/MY-3554754/electric-coffee-maker-500x500.jpg"
        style={{
          width: "500px",
          padding: "10px",
          borderRadius: "5px",
          borderColor: "grey"
        }}
      ></input>

      <button
        onClick={addNewProduct}
        style={{
          background: "#037bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          padding: "10px 15px",
          width: "150px"
        }}
      >
        Add Product
      </button>
    </div>
  );
};
