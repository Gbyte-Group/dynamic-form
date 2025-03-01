import type { EAlign } from '../types'

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

export const customStyle = (data: Record<string, string>) => {
  // TODO
  // some handler
  return data
}
