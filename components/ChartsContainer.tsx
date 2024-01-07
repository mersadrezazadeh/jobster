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
import dayjs from "dayjs";

function ChartsContainer({ dates }: { dates: { created_at: string }[] }) {
  const data = dates.reduce(
    (acc, date) => {
      const formattedDate = dayjs(date.created_at).format("MMM YY");

      const existingEntry = acc.find((entry) => entry.date === formattedDate);

      if (existingEntry) existingEntry.count++;
      else acc.push({ date: formattedDate, count: 1 });

      return acc;
    },
    [] as { date: string; count: number }[],
  );

  return (
    <section className="mt-16">
      <h1 className="text-center text-4xl font-semibold">
        Monthly Applications
      </h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 50 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="count" fill="#2563eb" barSize={75} />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
}

export default ChartsContainer;
