import { Bars } from './Bars/Bars'
import './detail.css'
export const Detail = ({ detail }) => {
  const speed = (detail.speed.split('km')[0] / 1.609).toFixed()
  
  const game = detail.games.join(', ')
  const abilities = detail.abilities.join(', ')
  return (
    <div className='detail__stats'>
      <div className='detail__div '>
        <div className='detail__bars bg'>
          <h3>Base Stats</h3>
          <Bars numero={detail.hp} title={'Hp'} />
          <Bars numero={speed} title={'Speed'} />
          <Bars numero={detail.special_defense} title={'Special Defense'} />
          <Bars numero={detail.special_attack} title={'Special Attack'} />
          <Bars numero={detail.defense} title={'Defence'} />
          <Bars numero={detail.attack} title={'Attack'} />
        </div>
        <div className='detail__more'>
          <div className='detail__info bg'>
            <h3>Weight: {detail.weight}</h3>
            <h3>Height: {detail.height}</h3>
            <h3>Speed: {detail.speed}</h3>
          </div>
          <div className='info__container bg'>
            <h3>Type: </h3>
            {detail.types.map((type) => (
              <div className={`info__div `} key={type.id}>
                <p className=''>{type}</p>
                <img src={`/type/${type}.svg`} alt='' />
              </div>
            ))}
          </div>
          <div className='ability bg'>
            <h4>Abilities: </h4>
            {abilities}
          </div>

          <div className='games bg'>
            <h4>
              Games where it appears: <span>{detail.games.length}</span>
            </h4>
            <div className=''>{game}</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
