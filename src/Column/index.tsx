import './index.css'
import type { IColumn, EComponentType } from '../types'
import { baseStyle } from '../shared'

import Input from '../Input'

const Component: Record<EComponentType, ((props: IColumn) => React.JSX.Element)> = {
  text: Input,
  number: Input,
}

export interface RowProps extends IColumn {}

export default function Column(props: RowProps) {
  const vars = baseStyle(props)

  if (!(props.type in Component)) {
    return <></>
  }

  return (
    <div className='gdf_base_col' style={vars}>
      {Component[props.type](props)}
    </div>
  )
}
