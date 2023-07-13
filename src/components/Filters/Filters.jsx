/* eslint-disable no-unused-vars */
import './filter.css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  filterCreated,
  filterPokemonsByType,
  getAllTypes,
  orderById,
  orderByName
} from '../../redux/actions'
import { Select } from './Select/Select'
import { Type } from '../Type'
export const Filters = ({ setCurrentPage }) => {
  const dispatch = useDispatch()
  const [selectedTypes, setSelectedTypes] = useState([])

  const types = useSelector((state) => state.types)
  useEffect(() => {
    dispatch(getAllTypes())
  }, [dispatch])
  useEffect(() => {
    if (selectedTypes.length === 0) {
      console.log('entro')
      dispatch(filterPokemonsByType('all'))
    } else if (selectedTypes.includes) {
      console.log('entro1')
      dispatch(filterPokemonsByType(selectedTypes))
    } else {
      console.log('entro2')
      dispatch(filterPokemonsByType('all'))
    }
  }, [dispatch, selectedTypes])
  const [orden, setOrden] = useState('')
  const handleFilterCreate = (e) => {
    dispatch(filterCreated(e.target.value))
  }
  const handleFilterByName = (e) => {
    e.preventDefault()
    dispatch(orderByName(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  }
  const handleFilterId = (e) => {
    e.preventDefault()
    dispatch(orderById(e.target.value))
    setCurrentPage(1)
    setOrden(`Ordenado ${e.target.value}`)
  }

  return (
    <div className='filters'>
      <h2>Filters</h2>
      <div className='filters__total'>
        {types.map((type) => (
          <Type
            key={type.id}
            name={type.name}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
          />
        ))}
        <div className='orden'>
          <Select legend={'Order by Name'} handler={handleFilterByName} />
          <Select legend={'Order by Id'} handler={handleFilterId} />
          <Select
            legend={'Create or API'}
            value1='create'
            value2='api'
            handler={handleFilterCreate}
          />
        </div>
      </div>
    </div>
  )
}
