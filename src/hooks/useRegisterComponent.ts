import { useContext, useEffect } from 'react'
import { formProviderContext, type registerComponent } from '../FormProvider'

export const useRegisterComponent: registerComponent = (field, component) => {
  const { registerComponent } = useContext(formProviderContext)

  useEffect(() => {
    registerComponent(field, component)
  }, [component, field, registerComponent])
}
