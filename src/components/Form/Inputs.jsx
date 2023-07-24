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
      <div className='grid h-101'>
        <label htmlFor={name}>
          {label}: {type === 'range' && <span>{value}</span>}
        {error && <p className='error h-10 text-lg'>{error}</p>}
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
    </>
  )
}
