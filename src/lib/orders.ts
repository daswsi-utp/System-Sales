type Warehouse = {
    id: number;
    nameWarehouse: string;
    address: string;
};

type Provider = {
    id: number;
    nameProvider: string;
    ruc: string;
};

type User = {
    name: string;
    lastName: string;
    email: string;
};

type Registry = {
    type: string;
    registrationDate: string;
    user: User;
    templateUrl: string;
};

type RelatedProduct = {
    productId: number;
    productName: string;
    price: number;
    quantity: number;
};

export type OrderStatus = 'Completed' | 'Pending' | 'Cancelled';

export type Order = {
    id: string; 
    warehouse: Warehouse;
    provider: Provider;
    registry: Registry;
    relatedProducts: RelatedProduct[];
    sum: number;
    status: OrderStatus;
};
export const initialOrders: Order[] = [
    {
        id: '00004',
        warehouse: {
            id: 6,
            nameWarehouse: "Main Warehouse",
            address: "123 Main St"
        },
        provider: {
            id: 11,
            nameProvider: "Tech Distributors S.A.",
            ruc: "20123456789"
        },
        registry: {
            type: "Order",
            registrationDate: "2025-05-25T10:30:00.000+00:00",
            user: {
                name: "Italo Kenyi",
                lastName: "Rios",
                email: "test@gmail.com"
            },
            templateUrl: "http://test.com/templateOrder.pdf"
        },
        relatedProducts: [
            {
                productId: 10,
                productName: "Kingston 16GB RAM",
                price: 80.0,
                quantity: 20
            },
            {
                productId: 1,
                productName: "NVIDIA RTX 360",
                price: 2500.0,
                quantity: 30
            }
        ],
        sum: 5000.00,
        status: "Pending"
    }
];
    
export const getOrders = (): Order[] => {
  if (typeof window === 'undefined') return initialOrders;

  try {
    const savedOrders = localStorage.getItem('orders');
    const parsed = savedOrders ? JSON.parse(savedOrders) : initialOrders;

    // Validación rápida: asegúrate que todos los pedidos tengan `registry`
    if (Array.isArray(parsed) && parsed.every(order => order.registry?.user)) {
      return parsed;
    }

    return initialOrders;
  } catch (e) {
    console.error("Error parsing orders from localStorage", e);
    return initialOrders;
  }
};


export const saveOrders = (orders: Order[]) => {
    localStorage.setItem('orders', JSON.stringify(orders));
};

export const updateOrderStatus = (orderId: string, newStatus: OrderStatus): Order[] => {
    const orders = getOrders();
    const updatedOrders = orders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
    );
    saveOrders(updatedOrders);
    return updatedOrders;
};


/*

{
    "warehouse": {
        "id": 6,
        "nameWarehouse": "Main Warehouse",
        "address": "123 Main St"
    },
    "provider": {
        "id": 11,
        "nameProvider": "Tech Distributors S.A.",
        "ruc": "20123456789"
    },
    "registry": {
        "type": "Order",
        "registrationDate": "2025-05-25T10:30:00.000+00:00",
        "user": {
            "name": "Italo Kenyi",
            "lastName": "Rios",
            "email": "test@gmail.com"
        },
        "templateUrl": "http://test.com/templateOrder.pdf"
    },
    "relatedProducts": [
        {
            "productId": 10,
            "productName": "Kingston 16GB RAM",
            "price": 80.0,
            "quantity": 20
        },
        {
            "productId": 1,
            "productName": "NVIDIA RTX 360",
            "price": 2500.0,
            "quantity": 30
        }
    ],
    "sum": 5000.00,
    "status": "PENDING"
}
*/

