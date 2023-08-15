import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const fecha = new Date();

const data = [
  {
    day: fecha.getDate(),
    IMC: 33.1,
  },
  {
    day: fecha.getDate() + 1,
    IMC: 32.6,
  },

  {
    day: fecha.getDate() + 2,
    IMC: 30.5,
  },

  {
    day: fecha.getDate() + 3,
    IMC: 30.8,
  },

  {
    day: fecha.getDate() + 4,
    IMC: 28.3,
  },

  {
    day: fecha.getDate() + 5,
    IMC: 24.5,
  },
];

export const StackedAreaChart = () => {
  return (
    <ResponsiveContainer width="100%" aspect={2.3}>
      <AreaChart
        width={320}
        height={200}
        data={data}
        margin={{ top: 30, right: 30, bottom: 10, left: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="day"/>
        <YAxis />
        <Tooltip/>
        <Area type="monotone" dataKey="IMC" stroke='#10b981' fill='#bef264' fillOpacity={0.2}/>
      </AreaChart>
    </ResponsiveContainer>
  );
};
