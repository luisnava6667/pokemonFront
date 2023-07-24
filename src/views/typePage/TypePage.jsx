import { useSelector } from 'react-redux'
import { DetailTypes } from '../../components'
export const TypePage = () => {
  const types = useSelector((state) => state.types)
  return (
    <div className='grid pad-20'>
      <h3 className='title'>Types</h3>
      <div className='gap-20 grid div__types'>
        {types.map((type) => (
          <DetailTypes key={type.id} type={type} />
        ))}
      </div>
    </div>
  )
}
