import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

export const Home = () => {
  const { appData } = useContext(AppContext);
  const { originalData } = appData;

  // Total stock
  const totalStock = originalData.reduce(
    (acc, { stock }) => acc + Number(stock),
    0
  );

  // Total Delivered
  const totalDelivered = originalData.reduce(
    (acc, { delivered }) => acc + Number(delivered),
    0
  );

  // Low stock items
  const lowStockItems = originalData.reduce(
    (acc, { stock }) => (stock <= 10 ? acc + 1 : acc),
    0
  );

  return (
    <div>
      <h1>Dashboard</h1>

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
          style={{
            background: "#f4f4f4",
            width: "200px",
            padding: "10px 0",
            borderRadius: "15px",
            boxShadow: "2px 2px 10px"
          }}
        >
          <h2 style={{ color: "green" }}>{totalStock}</h2>
          <h3>Total Stock</h3>
        </div>

        {/* Cards */}
        <div
          style={{
            background: "#f4f4f4",
            width: "200px",
            padding: "10px 0",
            borderRadius: "15px",
            boxShadow: "2px 2px 10px"
          }}
        >
          <h2 style={{ color: "orange" }}>{totalDelivered}</h2>
          <h3>Total Delivered</h3>
        </div>

        {/* Cards */}
        <div
          style={{
            background: "#f4f4f4",
            width: "200px",
            padding: "10px 0",
            borderRadius: "15px",
            boxShadow: "2px 2px 10px"
          }}
        >
          <h2 style={{ color: "red" }}>{lowStockItems}</h2>
          <h3>Low Stock Items</h3>
        </div>
      </div>
    </div>
  );
};
