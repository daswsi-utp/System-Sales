import { Metadata } from "next";
import { CardSummary } from "./components/CardSummary/CardSummary"
import { Component } from "./components/TableDashboard/TableDashboard"
import { TableTotal } from "./components/TableSellers/TableTotal";
import { TabelGraficsComponent } from "./components/TableGraphycs/TableGraphycsVideo";
export const metadata: Metadata = {
  title: 'Dashboard | Main',
  description: 'On this page you can see a summary of your sales.',
};
export default function DashboardPage() {
  return (

    <div>
      <h2 className="text-2xl mb-4 text-[#79808a] ml-4
        ">DASHBOARD</h2>
      <div className=" grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        <CardSummary />
      </div>
      <div className="mt-6 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <Component />
      </div>
      <div className="mt-6 mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="w-full">
            <TabelGraficsComponent />
          </div>
          <div className="w-full">
          <TableTotal />
          </div>
        </div>
      </div>
    </div>
  )
}
