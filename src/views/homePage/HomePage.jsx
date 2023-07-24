/* eslint-disable no-unused-vars */
import { Loader, Cards, Footer, NavBar, Filters } from '../../components'
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
    <div className='page'>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <h2 className='title'>Pokedex</h2>
          <Filters setCurrentPage={setCurrentPage} />
          <Paginado
            charactersPerPage={pokemonsPerPage}
            allPokemons={allPokemons.length}
            paginado={paginado}
          />
          <div className=' grid wrap pad-x-60 mb-20 gap-20
            md:cards lg:cards xl:cards xl:cards 2xl:cards 
          '>
            {currentPokemons?.map((pokemon, i) => (
              <Cards key={i} pokemon={pokemon} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
