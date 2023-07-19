import { getDetail } from '../../redux/actions'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Detail, Loader } from '../../components'
import './detailPage.css'
export const RegionPage = () => {
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
              <h2>{detail.name}</h2>
              <div className='div__container'>
                <img
                  src={detail.image}
                  alt={detail.name}
                  className='detail__img bg'
                />
                <div className='div__info'>
                  <Detail detail={detail} />
                </div>
              </div>
              {/* <div className='moves bg'>
                <h4>Moves:</h4>
                <p>{detail.move}</p>
              </div> */}
              <div className='div__container moves bg'>
                <h4>Moves:</h4>
                <div className='moves__list' >
                    {moves}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
