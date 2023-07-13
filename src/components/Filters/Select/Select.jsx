import './select.css'
export const Select = ({
  legend,
  value = 'All',
  value1 = 'asc',
  value2 = 'desc',
  handler
}) => {
  return (
    <div className='selectedComponent'>
      <label htmlFor=''>{legend}</label>
      <select  onChange={(e) => handler(e)}>
        <option value='' disabled>
          -- Selected --
        </option>
        <option value={value}>{value}</option>
        <option value={value1}>{value1}</option>
        <option value={value2}>{value2}</option>
      </select>
    </div>
  )
}
