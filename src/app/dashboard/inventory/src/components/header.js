import { NavLink } from "react-router-dom";

export const Header = () => {
  const getActiveStyles = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "white" : "grey",
    fontSize: "24px"
  });

  return (
    <div
      style={{
        background: "#202124",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        minHeight: "100vh",
        justifyContent: "start",
        padding: "20vh 30px",
        textAlign: "left"
      }}
    >
      <NavLink to="/" style={getActiveStyles}>
        Dashboard
      </NavLink>
      <NavLink to="/departments" style={getActiveStyles}>
        Departments
      </NavLink>
      <NavLink to="products" style={getActiveStyles}>
        Products
      </NavLink>
    </div>
  );
};
