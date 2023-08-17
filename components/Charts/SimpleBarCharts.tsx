import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const fecha = new Date();

const data = [
  {
    day: fecha.getDate(),
    weight: 60,
  },
  {
    day: fecha.getDate() + 1,
    weight: 69,
  },

  {
    day: fecha.getDate() + 2,
    weight: 72,
  },

  {
    day: fecha.getDate() + 3,
    weight: 63,
  },

  {
    day: fecha.getDate() + 4,
    weight: 67,
  },

  {
    day: fecha.getDate() + 5,
    weight: 60,
  },
  {
    day: fecha.getDate() + 6,
    weight: 60,
  },
];





export const SimpleBarCharts = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <BarChart data={data} margin={{ top: 20, right: 10, left: -20 }}>
        {/* <CartesianGrid strokeDasharray="4 1 " /> */}
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="weight"
          fill="#2dd4bf"
          barSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
