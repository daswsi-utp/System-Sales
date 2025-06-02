import axios from 'axios';
const GATEWAY_URL = process.env.NEXT_PUBLIC_GATEWAY_URL || 'http://localhost:8080';
export interface Brand{
  id: number;
  nameBrand: string;
}

export interface Category{
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

export interface UserRegistry{
    name: string;
    lastName: string;
    email: string;
}

export interface RegistryResponse{
    type: string;
    registrationDate: string;
    user: UserRegistry;
    templateUrl: string
}
export interface RegistryRequest{
    type: string;
    registrationDate: string;
    user:{
        idUser: number;
    };
    templateUrl: string;
}
export interface RegistryEntity{
    idRegistry: number;
    type: string;
    registrationDate: string;
    user:{
        idUser: number;
    };
    templateUrl: string;
}
export interface ProductSaleRequest{
    productId: number;
    quantity: number;
}
export interface SaleRequest{
    sum: number;
    tax: number;
    registryId: number;
    products: ProductSaleRequest[];
}
export const saveRegistry = async(registryData : RegistryRequest) =>{
    const res = await axios.post(`${GATEWAY_URL}/api/registry/save`, registryData);
    return res.data;
}
export const getAllProducts = async(): Promise<Product[]> =>{
    const res = await axios.get<Product[]>(`${GATEWAY_URL}/api/products`);
    return res.data;
}
export const saveSaleWithRegistry = async(registryData: RegistryRequest, saleData: Omit<SaleRequest, 'registryID'>) =>{
    try {
        const createRegistry = await saveRegistry(registryData);
        const registryId = createRegistry.idRegistry;
        if (!registryId) throw new Error("Registry's ID not returned");

        const fullSaleData: SaleRequest = {
            ...saleData, registryId
        };

        const createdSale = await saveSale(fullSaleData);
        return{
            registry: createRegistry,
            sale: createdSale
        };
    } catch(error){
        console.error("Error while creating a sale and registry", error);
        throw error;
    }
}
export const saveSale = async(saleData : SaleRequest) =>{
    const res = await axios.post(`${GATEWAY_URL}/api/sales/create`, saleData);
    return res.data;
}