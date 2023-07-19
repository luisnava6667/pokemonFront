import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createPokemons,
  getAllAbilities,
  getAllGames,
  getAllMoves,
  getAllTypes
} from '../../redux/actions'
import './createPage.css'
import { Inputs } from '../../components/Form/Inputs'
import { initialFormValues, inputForm } from '../../utils'
import { Type } from '../../components'
export const CreatePage = () => {
  const dispatch = useDispatch()
  const [selectedTypes, setSelectedTypes] = useState([])
  console.log(selectedTypes)
  const [selectedAbility, setSelectedAbility] = useState([])
  console.log(selectedAbility)
  const [selectedGames, setSelectedGames] = useState([])
  const [selectedMoves, setSelectedMoves] = useState([])
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
  const handleSubmit = (e) => {
    e.preventDefault()
    const pokemon = {
      ...values,
      types: selectedTypes,
      abilities: selectedAbility,
      games: selectedGames,
      moves: selectedMoves
    }
    console.log(pokemon)
    // dispatch(createPokemons(pokemon))
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
            <div className='check__type'>
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
          <div className='type__create'>
            <h4>Abilities: </h4>
            <div className='check__type'>
              {abilities.map((ability) => (
                <label key={ability.id}>
                  <input
                    type='checkbox'
                    onChange={() => setSelectedAbility(ability.name)}
                    name={ability.name}
                    value={ability.name}
                  />
                  {ability.name}
                </label>
              ))}
            </div>
          </div>
          <div className='type__create'>
            <h4>Games: </h4>
            <div className='check__type'>
              {games.map((game) => (
                <label key={game.id}>
                  <input type='checkbox' name={game.name} value={game.name} />
                  {game.name}
                </label>
              ))}
            </div>
          </div>
          <div className='type__create'>
            <h4>Moves: </h4>
            <div className='check__type'>
              {moves.map((move) => (
                <label key={move.id}>
                  <input type='checkbox' name={move.name} value={move.name} />
                  {move.name}
                </label>
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
