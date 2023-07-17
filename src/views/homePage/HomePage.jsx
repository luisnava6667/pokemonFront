/* eslint-disable no-unused-vars */
import { Loader, Cards, Footer, NavBar, Filters } from '../../components'
import './homePage.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPokemons, getAllTypes } from '../../redux/actions'
import { Paginado } from '../../components/Paginado/Paginado'

export const HomePage = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const { allPokemons } = useSelector((state) => ({
    allPokemons: state.pokemons
  }))
  const [currentPage, setCurrentPage] = useState(1)
  const [pokemonsPerPage, setPokemonsPerPage] = useState(12)
  const indexOfLastCharacter = currentPage * pokemonsPerPage
  const indexOfFirstCharacter = indexOfLastCharacter - pokemonsPerPage
  const currentPokemons = allPokemons.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  )
  const paginado = (pageNumber) => setCurrentPage(pageNumber)
  useEffect(() => {
    dispatch(getAllPokemons())
    dispatch(getAllTypes())
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [dispatch])
  return (
    <div className='homePage'>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h2>Pokedex</h2>
          <Filters setCurrentPage={setCurrentPage} />
          <Paginado
            charactersPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}
          />
          <div className='homePage__cards'>
            {currentPokemons?.map((pokemon, i) => (
              <Cards key={i} pokemon={pokemon} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
