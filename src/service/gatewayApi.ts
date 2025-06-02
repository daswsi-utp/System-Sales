import axios from 'axios';

const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:8080';

// Interfaces comunes (las mantengo igual)
export interface Brand {
  id: number;
  nameBrand: string;
}

export interface Category {
  id: number;
  nameCategory: string;
}

export interface Product {
  idProduct: number;
  nameProduct: string;
  priceProduct: number;
  quantityProduct: number;
  category: Category;
  brand: Brand;
}

export interface UserRegistry {
  name: string;
  lastName: string;
  email: string;
}

export interface RegistryResponse {
  type: string;
  registrationDate: string;
  user: UserRegistry;
  templateUrl: string;
}

export interface RegistryRequest {
  type: string;
  registrationDate: string;
  user: {
    idUser: number;
  };
  templateUrl: string;
}

export interface RegistryEntity {
  idRegistry: number;
  type: string;
  registrationDate: string;
  user: {
    idUser: number;
  };
  templateUrl: string;
}

// Interfaces específicas para Order
export interface Warehouse {
  id: number;
  nameWarehouse: string;
  address: string;
}

export interface Provider {
  id: number;
  nameProvider: string;
  ruc: string;
}

export interface ProductOrderRequest {
  productId: number;
  quantity: number;
  price?: number; // Opcional según tu JSON
}

export interface OrderRequest {
  sum: number;
  status: string; // "Pending", "Cancelled", etc.
  warehouseId: number;
  providerId: number;
  registryId: number;
  products: ProductOrderRequest[];
}

export interface OrderResponse {
  idOrder: number;
  sum: number;
  status: string;
  warehouse: Warehouse;
  provider: Provider;
  registry: RegistryResponse;
  relatedProducts: {
    productId: number;
    productName: string;
    price: number;
    quantity: number;
  }[];
}

// Funciones API
export const saveRegistry = async (registryData: RegistryRequest) => {
  const res = await axios.post(`${GATEWAY_URL}/api/registry/save`, registryData);
  return res.data;
};

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await axios.get<Product[]>(`${GATEWAY_URL}/api/products`);
  return res.data;
};

export const saveOrderWithRegistry = async (
  registryData: RegistryRequest,
  orderData: Omit<OrderRequest, 'registryId'> & {
    products: Array<{ productId: number; quantity: number; price?: number }>;
  }
) => {
  try {
    const createRegistry = await saveRegistry(registryData);
    const registryId = createRegistry.idRegistry;
    if (!registryId) throw new Error("Registry's ID not returned");

    const fullOrderData: OrderRequest = {
      ...orderData,
      registryId
    };

    const createdOrder = await saveOrder(fullOrderData);
    return {
      registry: createRegistry,
      order: createdOrder
    };
  } catch (error) {
    console.error("Error while creating an order and registry", error);
    throw error;
  }
};

export const saveOrder = async (orderData: OrderRequest) => {
  const res = await axios.post(`${GATEWAY_URL}/api/orders/create`, orderData);
  return res.data;
};

export const getAllOrders = async (): Promise<OrderResponse[]> => {
  const res = await axios.get<OrderResponse[]>(`${GATEWAY_URL}/api/order/all`);
  return res.data;
};

export const updateOrderStatus = async (orderId: number, newStatus: string) => {
  const res = await axios.patch(`${GATEWAY_URL}/api/orders/${orderId}/status`, { status: newStatus });
  return res.data;
};