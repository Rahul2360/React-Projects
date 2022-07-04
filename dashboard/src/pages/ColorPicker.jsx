import React from 'react';
import { Header } from '../components';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

const change = (args) => {
  document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
}
const ColorPicker = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category="App" title="Color Picker"></Header>
      <div className="text-center">
        <div id="preview"></div>
        <div className="flex justify-center gap-20 items-center flex-wrap">
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Palette'
              inline
              modeSwitcher={false}
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent
              id='inline-pallete'
              mode='Picker'
              inline
              modeSwitcher={false}
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker