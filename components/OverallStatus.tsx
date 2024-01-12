"use client";

import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

type Status = {
  status:
    | "Applied"
    | "Interviewed"
    | "Accepted"
    | "Rejected"
    | "Offered"
    | "Wishlist";
};

type StatusChartProps = {
  status: Status[];
};

type StartData = {
  status: string;
  value: number;
  color: string;
};

const startDataLight = [
  {
    status: "Applied",
    value: 0,
    color: "#2563eb",
  },
  {
    status: "Interviewed",
    value: 0,
    color: "#7d3ddd",
  },
  {
    status: "Accepted",
    value: 0,
    color: "#16a582",
  },
  {
    status: "Rejected",
    value: 0,
    color: "#ef4544",
  },
];

const startDataDark = [
  {
    status: "Applied",
    value: 0,
    color: "#3b82f6",
  },
  {
    status: "Interviewed",
    value: 0,
    color: "#6d28d9",
  },
  {
    status: "Accepted",
    value: 0,
    color: "#22c55e",
  },
  {
    status: "Rejected",
    value: 0,
    color: "#7f1d1d",
  },
];

function prepareData(startData: StartData[], status: Status[]) {
  function incArrayValue(arr: StartData[], field: string) {
    return arr.map((obj: StartData) =>
      obj.status === field ? { ...obj, value: obj.value + 1 } : obj,
    );
  }
  const data = status.reduce((arr: StartData[], status: Status) => {
    const stat = status.status;
    if (stat === "Applied") return incArrayValue(arr, "Applied");
    if (stat === "Interviewed") return incArrayValue(arr, "Interviewed");
    if (stat === "Accepted") return incArrayValue(arr, "Accepted");
    if (stat === "Rejected") return incArrayValue(arr, "Rejected");

    return arr;
  }, startData);

  return data;
}

function StatusChart({ status }: StatusChartProps) {
  const isDark = document.documentElement.classList.contains("dark");

  const startData = isDark ? startDataDark : startDataLight;

  const data = prepareData(startData, status);

  console.log(data);

  return (
    <section>
      <Card className="size-full bg-muted pt-6">
        <CardTitle className="text-center text-4xl font-semibold">
          Overall Status
        </CardTitle>
        <CardContent className="p-0">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                nameKey="status"
                dataKey="value"
                innerRadius={45}
                outerRadius={95}
                paddingAngle={5}
              >
                {data.map((entry) => (
                  <Cell
                    fill={entry.color}
                    stroke={entry.color}
                    key={entry.status}
                  />
                ))}
              </Pie>

              <Legend
                verticalAlign="middle"
                align="right"
                width={110}
                layout="vertical"
                iconSize={10}
                iconType="circle"
              />

              <Tooltip
                contentStyle={{
                  fontSize: "14px",
                  borderRadius: "1000px",
                  fontWeight: 500,
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </section>
  );
}

export default StatusChart;
