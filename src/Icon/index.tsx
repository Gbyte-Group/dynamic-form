export interface IconProps {
  icon: string
  alt: string
  width: number
  height: number
  link?: string
}

export default function Icon(props: IconProps) {

  const vars = {
    '--gdf_component_icon-height': props.height,
    '--gdf_component_icon-width': props.width,
  } as React.CSSProperties

  if (props.link) {
    return (
      <a className='gdf_component_icon' style={vars} href={props.link}>
        <img src={props.icon} alt={props.alt} />
      </a>
    )
  }

  return (
    <div className='gdf_component_icon' style={vars}>
      <img src={props.icon} alt={props.alt} />
    </div>
  )
}
