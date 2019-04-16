import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const data = [
  { title: 1, count: 3 },
  { title: 2, count: 8 },
  { title: 3, count: 4 },
  { title: 4, count: 5 },
  { title: 5, count: 1 },
  { title: 6, count: 12 }
];

export default () => {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      <VictoryAxis
        tickValues={[1, 2, 3, 4, 5, 6]}
        tickFormat={[
          'Nagging',
          'Expression of Dissatisfaction',
          'Sarcasm',
          'Make themselves a victim',
          'Yelling',
          'Whining'
        ]}
        fixLabelOverlap={true}
        style={{
          tickLabels: { fontSize: 4.7 }
        }}
      />
      <VictoryAxis
        dependentAxis
        tickFormat={x => `${x} times`}
        style={{
          tickLabels: { fontSize: 4.7 }
        }}
      />
      <VictoryBar data={data} x='title' y='count' />
    </VictoryChart>
  );
};
