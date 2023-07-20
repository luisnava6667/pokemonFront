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
  const region = useSelector((state) => state.region)
//TODO: hacer el componente de la pagina de detalle de la region
  useEffect(() => {
    
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [dispatch])
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
