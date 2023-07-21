import { getTypeColor } from '../../../helpers'
import '../detailTypes.css'

export const TypeDescription = ({ title, types }) => {
  return (
    <div className='div__description'>
      <h4>{title}</h4>
      <div className='description__type'>
        {types.length > 0 ? (
          types.map((weak, i) => (
            <p key={i} className={`types ${getTypeColor(weak)}`}>
              {weak}
            </p>
          ))
        ) : (
          <p>unknown</p>
        )}
      </div>
    </div>
  )
}
