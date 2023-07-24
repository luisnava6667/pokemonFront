import './form.css'
export const Inputs = ({
  error = '',
  label,
  type = 'text',
  name,
  value,
  handleChange
}) => {
  return (
    <>
      <div className='grid h-90'>
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
      {error && <p className='error'>{error}</p>}
      </div>
    </>
  )
}
