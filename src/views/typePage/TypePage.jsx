import { useSelector } from 'react-redux'
import { DetailTypes } from '../../components'
import './type.css'
export const TypePage = () => {
  const types = useSelector((state) => state.types)
  console.log(types)
  return (
    <div className='typePage'>
      <h3>Types</h3>
      <div className='div__types'>
        {types.map((type) => (
          <DetailTypes key={type.id} type={type} />
        ))}
      </div>
    </div>
  )
}
