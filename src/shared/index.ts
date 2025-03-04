import type { IRow, ILayout } from '../types'

export const alignMap: Record<string, string> = {
  around: 'space-around',
  between: 'space-between',
  center: 'center',
  evenly: 'space-evenly',
  end: 'flex-end',
  left: 'flex-start',
  right: 'flex-end',
  start: 'flex-start',
}

export const baseStyle = (options: ILayout): Record<string, string> => {
  const style = {
    '--gdf_component_align': options.align,
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
    '--gdf_component_font-color': options.fontColor
  } as Record<string, string>

  const result = {} as Record<string, string>

  for (const key in style) {
    if (style[key] !== undefined) {
      result[key] = style[key]
    }
  }

  return result
}

export const rowStyle = (options: IRow): Record<string, string> => {
  const result = baseStyle(options)

  if (options.horizontal !== undefined) {
    result['--gdf_component_horizontal'] = alignMap[options.horizontal]
  }

  if (options.vertical !== undefined) {
    result['--gdf_component_vertical'] = alignMap[options.vertical]
  }

  if (options.gap !== undefined) {
    result['--gdf_component_gap'] = options.gap
  }

  return result
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
