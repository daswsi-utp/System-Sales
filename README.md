Members-Sales:
* Clavijo Parari, Jack User:  jackutp
* Moroco Rios, Kenyi Italo User: KenjiPlatanazo
* Neyra Palomino, Yody User: YordyNeyraxyz
* Palomino Contreras, Ricardo User: Richar40k
* Quispe Aguilar, Imanol User: Im3Im3


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
# or
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Sales-System
## Description 
In this project, the objective is to automate and efficiently manage a company's product marketing process. This system allows for customer registration, product and inventory management, sales processing, issuing receipts (such as invoices or bills), and generating sales reports in real time. The application is designed with an intuitive interface to facilitate user interaction and is structured into functional modules, such as the inventory module, the sales module, and the reporting module. In addition, databases are implemented for secure information storage, and object-oriented programming principles and good development practices are applied.

The main objective of the system is to improve operational efficiency, reduce human error, and provide more precise control over business operations.

## Technologies Used
* **FRONTED**: Nest Js
* **BACKEND**: Spring - Boot
* **DATABASE**: MySQL
* **LIBRARIES**: LUCIDE-REACT, TAILWIND, REACT-ICONS
* **VERSION CONTROLER**: GitHub
* **OTHER TOOLS**: MORE LATER

## REQUERIMENTS
### FUNCTIONAL REQUERIMENTS
* **RQF 01 Employee can search by order id, order name**
* **RQF 02 The employee can view the order by order id**  
* **RQF 03 Employee can select the status (complete, pending, cancelled) of the order.** 
* **RQF 04 Employee can add a new order for the store.**
* **RQF 05 The employee can select his name to place the order.**
* **RQF 06 The employee can select a date for the order to be fulfilled.**
* **RQF 07 The employee can search by name for the component he/she wants to order.**
* **RQF 08 The employee can delete his order in case it has been cancelled.**
* **RQF 09 The employee can select a category.**
* **RQF 10 The employee can search by product name.**
* **RQF 11 The employee can edit each product he/she chooses.**
* **RQF 12 Employee can view their personal information, address and password.**
* **RQF 13 The employee can edit his personal information, address and password.**
* **RQF 14 The user must be able to visualize the amount of sales made each month and 6 months.**
* **RQF 15 The user can visualize the top 1 of sales in graphic cards.**
* **RQF 16 The user can view the current stock quantity.**
* **RQF 17 The user can visualize the sales of processors from the last 7 days to 3 months.**
* **RQF 18 The user can visualize the current top employees.**
* **RQF 19 Search orders by ID or name.**
* **RQF 20 View order details by ID.**
* **RQF 21 Update order status (complete/pending/cancelled).**
* **RQF 22 Create new order (with employee, date and components).**
* **RQF 23 Delete order if canceled.**
* **RQF 24 Filter products by category or name.**
* **RQF 25 Edit selected product information.**
* **RQF 26 View and edit personal information (data, address, password).**
* **RQF 27 Monthly and semi-annual sales.**
* **RQF 28 View Top 1 graphics cards sold.**
* **RQF 29 View current stock in inventory.**
* **RQF 30 View processor sales (7 days to 3 months).**
* **RQF 31 View Top employees (metrics to be defined).**
* **RQF 32 The employee can view different parameters in floating cards (cash sales, card sales, total sales).**
* **RQF 33 The employee can filter sales by start and end date..**
* **RQF 34 The employee can filter sales by payment method.**
* **RQF 35 The employee can filter sales by salesperson.**
* **RQF 36 The employee can filter sales by status (paid, pending).**
* **RQF 37 The employee can view a table with all sales.**
* **RQF 38 The employee can download an invoice corresponding to a sale.**
* **RQF 39 The employee can export a report based on the contents of the sales table.**

# 📋 Catalog of Requirements

| **No.**   | **Description**                                                                                   | **Version** |
|-----------|---------------------------------------------------------------------------------------------------|-------------|
| **RQF 01** | Employee can search by **Order ID** or **Order Name**.                                           | 1           |
| **RQF 02** | The employee can **view the order by Order ID**.                                                 | 1           |
| **RQF 03** | Employee can **select the status** (complete, pending, cancelled) of the order.                  | 1           |
| **RQF 04** | Employee can **add a new order** for the store.                                                  | 1           |
| **RQF 05** | The employee can **select their name** to place the order.                                       | 1           |
| **RQF 06** | The employee can **select a date** for the order to be fulfilled.                                | 1           |
| **RQF 07** | The employee can **search by name** for the component they want to order.                        | 1           |
| **RQF 08** | The employee can **delete their order** if it has been cancelled.                                | 1           |
| **RQF 09** | The employee can **select a category** for the product.                                          | 1           |
| **RQF 10** | The employee can **search by product name**.                                                     | 1           |
| **RQF 11** | The employee can **edit each product** they choose.                                              | 1           |
| **RQF 12** | Employee can view their **personal information, address, and password**.                         | 1           |
| **RQF 13** | The employee can **edit their personal information, address, and password**.                     | 1           |
| **RQF 14** | The user must be able to **visualize the amount of sales** made each month and 6 months.         | 1           |
| **RQF 15** | The user can **visualize the top 1 of sales in graphic cards**.                                  | 1           |
| **RQF 16** | The user can **view the current stock quantity**.                                                | 1           |
| **RQF 17** | The user can **visualize the sales of processors** from the last 7 days to 3 months.             | 1           |
| **RQF 18** | The user can **visualize the current top employees**.                                            | 1           |
| **RQF 19** | **Search orders by ID or name**.                                                                 | 1           |
| **RQF 20** | **View order details by ID**.                                                                    | 1           |
| **RQF 21** | **Update order status** (complete/pending/cancelled).                                            | 1           |
| **RQF 22** | **Create new order** (with employee, date, and components).                                      | 1           |
| **RQF 23** | **Delete order if cancelled**.                                                                   | 1           |
| **RQF 24** | **Filter products by category or name**.                                                         | 1           |
| **RQF 25** | **Edit selected product information**.                                                           | 1           |
| **RQF 26** | **View and edit personal information** (data, address, password).                                | 1           |
| **RQF 27** | **Monthly and semi-annual sales**.                                                               | 1           |
| **RQF 28** | **View Top 1 graphics cards sold**.                                                              | 1           |
| **RQF 29** | **View current stock in inventory**.                                                             | 1           |
| **RQF 30** | **View processor sales (7 days to 3 months)**.                                                   | 1           |
| **RQF 31** | **View Top employees** (metrics to be defined).                                                  | 1           |
| **RQF 32** | The employee can **view different parameters in floating cards** (cash sales, card sales, total sales). | 1     |
| **RQF 33** | The employee can **filter sales by start and end date**.                                         | 1           |
| **RQF 34** | The employee can **filter sales by payment method**.                                             | 1           |
| **RQF 35** | The employee can **filter sales by salesperson**.                                                | 1           |
| **RQF 36** | The employee can **filter sales by status** (paid, pending).                                     | 1           |
| **RQF 37** | The employee can **view a table with all sales**.                                                | 1           |
| **RQF 38** | The employee can **download an invoice** corresponding to a sale.                                | 1           |
| **RQF 39** | The employee can **export a report** based on the contents of the sales table.                   | 1           |




### NO FUNCTIONAL REQUERIMENTS
* **NRQF 01 Security**
* **NRQF 02 Available** 
* **NRQF 03 Scalability** 
* **NRQF 04 Portability** 
* **NRQF 05 Maintainability** 

