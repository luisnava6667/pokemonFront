/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  postPokemon,
  getAllAbilities,
  getAllGames,
  getAllMoves,
  getAllTypes
} from '../../redux/actions'
import './createPage.css'
import { Inputs } from '../../components/Form/Inputs'
import { handleSelect, initialFormValues, inputForm } from '../../utils'
import { Type } from '../../components'
import { Selects } from '../../components/Form/Selects/Selects'
export const CreatePage = () => {
  const dispatch = useDispatch()
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedAbility, setSelectedAbility] = useState([])
  const [selectedGames, setSelectedGames] = useState([])
  const [selectedMoves, setSelectedMoves] = useState([])
  const [errors, setErrors] = useState({})
  console.log(errors)
  const [values, setValues] = useState(initialFormValues)
  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }))
  }
  const types = useSelector((state) => state.types)
  const abilities = useSelector((state) => state.abilities)
  const games = useSelector((state) => state.games)
  const moves = useSelector((state) => state.moves)

  useEffect(() => {
    dispatch(getAllAbilities())
    dispatch(getAllGames())
    dispatch(getAllMoves())
    dispatch(getAllTypes())
  }, [])
  const handleSelectAbility = (e) => {
    setSelectedAbility((prevSelected) => handleSelect(prevSelected, e))
  }

  const handleSelectGames = (e) => {
    setSelectedGames((prevSelected) => handleSelect(prevSelected, e))
  }

  const handleSelectMoves = (e) => {
    setSelectedMoves((prevSelected) => handleSelect(prevSelected, e))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const errors = {}
    if (!values.name) {
      errors.name = 'Name is required.'
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors)
    } else {
      const pokemon = {
        ...values,
        types: selectedTypes,
        abilities: selectedAbility,
        games: selectedGames,
        moves: selectedMoves
      }
      console.log(pokemon)
      dispatch(postPokemon(pokemon))
      setValues(initialFormValues)
      setSelectedTypes([])
      setSelectedAbility([])
      setSelectedGames([])
      setSelectedMoves([])
    }
  }

  return (
    <div className='page'>
      <div className=' grid text-center'>
        <h2 className='title'>Create Your Pokemon</h2>
        <form
          onSubmit={handleSubmit}
          className='bg gap-20 pad-30 mar-x-40 text-2xl'>
          <div className='px-25 grid gr-450-1 gap-20'>
            {inputForm.map((input) => (
              <Inputs
                key={input.id}
                label={input.label}
                type={input.type}
                name={input.name}
                value={values[input.name]}
                handleChange={handleChange}
                error={errors[input.name]}
              />
            ))}
          </div>
          <div className='px-20 gap-20 grid'>
            <h4 className='text-2xl'>Types: </h4>
            <div className='w-100 grid gr-70-1 gap-15 justify-center m-auto  capitalize'>
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
          <div className='flex w-100 space-between gap-30 mt-10'>
            <div className='grid  capitalize  w-100'>
              <h4 className='text-2xl'>Abilities: </h4>
              <Selects
                options={abilities.map((ability) => ability.name)}
                handleSelect={handleSelectAbility}
              />
            </div>
            <div className='grid capitalize w-100'>
              <h4 className='text-2xl'>Games: </h4>
              <Selects
                options={games.map((game) => game.name)}
                handleSelect={handleSelectGames}
              />
            </div>
            <div className='grid capitalize w-100'>
              <h4 className='text-2xl'>Moves: </h4>
              <Selects
                options={moves.map((move) => move.name)}
                handleSelect={handleSelectMoves}
              />
            </div>
          </div>
          <div className='mt-20 flex gap-50 pad-20'>
            <button
              type='reset'
              className='b-none pad-10 br-5 w-50 resetButton bold pointer text-xl'>
              Reset
            </button>
            <button
              type='submit'
              className='b-none pad-10 br-5 w-50 createButton bold pointer text-xl'>
              Created
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
