import React from "react";
import { LineChart, Line } from "recharts";
import styled from "styled-components";
import moment from "moment";

const FORMAT = "YYYY-MM-DD";

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
  display: block;
  margin-top: 5rem;
`;

export const Chart = ({ user: { records } }) => {
  // { "Nagging": ["19.4.2019", "19.4.2019", "19.4.2019"] }
  // [["Nagging", ["19.4.2019", "19.4.2019", "19.4.2019"]]]

  // [["Nagging", { "19.4.2019": 3 }], ["Whining", { "20.4.2019": 1 }]]
  // [{ date: "19.4.2019", "Nagging": 3, }]
  // [{ date: "20.4.2019", "Whining": 1 }]

  const entries = Object.entries(records).map(([record, entries]) => {
    return [record, transform(entries)];
  });

  const now = moment();
  const data = [];

  for (let i = 0; i < 30; i++) {
    now.subtract(i, "days");
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

  console.log(data);

  // const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

  // { name: "Magnus", age: 20 }
  // [["name", "Magnus"], ["age", 20]]

  /*
  const data = [
      {name: '20.04.2019', nagging: 2, whining: 5, sewing: 7},
      {name: '21.04.2019', nagging: 0, whining: 3, sewing: 9},
      {name: '22.04.2019', nagging: 2, whining: 6, sewing: 1},
      {name: '23.04.2019', nagging: 11, whining: 8, sewing: 12},
      {name: '24.04.2019', nagging: 3, whining: 15, sewing: 9}
];
const SimpleLineChart = React.createClass({
	render () {
  	return (
    	<LineChart width={600} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="nagging" stroke="#8884d8" />
       <Line type="monotone" dataKey="whining" stroke="#82ca9d" />
       <Line type="monotone" dataKey="sewing" stroke="#82ca9d" />
      </LineChart>
    );
  }
})
  */

  return (
    <Container>
      <LineChart width={400} height={400} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </Container>
  );
};
