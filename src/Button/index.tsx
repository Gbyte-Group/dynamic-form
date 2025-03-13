import './index.css'

export interface ButtonProps {
  identify?: string
  type: 'submit' | 'reset' | 'button'
  text: string
}

export default function Button(props: ButtonProps) {
  return (
    <button className='gdf_component_button' data-identify={props.identify} type={props.type}>{props.text}</button>
  )
}
