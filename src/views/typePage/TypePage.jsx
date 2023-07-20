import { useSelector } from 'react-redux'
import { DetailTypes } from '../../components'
export const TypePage = () => {
  const types = useSelector((state) => state.types)
  console.log(types)
  return (
    <div
      className=''
      style={{
        color: 'white'
      }}>
      {types.map((type) => (
        <DetailTypes key={type.id} type={type} />
      ))}
    </div>
  )
}