/*
type OrderItem = {
    name: string;
    price: string;
    quantity: number;
};

export type OrderStatus = 'Completed' | 'Pending' | 'Cancelled';

export type Order = {
    id: string;
    customer: string;
    date: string;
    items: OrderItem[];
    total: string;
    status: OrderStatus;
};

export const initialOrders: Order[] = [
    {
        id: '00001',
        customer: 'Nathan Smith',
        date: '14 Jun 2023, 10:30 AM',
        items: [
            { name: 'Intel Core i5-12400F', price: 'S/ 700.00', quantity: 2 },
            { name: 'Corsair Vengeance 16GB DDR4', price: 'S/ 180.00', quantity: 1 },
            { name: 'Samsung 970 EVO Plus 500GB', price: 'S/ 250.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Pending'
    },
    {
        id: '00002',
        customer: 'Stephanie Anderson',
        date: '15 Jun 2023, 11:45 AM',
        items: [
            { name: 'AMD Ryzen 5 5600X', price: 'S/ 800.00', quantity: 1 },
            { name: 'NVIDIA GeForce RTX 3060 Ti', price: 'S/ 600.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Completed'
    },
    {
        id: '00003',
        customer: 'Rimon Hammer',
        date: '16 Jun 2023, 02:15 PM',
        items: [
            { name: 'ASUS ROG Strix B550-F', price: 'S/ 500.00', quantity: 1 },
            { name: 'Seagate Barracuda 2TB HDD', price: 'S/ 200.00', quantity: 1 },
            { name: 'EVGA 750W 80+ Gold PSU', price: 'S/ 350.00', quantity: 1 },
            { name: 'Cooler Master Hyper 212', price: 'S/ 100.00', quantity: 1 },
            { name: 'NZXT H510 Case', price: 'S/ 250.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Cancelled'
    },
    {
        id: '00004',
        customer: 'Stiven Cruz',
        date: '17 Jun 2023, 09:20 AM',
        items: [
            { name: 'Intel Core i7-12700K', price: 'S/ 1100.00', quantity: 1 },
            { name: 'Crucial Ballistix 32GB DDR4', price: 'S/ 300.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Completed'
    },
    {
        id: '00005',
        customer: 'Nicolas Torres',
        date: '18 Jun 2023, 03:40 PM',
        items: [
            { name: 'AMD Ryzen 7 5800X', price: 'S/ 900.00', quantity: 1 },
            { name: 'Gigabyte AORUS NVMe Gen4 1TB', price: 'S/ 350.00', quantity: 1 },
            { name: 'Noctua NH-D15 Cooler', price: 'S/ 150.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Pending'
    },
    {
        id: '00006',
        customer: 'Jorge Perez',
        date: '19 Jun 2023, 01:10 PM',
        items: [
            { name: 'NVIDIA GeForce RTX 3070', price: 'S/ 1200.00', quantity: 1 },
            { name: 'Thermaltake Toughram 16GB RGB', price: 'S/ 200.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Completed'
    },
    {
        id: '00007',
        customer: 'Pedro Castillo',
        date: '20 Jun 2023, 10:05 AM',
        items: [
            { name: 'ASUS TUF Gaming X570-Plus', price: 'S/ 450.00', quantity: 1 },
            { name: 'AMD Ryzen 9 5900X', price: 'S/ 950.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Cancelled'
    },
    {
        id: '00008',
        customer: 'Alan Romeo',
        date: '21 Jun 2023, 04:30 PM',
        items: [
            { name: 'Corsair iCUE 4000X Case', price: 'S/ 300.00', quantity: 1 },
            { name: 'Corsair RM850x PSU', price: 'S/ 350.00', quantity: 1 },
            { name: 'G.Skill Trident Z RGB 32GB', price: 'S/ 400.00', quantity: 1 },
            { name: 'Deepcool Castle 240EX', price: 'S/ 150.00', quantity: 1 },
            { name: 'Logitech G Pro Keyboard', price: 'S/ 200.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Completed'
    },
    {
        id: '00009',
        customer: 'Nahira Mamani',
        date: '22 Jun 2023, 11:15 AM',
        items: [
            { name: 'Intel Core i9-12900K', price: 'S/ 1300.00', quantity: 1 },
            { name: 'Arctic Freezer 34 eSports', price: 'S/ 100.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Pending'
    },
    {
        id: '00010',
        customer: 'Pedro Juarez',
        date: '23 Jun 2023, 02:50 PM',
        items: [
            { name: 'MSI MAG B660 Tomahawk', price: 'S/ 400.00', quantity: 1 },
            { name: 'AMD Ryzen 5 5600G', price: 'S/ 600.00', quantity: 1 },
            { name: 'WD Black SN850 1TB', price: 'S/ 400.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Cancelled'
    },
    {
        id: '00011',
        customer: 'Itaro Quilco',
        date: '24 Jun 2023, 09:25 AM',
        items: [
            { name: 'NVIDIA GeForce RTX 3080', price: 'S/ 1400.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Pending'
    },
    {
        id: '00012',
        customer: 'Sebastian Flores',
        date: '25 Jun 2023, 01:45 PM',
        items: [
            { name: 'Lian Li PC-O11 Dynamic', price: 'S/ 350.00', quantity: 1 },
            { name: 'ASUS ROG Thor 850W PSU', price: 'S/ 450.00', quantity: 1 },
            { name: 'Corsair Dominator Platinum 64GB', price: 'S/ 600.00', quantity: 1 }
        ],
        total: 'S/ 1400.00',
        status: 'Completed'
    }
];

export const getOrders = (): Order[] => {
    if (typeof window === 'undefined') return initialOrders;
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : initialOrders;
};

export const saveOrders = (orders: Order[]) => {
    localStorage.setItem('orders', JSON.stringify(orders));
};

export const updateOrderStatus = (orderId: string, newStatus: OrderStatus) => {
    const orders = getOrders();
    const updatedOrders = orders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
    );
    saveOrders(updatedOrders);
    return updatedOrders;
};

*/