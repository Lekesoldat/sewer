import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import styled from 'styled-components';
import moment from 'moment';

const FORMAT = 'YYYY-MM-DD';
const COLORS = [
  '#365577',
  '#c78aaa',
  '#7eaed3',
  '#a9a9a9',
  '#fcc3a3',
  '#270f36',
  '#F2BF2F',
  '#DB4210'
];

const transform = entries =>
  entries.reduce((result, entry) => {
    const key = moment(entry).format(FORMAT);

    if (!(key in result)) {
      result[key] = 0;
    }

    result[key] += 1;
    return result;
  }, {});

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
`;

export const Chart = ({ user: { records } }) => {
  const entries = Object.entries(records).map(([record, entries]) => {
    return [record, transform(entries)];
  });

  const now = moment();
  const data = [];

  for (let i = 0; i < 14; i++) {
    now.subtract(i, 'days');
    const date = now.format(FORMAT);
    const result = { date };

    for (const [key, value] of entries) {
      if (date in value) {
        result[key] = value[date];
      } else {
        result[key] = 0;
      }
    }

    data.push(result);
  }

  const colorsLeft = COLORS.slice();
  const colors = {};
  for (const key of Object.keys(records)) {
    const index = Math.floor(Math.random() * colorsLeft.length);
    colors[key] = colorsLeft.splice(index, 1)[0];
  }

  return (
    <Container>
      <LineChart
        width={800}
        height={300}
        data={data.reverse()}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey='date' />
        <YAxis />
        <CartesianGrid strokeDasharray='3 3' />
        <Tooltip />
        <Legend />
        {Object.keys(records).map(key => (
          <Line key={key} type='monotone' dataKey={key} stroke={colors[key]} />
        ))}
      </LineChart>
    </Container>
  );
};
