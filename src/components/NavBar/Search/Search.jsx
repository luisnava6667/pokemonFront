import { AiOutlineSearch } from 'react-icons/ai'
import './search.css'
import { getNamePokemons } from '../../../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
export const Search = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
    console.log('enter')
  }
  

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getNamePokemons(name))
    setName('')
  }
  return (
    <>
      <div className='search'>
        <input
          type='text'
          placeholder='Search Pokemon'
          className='search__input'
          onChange={(e) => handleInputChange(e)}
        />
        <button type='submit' onClick={(e) => handleSubmit(e)}>
          <AiOutlineSearch size={35} />
        </button>
      </div>
    </>
  )
}
