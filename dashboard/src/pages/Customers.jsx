import React from 'react'
import { Header } from '../components';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, Selection, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'

import { customersGrid, customersData } from '../data/dummy';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="Page" title="Customers"></Header>
      <GridComponent
        id="gridcomp"
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{
          allowDeleting: true,
          allowEditing: true
        }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]} />

      </GridComponent>
    </div>
  )
}

export default Customers
