import { getDetail } from '../../redux/actions'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Detail, Loader } from '../../components/'
export const DetailPage = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const detail = useSelector((state) => state.detail)
  const id = pathname.split('/')[2]
  useEffect(() => {
    dispatch(getDetail(id))
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [dispatch, id])
  return (
    <>
      <div className='page'>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className='grid align-center justify-center px-20'>
              <h2 className='title'>{detail.name}</h2>
              <div className='w-100 justify-center grid lg:flex gap-10'>
                <img
                  src={detail.image}
                  alt={detail.name}
                  className=' md:img img bg justify-center grid'
                />
                <div className='w-100 justify-center grid'>
                  <Detail detail={detail} />
                </div>
              </div>
              <div className=' grid w-100 m-0 justify-center text-2xl mt-10 bg'>
                <h4>Moves:</h4>
                <div className='text-lg flex m-0 px-25 py-10'>
                  {detail.moves.join(', ')}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
