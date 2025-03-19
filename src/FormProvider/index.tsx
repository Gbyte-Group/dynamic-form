import { createContext, type PropsWithChildren, useState } from 'react'
import button from '../Button'
import checkbox from '../Checkbox'
import icon from '../Icon'
import input from '../Input'
import select from '../Select'
import empty from '../Empty'

const Components = {
  checkbox,
  input,
  icon,
  button,
  select
}


// biome-ignore lint/suspicious/noExplicitAny: <no know props>
export type Components = Record<string, React.FC<any>>
export type RegisterEmpty = (component: React.FC<unknown>) => void
export type RegisterComponent = <K extends keyof typeof Components, Component extends typeof Components[K]>(field: K, component: Component) => void
export type RegisterCustomComponent = (field: string, component: React.FC<unknown>) => void

export type FormContext = {
  components: Components
  empty: React.FC<unknown>,
  registerEmpty: RegisterEmpty
  registerComponent: RegisterComponent,
  registerCustomComponent: RegisterCustomComponent
}

export const formProviderContext = createContext<FormContext>({
  components: Components,
  empty,
  registerEmpty: () => {},
  registerComponent: () => {},
  registerCustomComponent: () => {}
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

  const [components, updateComponent] = useState<Components>(Components)
  const [emptyComponent, updateEmptyComponent] = useState<React.FC<unknown>>(empty)

  const registerComponent: RegisterComponent = (field, component) => {
    updateComponent(components => {
      if (components[field] === component) return components

      return { ...components, [field]: component }
    })
  }

  const registerCustomComponent: RegisterCustomComponent = (field, component) => {
    updateComponent(components => {
      if (components[field] === component) return components
      return { ...components, [field]: component }
    })
  }

  const registerEmpty: RegisterEmpty = component => {
    updateEmptyComponent(component)
  }

  return (
    <formProviderContext.Provider value={{
      empty: emptyComponent,
      components,
      registerComponent,
      registerEmpty,
      registerCustomComponent
    }}>
      {children}
    </formProviderContext.Provider>
  )
}
