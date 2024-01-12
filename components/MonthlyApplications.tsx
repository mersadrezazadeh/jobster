"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

import dayjs from "dayjs";

function MonthlyApplications({ dates }: { dates: { date: string }[] }) {
  const data = dates.reduce(
    (acc, date) => {
      const formattedDate = dayjs(date.date).format("MMM YY");

      const existingEntry = acc.find((entry) => entry.date === formattedDate);

      if (existingEntry) existingEntry.count++;
      else acc.push({ date: formattedDate, count: 1 });

      return acc;
    },
    [] as { date: string; count: number }[],
  );

  return (
    <section className="mt-16">
      <Card className="bg-muted py-6">
        <CardTitle className="text-center text-4xl font-semibold">
          Monthly Applications
        </CardTitle>
        <CardDescription>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 50, left: -25, right: 10 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis allowDecimals={false} />
              <Tooltip labelStyle={{ color: "#2563eb" }} />
              <Bar dataKey="count" fill="#2563eb" barSize={75} />
            </BarChart>
          </ResponsiveContainer>
        </CardDescription>
      </Card>
    </section>
  );
}

export default MonthlyApplications;
