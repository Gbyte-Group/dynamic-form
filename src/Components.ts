import button from './Button'
import checkbox from './Checkbox'
import icon from './Icon'
import input from './Input'
import select from './Select'

type ComponentStruct<
  // biome-ignore lint/suspicious/noExplicitAny: <unknow all component types>
  R extends Record<T, (...args: any[]) => React.JSX.Element>,
  T extends keyof R = keyof R
> = {
  [K in T]: { id: string, type: K; props: Parameters<R[K]>[0] }
}[T]

export const Components = {
  checkbox,
  input,
  icon,
  button,
  select
}

export type ComponentType = ComponentStruct<typeof Components>
