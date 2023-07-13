import './bars.css'
export const Bars = ({ numero, title, value = numero }) => {
  return (
    <div className='skill-bar'>
      <div className='skill-name'>
        <p>{title}</p>
        <p>{value}</p>
      </div>
      <div className='bar-container'>
        <div className='bar' style={{ width: `${numero}%` }}></div>
      </div>
    </div>
  )
}
