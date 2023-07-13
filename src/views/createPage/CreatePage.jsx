import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPokemons, getAllTypes } from '../../redux/actions'
import './createPage.css'
import { Inputs } from '../../components/Form/Inputs'
import { initialFormValues, inputForm } from '../../utils'
import { Type } from '../../components'
export const CreatePage = () => {
  const dispatch = useDispatch()
  const [selectedTypes, setSelectedTypes] = useState([])
  const [values, setValues] = useState(initialFormValues)
  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }
  const types = useSelector((state) => state.types)
  useEffect(() => {
    dispatch(getAllTypes())
  }, [])
  const handleSubmit = (e) => {
    e.preventDefault()
    const pokemon = {
      ...values,
      types: selectedTypes
    }
    console.log(pokemon)
    dispatch(createPokemons(pokemon))
    setValues(initialFormValues)
  }

  return (
    <div className='createPage'>
      <div className='div__form'>
        <h2>Create Your Pokemon</h2>
        <form onSubmit={handleSubmit} className='bg'>
          <div className='inputs__div'>
            {inputForm.map((input) => (
              <Inputs
                key={input.id}
                label={input.label}
                type={input.type}
                name={input.name}
                value={values[input.name]}
                handleChange={handleChange}
              />
            ))}
          </div>
          <div className='type__create'>
            <h4>Types: </h4>
            <div className='check__'>
              {types.map((type) => (
                <Type
                  key={type.id}
                  name={type.name}
                  selectedTypes={selectedTypes}
                  setSelectedTypes={setSelectedTypes}
                />
              ))}
            </div>
          </div>
          <div className='div__button'>
            <button type='reset'>Reset</button>
            <button type='submit'>Created</button>
          </div>
        </form>
      </div>
    </div>
  )
}
