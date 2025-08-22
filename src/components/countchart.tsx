"use client";

import { EllipsisVertical, TrendingUp } from "lucide-react";
import { LabelList, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with a label";

const chartData = [
  { browser: "Total", visitors: 1000, fill: "#f4f4e3" },
  { browser: "chrome", visitors: 900, fill: "#3b82f6" },
  { browser: "safari", visitors: 120, fill: "#f97316" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function CountChart() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Students</CardTitle>
        <CardAction>
          {" "}
          <EllipsisVertical />{" "}
        </CardAction>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={40}
            outerRadius={100}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey="browser" />}
            />
            <RadialBar dataKey="visitors" background>
              <LabelList
                position="insideStart"
                dataKey="browser"
                className="fill-white capitalize mix-blend-luminosity"
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center justify-around">
        <div className="flex justify-center items-center flex-col gap-1">
          <div className="w-5 h-5 bg-blue-500 rounded-full"></div>
          <CardTitle>1234</CardTitle>
          <CardDescription>Boy 55%</CardDescription>
        </div>
        <div className="flex justify-center items-center flex-col gap-1">
          <div className="w-5 h-5 bg-orange-500 rounded-full"></div>
          <CardTitle>1156</CardTitle>
          <CardDescription>Girl 45%</CardDescription>
        </div>
      </CardFooter>
    </Card>
  );
}
