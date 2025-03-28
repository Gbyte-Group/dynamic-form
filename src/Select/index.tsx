import { useState } from 'react'
import type { IField } from '../types'

export interface SelectProps extends IField {
  options: {
    label: string
    value: string
  }[]
}

const getLabel = (options: SelectProps['options'], value?: string) => {
  return options.find(option => option.value === value) ?? options[0]
}

export default function Select(props: SelectProps) {

  const [selected, updateSelected] = useState(getLabel(props.options, props.defaultValue))
  const [open, udpaeOpen] = useState(false)

  const selectItem = (index: number) => {
    updateSelected(props.options[index])
    toggleOpen()
  }

  const toggleOpen = () => {
    udpaeOpen(open => !open)
  }

  return (
    <div className='gdf_component_select'>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: <no keyboard> */}
      <div className='gdf_component_select_item gdf_component_select_summary' onClick={toggleOpen}>
        <input type="hidden" name={props.name} value={selected.value} />
        {selected.label}
      </div>
      <div className='gdf_component_select_list' style={{ height: open ? 'auto' : '0', opacity: open ? 100 : 0 }} >
        {
          props.options.map((item, index) => {
            return (
              /* biome-ignore lint/a11y/useKeyWithClickEvents: <no keyboard> */
              <div className='gdf_component_select_item' key={item.value} onClick={() => selectItem(index)}>
                {item.label}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
