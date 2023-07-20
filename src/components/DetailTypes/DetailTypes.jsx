import { getTypeColor } from '../../helpers'
import './detailTypes.css'
export const DetailTypes = ({ type }) => {
    console.log(type);
  return (
    <div key={type.id}>
      <h3 className={`${getTypeColor(type.name)}`}>{type.name}</h3>
      <div>
        <p>Weak to:</p>
        <div>
          {type.double_damage_from.map((weak) => (
            <p key={weak.name} className={`${getTypeColor(weak)}`}>
              {weak}
            </p>
          ))}
        </div>
      </div>
      <div>
        <p>Strong to :</p>
        <p>
          {type.double_damage_to.map((weak) => (
            <p key={weak.name} className={`${getTypeColor(weak)}`}>
              {weak}
            </p>
          ))}
        </p>
      </div>
      <div>
        <p>Half damage from :</p>
        <p>
          {type.half_damage_from.map((weak) => (
            <p key={weak.name} className={`${getTypeColor(weak)}`}>
              {weak}
            </p>
          ))}
        </p>
      </div>
      <div>
        <p>Half damage to :</p>
        <p>
          {type.no_damage_to.map((weak) => (
            <p key={weak.name} className={`${getTypeColor(weak)}`}>
              {weak}
            </p>
          ))}
        </p>
      </div>
      <div>
        <p>No damage from :</p>
        <p>
          {type.no_damage_from.map((weak) => (
            <p key={weak.name} className={`${getTypeColor(weak)}`}>
              {weak}
            </p>
          ))}
        </p>
      </div>
      <div>
        <p>No damage to :</p>
        <p>
          {type.no_damage_to.map((weak) => (
            <p key={weak.name} className={`${getTypeColor(weak)}`}>
              {weak}
            </p>
          ))}
        </p>
      </div>
    </div>
  )
}
