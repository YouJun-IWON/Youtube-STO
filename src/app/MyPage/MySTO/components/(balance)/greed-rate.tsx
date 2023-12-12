'use client';
import { cn } from '@/lib/utils';
/* eslint-disable no-shadow */
import React, { ReactElement } from 'react';
import { PieChart, Pie, Cell } from 'recharts';

interface DataItem {
  name: string;
  value: number;
  color: string;
}

const RADIAN = Math.PI / 180;
const data: DataItem[] = [
  { name: 'A', value: 25, color: '#ff0000' },
  { name: 'B', value: 45, color: '#00ff00' },
  { name: 'C', value: 80, color: '#0000ff' },
];
const cx = 150;
const cy = 200;
const iR = 50;
const oR = 100;
const value = 50;

const needle = (
  value: number,
  data: DataItem[],
  cx: number,
  cy: number,
  iR: number,
  oR: number,
  color: string
): ReactElement[] => {
  let total = 0;
  data.forEach((v) => {
    total += v.value;
  });
  const ang = 180.0 * (1 - value / total);
  const length = (iR + 2 * oR) / 3;
  const sin = Math.sin(-RADIAN * ang);
  const cos = Math.cos(-RADIAN * ang);
  const r = 5;
  const x0 = cx + 5;
  const y0 = cy + 5;
  const xba = x0 + r * sin;
  const yba = y0 - r * cos;
  const xbb = x0 - r * sin;
  const ybb = y0 + r * cos;
  const xp = x0 + length * cos;
  const yp = y0 + length * sin;

  return [
    <circle key='circle' cx={x0} cy={y0} r={r} fill={color} stroke='none' />,
    <path
      key='path'
      d={`M${xba} ${yba}L${xbb} ${ybb} L${xp} ${yp} L${xba} ${yba}`}
      stroke='#none'
      fill={color}
    />,
  ];
};

const GreedRate: React.FC = (): ReactElement => {
  return (
    <PieChart width={400} height={200} className='-mt-20'>
      <Pie
        dataKey='value'
        startAngle={180}
        endAngle={0}
        data={data}
        cx={cx}
        cy={cy}
        innerRadius={iR}
        outerRadius={oR}
        fill='#8884d8'
        stroke='none'
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      {needle(value, data, cx, cy, iR, oR, '#d0d000')}
    </PieChart>
  );
};

export default GreedRate;
