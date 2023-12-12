'use client';
import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const data = [
  { name: 'KWR', value: 4000000 },
  { name: 'Hoho STO', value: 1000000 },
];

const data02 = [{ name: '엔터테인먼트', value: 100 }];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill='white'
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline='central'
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function MyAsset() {
  return (
    <PieChart width={1200} height={400}>
      
      <Pie
        dataKey='value'
        isAnimationActive={true}
        data={data}
        labelLine={false}
        cx={400}
        cy={200}
        outerRadius={100}
        fill='#8884d8'
        label={renderCustomizedLabel}
        className='text-lg'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Pie
        dataKey='value'
        isAnimationActive
        data={data02}
        cx={1000}
        cy={200}
        outerRadius={100}
        fill='#8884d8'
        label
        className='text-lg'
      />
      <Tooltip />
    </PieChart>
  );
}
