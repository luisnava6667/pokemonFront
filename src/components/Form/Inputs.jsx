import './form.css'
export const Inputs = ({ label, type = 'text', name, value, handleChange }) => {
  return (
    <div className='div__input'>
      <label htmlFor={name}>
        {label}: {type === 'range' && <span>{value}</span>}
      </label>
      <input
        id={name}
        type={type}
        {...(type === 'range' ? { min: 0, max: 100 } : null)}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
