import { Bars } from './Bars/Bars'
export const Detail = ({ detail }) => {
  const game = detail.games.join(', ')
  const abilities = detail.abilities.join(', ')
  const weight = detail.weight / 10 + ' kg'
  const height = detail.height / 10 + ' Mts'
  //   1 milla es aproximadamente igual a 1.609 kilómetros.
  const speed = (detail.speed * 1.609).toFixed(2) + 'km/h'
  return (
    <div className='w-100 grid '>
      <h3 className='title'>Information</h3>
      <div className='lg:gap-10 lg:flex'>
        <div className='grid gap-10 bg w-100 py-10 lg:w-50'>
          <h3>Base Stats</h3>
          <Bars numero={detail.speed} title={'Speed'} />
          <Bars numero={detail.hp} title={'Hp'} />
          <Bars numero={detail.special_defense} title={'Special Defense'} />
          <Bars numero={detail.special_attack} title={'Special Attack'} />
          <Bars numero={detail.defense} title={'Defence'} />
          <Bars numero={detail.attack} title={'Attack'} />
        </div>
        <div className='grid gap-10 w-100'>
          <div className='lg:mt-0   bg flex align-center gap-10 mt-10 justify-content'>
            <h3 className='text-2xl'>Weight: {weight}</h3>
            <h3 className='text-2xl'>Height: {height}</h3>
            <h3 className='text-2xl'>Speed: {speed}</h3>
          </div>
          <div className='flex aling-center gap-10 justify-content text-xl bg'>
            <h4 className='text-2xl'>Characteristic: </h4>
            {detail.characteristic}
          </div>
          <div className='flex aling-center justify-content gap-10 align-center bg'>
            <h3 className='text-2xl'>Type: </h3>
            {detail.types.map((type) => (
              <div
                className=' flex justify-center gap-10 uppercase align-center'
                key={type.id}>
                <p className=''>{type}</p>
                <img src={`/type/${type}.svg`} alt='' className='w-20' />
              </div>
            ))}
          </div>
          <div className='flex aling-center gap-10 justify-content text-xl align-center bg'>
            <h4 className='text-2xl'>Abilities: </h4>
            {abilities}
          </div>

          <div className=' grid text-center bg'>
            <h4 className='text-2xl'>
              Games where it appears: <span>{detail.games.length}</span>
            </h4>
            <div className=''>{game}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
