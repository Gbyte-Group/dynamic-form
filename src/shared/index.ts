import type { IRow, ILayout, IForm } from '../types'

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

export const baseStyle = (options: ILayout, join = 'component'): Record<string, string> => {
  const style = {
    [`--gdf_${join}_align`]: options.align,
    [`--gdf_${join}_border-width`]: options.borderWidth,
    [`--gdf_${join}_border-color`]: options.borderColor,
    [`--gdf_${join}_border-radius`]: options.borderRadius,
    [`--gdf_${join}_border-style`]: options.borderStyle,
    [`--gdf_${join}_background-color`]: options.backgroundColor,
    [`--gdf_${join}_background-image`]: options.backgroundImage,
    [`--gdf_${join}_padding`]: options.padding?.join(' '),
    [`--gdf_${join}_margin`]: options.margin?.join(' '),
    [`--gdf_${join}_width`]: options.width,
    [`--gdf_${join}_height`]: options.height,
    [`--gdf_${join}_font-size`]: options.fontSize,
    [`--gdf_${join}_font-weight`]: options.fontWeight,
    [`--gdf_${join}_font-color`]: options.fontColor
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
  const result = baseStyle(options, 'row')

  if (options.horizontal !== undefined) {
    result['--gdf_row_horizontal'] = alignMap[options.horizontal]
  }

  if (options.vertical !== undefined) {
    result['--gdf_row_vertical'] = alignMap[options.vertical]
  }

  if (options.gap !== undefined) {
    result['--gdf_row_gap'] = options.gap
  }

  return result
}

export const formStyle = (options: IForm): Record<string, string> => {
  const result = baseStyle(options, 'form')

  if (options.horizontal !== undefined) {
    result['--gdf_form_horizontal'] = alignMap[options.horizontal]
  }

  if (options.vertical !== undefined) {
    result['--gdf_form_vertical'] = alignMap[options.vertical]
  }

  if (options.gap !== undefined) {
    result['--gdf_form_gap'] = options.gap
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
