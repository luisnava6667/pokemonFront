import { getTypeColor } from '../../helpers'
import './cards.css'
import { Link } from 'react-router-dom'

export const Cards = ({ pokemon }) => {
  const { id, types, name, image } = pokemon
  //le agregamos 3 ceros al id para que todos tengan 3 digitos
  const sliceId = id.toString().padStart(3, '0')
  if(sliceId.length > 3) sliceId.slice(1, 3)
  
  return (
    <Link className={`cards ${getTypeColor(types[0])}`} to={`/pokemon/${id}`}>
      <div>
        <p className='pokeId'>{'#' + sliceId}</p>
        <p className='name'>{name}</p>
        {types.map((type, i) => (
          <div key={i} className='cards__types'>
            <p className='type'>{type}</p>
            <div className={`${getTypeColor(type)}`}>
              {' '}
              <img src={`./type/${type}.svg`} alt='' key={i} />
            </div>
          </div>
        ))}
      </div>
      <img src={image} alt={`${name}`} className='cards__img' />
    </Link>
  )
}

// {/* <div className='type'>
//   {types.map((type, i) => (
//     <p key={type}>{type}</p>
//   ))}
// </div> */}