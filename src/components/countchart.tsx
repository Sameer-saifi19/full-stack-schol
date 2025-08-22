"use client";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { EllipsisVertical } from "lucide-react";

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: 15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
  {
    name: "35-39",
    uv: 8.22,
    pv: 9800,
    fill: "#82ca9d",
  },
  {
    name: "40-49",
    uv: 8.63,
    pv: 3908,
    fill: "#a4de6c",
  },
  {
    name: "50+",
    uv: 2.63,
    pv: 4800,
    fill: "#d0ed57",
  },
  {
    name: "unknow",
    uv: 6.67,
    pv: 4800,
    fill: "#ffc658",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

export default function CountChart() {
  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Students</CardTitle>
            <CardAction>
              {" "}
              <EllipsisVertical />{" "}
            </CardAction>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-full h-[75%]">
              <ResponsiveContainer>
                <RadialBarChart
                  cx="50%"
                  cy="50%"
                  innerRadius="70%"
                  outerRadius="100%"
                  barSize={15}
                  data={data}
                  startAngle={90}
                  endAngle={-270}
                >
                  <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                  />
                  <RadialBar background dataKey="value" cornerRadius={10} />
                </RadialBarChart>
              </ResponsiveContainer>
            </div>
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
      </div>
    </>
  );
}
