import { useState } from 'react'

export const Selects = ({ options, handleSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState([])

  const handleRemoveOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((selectedOption) => selectedOption !== option)
    )
    handleSelect(option, false)
  }

  const handleSelectChange = (e) => {
    const option = e.target.value
    setSelectedOptions((prevSelected) => [...prevSelected, option])
    handleSelect(option, true)
  }

  return (
    <div className='grid'>
      <div className='m-0'>
        <select
          onChange={handleSelectChange}
          value=' '
          className='br-10 pad-5 br-none w-100'>
          <option value=''>Select an option</option>
          {options.map((option) => (
            <option
              key={option}
              value={option}
              disabled={selectedOptions.includes(option)}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className='h-90 mt-10 w-100 flex wrap gap-10'>
        {selectedOptions.map((option) => (
          <p key={option} className='text-xl flex align-center gap-5'>
            {option}{' '}
            <button
              className='myButton'
              onClick={() => handleRemoveOption(option)}>
              X
            </button>
          </p>
        ))}
      </div>
    </div>
  )
}
