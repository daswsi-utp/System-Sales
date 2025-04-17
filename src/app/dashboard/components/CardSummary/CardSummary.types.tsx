import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/Components/ui/card";
import { JSX } from "react";

interface CardSummaryProps {
  title: string;
  total: string;
  average: number;
  trend?: string;
  icon: JSX.Element;
}

export const CardSummaryTypes = ({ title, total, average, trend, icon }: CardSummaryProps) => {
  return (
    <Card className="h-full shadow-sm">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 p-4">
        <div className="space-y-1">
          {title.split("\n").map((line, index) => (
            <CardTitle key={index} className="text-sm font-semibold">
              {line}
            </CardTitle>
          ))}
        </div>
        <div className="flex flex-col items-end space-y-1">
          {icon}
          <CardDescription className="text-xs">{trend}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="p-4 pt-0">
        <div className="space-y-1">
          {total.split("\n").map((line, index) => (
            <div 
              key={index}
              className={`${index === 0 ? "text-2xl" : "text-base"} font-bold`}
            >
              {line}
            </div>
          ))}
          <CardDescription className="text-xs text-muted-foreground">
            Average: {average}
          </CardDescription>
        </div>
      </CardContent>
    </Card>
  );
};