import axios from 'axios';

const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:8080';

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

export interface User {
  id: number
  name: string;
  lastName: string;
  email: string;
}

export interface Registry {
  type: string;
  registrationDate: string;
  user: User;
  templateUrl: string;
}

export interface RelatedProduct {
  productId: number;
  productName: string;
  price: number;
  quantity: number;
}

export interface OrderResponse {
  id: number;
  warehouse: Warehouse;
  provider: Provider;
  registry: Registry;
  relatedProducts: RelatedProduct[];
  sum: number;
  status: number; 
}


export interface UserResponse {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

export interface Product {
  idProduct: number;
  nameProduct: string;
  priceProduct: number;
  quantityProduct: number;
}

export const getAllWarehouses = async (): Promise<Warehouse[]> => {
  try {
    const res = await axios.get<Warehouse[]>(`${GATEWAY_URL}/api/order/warehouses`);
    return res.data;
  } catch (error) {
    console.error("Error fetching warehouses:", error);
    throw error; // Lanza el error para que pueda ser manejado en el useEffect
  }
};

export const getAllProviders = async (): Promise<Provider[]> => {
  try {
    const res = await axios.get<Provider[]>(`${GATEWAY_URL}/api/order/providers`);
    return res.data;
  } catch (error) {
    console.error("Error fetching providers:", error);
    throw error; // Lanza el error para que pueda ser manejado en el useEffect
  }
};



export const getAvailableProducts = async (): Promise<Product[]> => {
  const res = await axios.get<Product[]>(`${GATEWAY_URL}/api/products`); // Asegúrate de que esta URL sea correcta
  return res.data;
};

export const getAllUsers = async (): Promise<UserResponse[]> => {
  const res = await axios.get<UserResponse[]>(`${GATEWAY_URL}/api/users`); // Asegúrate de que esta URL sea correcta
  return res.data;
};


export const getAllOrders = async (): Promise<OrderResponse[]> => {
  const res = await axios.get<OrderResponse[]>(`${GATEWAY_URL}/api/order/all`);
  return res.data;
}

export const getOrdersById = async (id: string): Promise<OrderResponse> => {
  const res = await axios.get<OrderResponse>(`${GATEWAY_URL}/api/order/find/${id}`);
  return res.data;
};

export const saveOrder = async (orderData: any) => {
  const res = await axios.post(`${GATEWAY_URL}/api/order/create`, orderData);
  return res.data;
}


export enum OrderStatus {
  Completed = 1,
  Pending = 2,
  Cancelled = 3,
}


export async function updateOrderStatus(orderId: string, status: number) {
  return axios.put(`${GATEWAY_URL}/api/order/update/${orderId}`, { status }); // ✅ cuerpo con clave
}



export const getOrderStatusName = (status: OrderStatus): string => {
  switch (status) {
    case OrderStatus.Completed:
      return 'Completado';
    case OrderStatus.Pending:
      return 'Pendiente';
    case OrderStatus.Cancelled:
      return 'Cancelado';
    default:
      return 'Desconocido';
  }
};







/*
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

*/