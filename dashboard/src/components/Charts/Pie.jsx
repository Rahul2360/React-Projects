import React from 'react'

import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';

const PieChart = ({ id, data, height }) => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      id={id}
      legendSettings={{ visible: true, background: 'white' }}
      height={height}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      tooltip={{ enable: true }}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' radius='80%' innerRadius="50%" explode
          explodeOffset="10%"
          explodeIndex={2} dataLabel={{
            visible: true,
            name: 'text',
            position: 'Inside',
            font: {
              fontWeight: '600',
              color: '#fff',
            }
          }}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default PieChart