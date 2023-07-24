import { getTypeColor } from '../../helpers'
import { TypeDescription } from './TypesDescription/TypeDescription '
export const DetailTypes = ({ type }) => {
  const {
    name,
    double_damage_from,
    double_damage_to,
    half_damage_from,
    half_damage_to,
    no_damage_to,
    no_damage_from
  } = type

  return (
    <div className='bg capitalize grid gap-10'>
      <h3
        className={`br-10 h-30 text-align bold text-2xl grid justify-center align-center ${getTypeColor(
          name
        )}`}>
        {name}
      </h3>
      <TypeDescription title='Weak to:' types={double_damage_from} />
      <TypeDescription title='Strong to:' types={double_damage_to} />
      <TypeDescription title='Half damage from:' types={half_damage_from} />
      <TypeDescription title='Half damage to:' types={half_damage_to} />
      <TypeDescription title='No damage from:' types={no_damage_from} />
      <TypeDescription title='No damage to:' types={no_damage_to} />
    </div>
  )
}
