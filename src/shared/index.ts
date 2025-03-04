import { EAlign, type IColumn } from '../types'

export const alignMap: Record<EAlign, string> = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  evenly: 'space-evenly',
  end: 'flex-end',
  left: 'flex-start',
  right: 'flex-end',
  start: 'flex-start',
}

export const baseStyle = (options: IColumn): Record<string, string> => {
  return {
    '--gdf_component_align': alignMap[options.align || EAlign.LEFT],
    '--gdf_component_border-width': options.borderWidth,
    '--gdf_component_border-color': options.borderColor,
    '--gdf_component_border-radius': options.borderRadius,
    '--gdf_component_border-style': options.borderStyle,
    '--gdf_component_background-color': options.backgroundColor,
    '--gdf_component_background-image': options.backgroundImage,
    '--gdf_component_padding': options.padding?.join(' '),
    '--gdf_component_margin': options.margin?.join(' '),
    '--gdf_component_width': options.width,
    '--gdf_component_height': options.height,
    '--gdf_component_font-size': options.fontSize,
    '--gdf_component_font-weight': options.fontWeight,
    '--gdf_component_font-color': options.fontColor,
  } as Record<string, string>
}

export const customStyle = (data: Record<string, string | undefined>) => {
  const styles: Record<string, string> = {}

  for (const key in data) {
    if (data[key] !== undefined) {
      styles[key] = data[key]
    }
  }

  return styles
}
