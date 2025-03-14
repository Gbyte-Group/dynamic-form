import { createContext, type PropsWithChildren, useState } from 'react'
import button from '../Button'
import checkbox from '../Checkbox'
import icon from '../Icon'
import input from '../Input'
import select from '../Select'

const Components = {
  checkbox,
  input,
  icon,
  button,
  select
}

export type registerComponent = <K extends keyof typeof Components, Component extends typeof Components[K]>(field: K, component: Component) => void

export type formContext = {
  components: typeof Components
  registerComponent: registerComponent
}

export const formProviderContext = createContext<formContext>({
  components: Components,
  registerComponent: () => {}
})

type ComponentStruct<
  // biome-ignore lint/suspicious/noExplicitAny: <unknow all component types>
  R extends Record<T, (...args: any[]) => React.JSX.Element>,
  T extends keyof R = keyof R
> = {
  [K in T]: { id: string, type: K; props: Parameters<R[K]>[0] }
}[T]

export type ComponentType = ComponentStruct<typeof Components>

export default function FormProvider({ children }: PropsWithChildren) {

  const [components, updateComponent] = useState(Components)

  const registerComponent: registerComponent = (field, component) => {
    updateComponent(components => {
      if (components[field] === component) return components

      return { ...components, [field]: component }
    })
  }

  return (
    <formProviderContext.Provider value={{ components, registerComponent }}>
      {children}
    </formProviderContext.Provider>
  )
}
