import { getTypeColor } from '../../helpers'
import { Link } from 'react-router-dom'

export const Cards = ({ pokemon }) => {
  const { id, types, name, image, attack, defense } = pokemon
  const sliceId = id.toString().padStart(3, '0')
  if (sliceId.length > 3) sliceId.slice(1, 3)

  return (
    <Link
      className={` flex relative text-white semi-bold h-150 space-between 2s  p-10 hover:scale-110  pointer br-10 align-items w-100 decoration-none poke
    ${getTypeColor(types[0])}`}
      to={`/pokemon/${id}`}>
      <div>
        <p className='pokeId text-3xl bold transparent'>{'#' + sliceId}</p>
        <p className='text-xl bold capitalize'>{name}</p>
        <div className='gap-5 flex '>
          <p>Atk: {attack}</p>
          <p>Def: {defense}</p>
        </div>

        {types.map((type, i) => (
          <div key={i} className='flex align-center'>
            <p className='type'>{type}</p>
            <img
              src={`./type/${type}.svg`}
              alt=''
              key={i}
              className='w-10 h-10'
            />
          </div>
        ))}
      </div>
      <img src={image} alt={`${name}`} className='z-10 w-120 relative' />
    </Link>
  )
}

// {/* <div className='type'>
//   {types.map((type, i) => (
//     <p key={type}>{type}</p>
//   ))}
// </div> */}
