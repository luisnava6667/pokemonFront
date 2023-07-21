import { getTypeColor } from '../../helpers'
import { TypeDescription } from './TypesDescription/TypeDescription '
import './detailTypes.css'
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
    <div className='detail__type bg'>
      <h3 className={`type__title ${getTypeColor(name)}`}>{name}</h3>
      <TypeDescription title='Weak to:' types={double_damage_from} />
      <TypeDescription title='Strong to:' types={double_damage_to} />
      <TypeDescription title='Half damage from:' types={half_damage_from} />
      <TypeDescription title='Half damage to:' types={half_damage_to} />
      <TypeDescription title='No damage from:' types={no_damage_from} />
      <TypeDescription title='No damage to:' types={no_damage_to} />
    </div>
  )
}