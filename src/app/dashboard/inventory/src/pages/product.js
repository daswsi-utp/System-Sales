import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

export const Products = () => {
  const { appData, dispatch } = useContext(AppContext);
  const { displayData, selectedDepartment, checkLSI, sortBy } = appData;

  // nav
  const navigate = useNavigate();

  return (
    <div>
      {/* Filters */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "10px 5%"
        }}
      >
        <h2>Products</h2>

        {/* Select panel */}
        <select
          onChange={(e) =>
            dispatch({ type: "SET_DEPT", payload: e.target.value })
          }
          defaultValue={selectedDepartment}
        >
          <option value="All">All Departments</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </select>

        {/* Checkbox */}
        <div>
          <input
            onChange={(e) => dispatch({ type: "SET_LSI" })}
            defaultChecked={checkLSI}
            type="checkbox"
            id="low-stock-items"
          />
          <label>Low stock items</label>
        </div>

        {/* Sort by */}
        <select
          onChange={(e) =>
            dispatch({ type: "SET_SORT_BY", payload: e.target.value })
          }
          defaultChecked={sortBy}
        >
          <option value="Name">Name</option>
          <option value="Price">Price</option>
          <option value="Stock">Stock</option>
        </select>

        {/* New button */}
        <button
          onClick={() => navigate("/newProduct")}
          style={{
            background: "#037bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 15px"
          }}
        >
          New
        </button>
      </div>

      {/* Inventory */}
      <table>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Supplier</th>
        </tr>
        {displayData.map(
          ({ id, name, description, price, stock, supplier, imageUrl }) => {
            return (
              <tr key={id}>
                {/* Inner items */}
                <th>
                  <img
                    alt="thumbnail"
                    src={imageUrl}
                    style={{ width: "100px", height: "100px" }}
                  />
                </th>
                <th
                  onClick={() => navigate(`/products/${id}`)}
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "blue"
                  }}
                >
                  {name}
                </th>
                <th>{description}</th>
                <th>${price}</th>
                <th>{stock}</th>
                <th>{supplier}</th>
              </tr>
            );
          }
        )}
      </table>

      {/* Inventory ends */}
    </div>
  );
};
