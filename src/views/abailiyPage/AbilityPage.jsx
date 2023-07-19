import { getDetail } from '../../redux/actions'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {  Loader } from '../../components'
export const AbilityPage = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const detail = useSelector((state) => state.detail)
  const id = pathname.split('/')[2]
  const moves = detail.moves.join(', ')
  console.log(moves);
  useEffect(() => {
    dispatch(getDetail(id))
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [dispatch, id])
  return (
    <>
      <div className={` detailPage`}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className='detailPage__div'>
              
            </div>
          </>
        )}
      </div>
    </>
  )
}
