import { getTypeColor } from '../../helpers'
import { handleCheckboxChange } from '../../utils'

export const Type = ({ name, selectedTypes, setSelectedTypes }) => {
  return (
    <div className='check__types'>
      <label className={`div__check ${getTypeColor(name)}`}>
        <input
          className='inputsCheck'
          type='checkbox'
          name={name}
          value={name}
          // checked={selectedTypes.includes(name)}
          onChange={() =>
            handleCheckboxChange(name, selectedTypes, setSelectedTypes)
          }
        />
        <img src={`./type/${name}.svg`} alt={name} />
      </label>
      <label htmlFor={name}>{name}</label>
    </div>
  )
}
