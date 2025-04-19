import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppProvider";

export const IndividualProductPage = () => {
  const { appData } = useContext(AppContext);
  const { originalData } = appData;

  // useParams
  const { productId } = useParams();

  const displayItem = originalData.find(({ id }) => id == productId);

  const {
    imageUrl,
    name,
    price,
    stock,
    supplier,
    department,
    sku,
    delivered,
    description
  } = displayItem;

  // end
  return (
    <div style={{ textAlign: "left", margin: "20px 15px" }}>
      <h2>{name}</h2>
      <img alt="TB" style={{ height: "400px" }} src={imageUrl} />
      <h3>Price: ${price}</h3>
      <h3>Stock: {stock}</h3>
      <h3>Supplier: {supplier}</h3>
      <h3>Department: {department}</h3>
      <h3>SKU: {sku}</h3>
      <h3>Delivered: {delivered}</h3>
      <h3>Description: {description}</h3>
    </div>
  );
};
