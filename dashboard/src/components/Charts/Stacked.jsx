import React from 'react'
import { ChartComponent, Inject, Legend, Category, StackingColumnSeries, Tooltip, SeriesCollectionDirective, SeriesDirective } from '@syncfusion/ej2-react-charts';
import { stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const Stacked = ({ width, height, id, data }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id={id}
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{
        border: {
          width: 0
        }
      }}
      tooltip={{
        enable: true
      }}
      legendSettings={{
        background: 'white'
      }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {data.map((item,index) => <SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked