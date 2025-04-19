"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/Components/ui/chart"

const chartData = [
  { month: "January", nvidia: 186, amd: 80 },
  { month: "February", nvidia: 305, amd: 200 },
  { month: "March", nvidia: 237, amd: 120 },
  { month: "April", nvidia: 73, amd: 190 },
  { month: "May", nvidia: 209, amd: 130 },
  { month: "June", nvidia: 214, amd: 140 },
]

const chartConfig = {
  nvidia: {
    label: "Nvidia",
    color: "#76b900",  // Verde oficial de NVIDIA
  },
  amd: {
    label: "AMD",
    color: "#ED1C24",   // Rojo característico de AMD
  },
} satisfies ChartConfig

export function TabelGraficsComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>GPU Sales Comparison</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="nvidia" fill="#76b900" radius={4} />
            <Bar dataKey="amd" fill="#ED1C24" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          <TrendingUp className="h-4 w-4 text-[#76b900]" />
          <span>NVIDIA: +12% last quarter</span>
        </div>
        <div className="flex gap-2 font-medium leading-none">
          <TrendingUp className="h-4 w-4 text-[#ED1C24]" />
          <span>AMD: +8% last quarter</span>
        </div>
      </CardFooter>
    </Card>
  )
}