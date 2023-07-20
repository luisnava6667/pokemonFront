/* eslint-disable no-unused-vars */

import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {  Loader } from '../../components'
export const AbilityPage = () => {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const abilities = useSelector((state) => state.ability)
  const id = pathname.split('/')[2]
  //TODO: hacer el componente de la pagina de detalle de la habilidad
  useEffect(() => {
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
