import React from 'react';
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = props => {
  const dataPointValues = props.dataPoints.map((datapoint) => datapoint.value)
  const totalMaximum = Math.max(...dataPointValues)

  return <div className="chart">
    {props.dataPoints.map(({ label, value }) =>
      <ChartBar
        key={label}
        value={value}
        maxValue={totalMaximum}
        label={label}
      />
    )}
  </div>;
};

export default Chart;
