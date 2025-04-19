import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

export const Departments = () => {
  const { dispatch } = useContext(AppContext);

  // useNav
  const navigate = useNavigate();
  return (
    <div>
      <h1>Departments</h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          margin: "20px 15px"
        }}
      >
        {/* Cards */}
        <div
          onClick={() => {
            dispatch({ type: "SET_DEPT", payload: "All" });
            navigate("/products");
          }}
          style={{
            background: "#f4f4f4",
            width: "200px",
            padding: "10px 0",
            borderRadius: "15px",
            boxShadow: "2px 2px 10px",
            cursor: "pointer"
          }}
        >
          <h3>All</h3>
        </div>

        {/* Cards */}
        <div
          onClick={() => {
            dispatch({ type: "SET_DEPT", payload: "Kitchen" });
            navigate("/products");
          }}
          style={{
            background: "#f4f4f4",
            width: "200px",
            padding: "10px 0",
            borderRadius: "15px",
            boxShadow: "2px 2px 10px",
            cursor: "pointer"
          }}
        >
          <h3>Kitchen</h3>
        </div>

        {/* Cards */}
        <div
          onClick={() => {
            dispatch({ type: "SET_DEPT", payload: "Clothing" });
            navigate("/products");
          }}
          style={{
            background: "#f4f4f4",
            width: "200px",
            padding: "10px 0",
            borderRadius: "15px",
            boxShadow: "2px 2px 10px",
            cursor: "pointer"
          }}
        >
          <h3>Clothing</h3>
        </div>

        {/* Cards */}
        <div
          onClick={() => {
            dispatch({ type: "SET_DEPT", payload: "Toys" });
            navigate("/products");
          }}
          style={{
            background: "#f4f4f4",
            width: "200px",
            padding: "10px 0",
            borderRadius: "15px",
            boxShadow: "2px 2px 10px",
            cursor: "pointer"
          }}
        >
          <h3>Toys</h3>
        </div>
      </div>
    </div>
  );
};
