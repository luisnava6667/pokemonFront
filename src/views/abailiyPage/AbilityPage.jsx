/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Loader } from '../../components'
import { getAllAbilities } from '../../redux/actions'
export const AbilityPage = () => {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const abilities = useSelector((state) => state.abilities)

  useEffect(() => {
    dispatch(getAllAbilities())
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  const [searchText, setSearchText] = useState('')
  const handleInputChange = (event) => {
    const searchText = event.target.value
    setSearchText(searchText)
  }
  const filteredAbilities = abilities.filter((ability) =>
    ability.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <>
      <div className='page grid'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <h3 className='title'>Abilities</h3>
            <div className='grid px-20 w-50 m-auto '>
              <input
                type='text'
                className=''
                placeholder='Search...'
                value={searchText}
                onChange={handleInputChange}
              />
            </div>
            <div className='pad-30'>
              {filteredAbilities.map((ability) => (
                <div className='bg mx-5 text-lg px-20' key={ability.id}>
                  <p className='uppercase bold'>{ability.name}:</p>
                  <p className='px-5'>{ability.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
