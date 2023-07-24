import { useState } from 'react'
import { getTypeColor } from '../../helpers'
import { handleCheckboxChange } from '../../utils'

export const Type = ({ name, selectedTypes, setSelectedTypes }) => {
  const [imageOpacity, setImageOpacity] = useState(1)
  return (
    <div className='grid justify-center '>
      <label
        className={`h-40 w-40 br-50 justify-content grid align-center gap-10 br ${getTypeColor(
          name
        )}`}>
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
          className='h-30 w-30 pointer'
        />
      </label>
      <label htmlFor={name}>{name}</label>
    </div>
  )
}
