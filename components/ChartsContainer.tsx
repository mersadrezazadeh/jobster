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
import { string } from "zod";

function ChartsContainer({ dates }: { dates: { created_at: string }[] }) {
  const data = dates.reduce((acc: string[], date) => {
    acc.push(date.created_at);

    return acc;
  }, []);

  // console.log(dates);
  console.log(data);

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
