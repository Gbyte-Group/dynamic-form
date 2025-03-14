import type { LayoutAlign } from './types'

export const transformAlign = (align?: LayoutAlign) => {
  if (align) {
    switch (align) {
      case 'start':
        return 'flex-start'
      case 'center':
        return 'center'
      case 'end':
        return 'flex-end'
      case 'between':
        return 'space-between'
      case 'around':
        return 'space-around'
      case 'evenly':
        return 'space-evenly'
      default: {
        const _: never = align
      }
    }
  }

  return undefined
}
