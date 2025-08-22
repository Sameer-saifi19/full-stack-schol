"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A multiple bar chart"

const chartData = [
  { day: "Mon", desktop: 186, mobile: 80 },
  { day: "Tue", desktop: 305, mobile: 200 },
  { day: "Wed", desktop: 237, mobile: 120 },
  { day: "Thur", desktop: 73, mobile: 190 },
  { day: "Fri", desktop: 209, mobile: 130 },
  { day: "Sat", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#3b82f6",
  },
  mobile: {
    label: "Mobile",
    color: "#f97316",
  },
} satisfies ChartConfig

export function AttendanceChart() {
  return (
    <Card className="h-[100%]">
      <CardHeader>
        <CardTitle>Attendance</CardTitle>
        <CardDescription className="flex gap-4">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#3b82f6]"></div>
                    <p>Present</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-[#f97316]"></div>
                    <p>Absent</p>
                </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
