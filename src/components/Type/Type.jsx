import { useState } from 'react'
import { getTypeColor } from '../../helpers'
import { handleCheckboxChange } from '../../utils'

export const Type = ({ name, selectedTypes, setSelectedTypes }) => {
  const [imageOpacity, setImageOpacity] = useState(1)
  return (
    <div className='check__types'>
      <label className={`label__check ${getTypeColor(name)}`}>
        <input
          className='inputsCheck'
          type='checkbox'
          name={name}
          value={name}
          id={name}
          onChange={() =>
            handleCheckboxChange(
              name,
              selectedTypes,
              setSelectedTypes,
              setImageOpacity
            )
          }
        />
        <img
          src={`./type/${name}.svg`}
          alt={name}
          style={{ opacity: imageOpacity }}
        />
      </label>
      <label htmlFor={name}>{name}</label>
    </div>
  )
}
