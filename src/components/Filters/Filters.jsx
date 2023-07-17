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
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'
export const Filters = ({ setCurrentPage }) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState([])

  const types = useSelector((state) => state.types)
  useEffect(() => {
    dispatch(getAllTypes())
  }, [dispatch])
  useEffect(() => {
    if (selectedTypes.length === 0 || selectedTypes.includes('all')) {
      dispatch(filterPokemonsByType('all'))
    } else {
      dispatch(filterPokemonsByType(selectedTypes))
    }
  }, [dispatch, selectedTypes])
  const [orden, setOrden] = useState('')
  const clearFilters = () => {
    selectedTypes.length = 0
    dispatch(filterPokemonsByType('all'))
    dispatch(filterCreated('all'))
    dispatch(orderByName('all'))
    dispatch(orderById('all'))
    setCurrentPage(1)
  }
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
    <div className='filters bg'>
      <div className='filter'>
        <h2>Filters</h2>
        {visible ? (
          <MdKeyboardArrowUp
            className='icon'
            size={30}
            onClick={() => setVisible(!visible)}
          />
        ) : (
          <MdKeyboardArrowDown
            className='icon'
            size={30}
            onClick={() => setVisible(!visible)}
          />
        )}
      </div>
      {visible ? (
        <div className='filter__div'>
          <div className='div__filter'>
            {types.map((type) => (
              <Type
                key={type.id}
                name={type.name}
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
              />
            ))}
          </div>
          <div className='selects'>
            <Select legend={'Order by Name'} handler={handleFilterByName} />
            <Select legend={'Order by Id'} handler={handleFilterId} />
            <Select
              legend={'Create or API'}
              value1='create'
              value2='api'
              handler={handleFilterCreate}
            />
            <Select legend={'Order by Attack'} handler={handleFilterId} />
            <Select legend={'Order by Defense'} handler={handleFilterId} />
            {/* <button className='' onClick={clearFilters}>
              Clean Filters
            </button> */}
          </div>
        </div>
      ) : null}
    </div>
  )
}
