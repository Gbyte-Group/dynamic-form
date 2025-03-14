import { type ComponentType, formProviderContext } from '../FormProvider'
import { Fragment, useContext } from 'react'
import Empty from '../Empty'
import type { IColumn } from '../types'
import { transformAlign } from '../utils'

export interface ColumnProps extends IColumn {
  id: string
  width: number
  height: number
  fontColor?: string
  fontSize?: number
  paddingY?: number
  paddingX?: number
  marginY?: number
  marginX?: number
  gap?: number
  prepend?: ComponentType | ComponentType[],
  append?: ComponentType | ComponentType[],
  component: ComponentType | ComponentType[],
  focus?: Partial<Omit<ColumnProps, 'focus' | 'prepend' | 'component' | 'append'>>
}

const Components = (props?: { component: ComponentType | ComponentType[] | undefined }) => {
  const { components } = useContext(formProviderContext)

  const getComponentUtils = (props?: ComponentType) => {
    if (props?.type) {
      switch (props.type) {
        case 'checkbox':
          return <components.checkbox {...props.props} />
        case 'input':
          return <components.input {...props.props} />
        case 'icon':
          return <components.icon {...props.props} />
        case 'button':
          return <components.button {...props.props} />
        case 'select':
          return <components.select {...props.props} />
        default: {
          const _: never = props
        }
      }
    }
    return <Empty />
  }

  if (props?.component) {
    return (Array.isArray(props.component) ? props.component : [props.component]).map(props => (
      <Fragment key={props.id}>
        {getComponentUtils(props)}
      </Fragment>
    ))
  }

  return <Empty />
}

export default function Column(props: ColumnProps) {

  let focusVars = {}

  if (props.focus) {
    focusVars = {
      '--gdf_component_focus_border-color': props.focus.borderColor,
      '--gdf_component_focus_border-width': props.focus.borderWidth,
      '--gdf_component_focus_border-radius': props.focus.borderRadius,
      '--gdf_component_focus_background-color': props.focus.backgroundColor,
      '--gdf_component_focus_background-image': props.focus.backgroundImage,
      '--gdf_component_focus_font-color': props.focus.fontColor,
      '--gdf_component_focus_font-size': props.focus.fontSize,
      '--gdf_component_focus_padding-y': props.focus.paddingY,
      '--gdf_component_focus_padding-x': props.focus.paddingX,
      '--gdf_component_focus_margin-y': props.focus.marginY,
      '--gdf_component_focus_margin-x': props.focus.marginX,
      '--gdf_component_focus_gap': props.focus.gap,
    }
  }

  const vars = {
    '--gdf_component_border-color': props.borderColor,
    '--gdf_component_border-width': props.borderWidth,
    '--gdf_component_border-radius': props.borderRadius,
    '--gdf_component_background-color': props.backgroundColor,
    '--gdf_component_background-image': props.backgroundImage,
    '--gdf_component_font-color': props.fontColor,
    '--gdf_component_font-size': props.fontSize,
    '--gdf_component_height': props.height,
    '--gdf_component_width': props.width,
    '--gdf_component_padding-y': props.paddingY,
    '--gdf_component_padding-x': props.paddingX,
    '--gdf_component_margin-y': props.marginY,
    '--gdf_component_margin-x': props.marginX,
    '--gdf_component_gap': props.gap,
    '--gdf_col_align-items': transformAlign(props.verticalAlign),
    '--gdf_col_justify-content': transformAlign(props.horizontalAlign),
    '--gdf_col_flex-direction': props.direction,
    ...focusVars
  } as React.CSSProperties

  return (
    <div
      className='gdf_component_column'
      style={vars}
    >
      <Components component={props.prepend} />
      <Components component={props.component} />
      <Components component={props.append} />
    </div>
  )
}
