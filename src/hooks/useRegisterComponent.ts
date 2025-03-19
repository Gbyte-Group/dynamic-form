import { useContext, useEffect } from 'react'
import { formProviderContext, type RegisterCustomComponent } from '../FormProvider'

export const useRegisterComponent: RegisterCustomComponent = (field, component) => {
  const { registerCustomComponent } = useContext(formProviderContext)

  useEffect(() => {
    registerCustomComponent(field, component)
  }, [component, field, registerCustomComponent])
}
