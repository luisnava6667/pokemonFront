import { getTypeColor } from '../../../helpers'

export const TypeDescription = ({ title, types }) => {
  return (
    <div className='justify-content align-items'>
      <h4 className='text-xl'>{title}</h4>
      <div className='gr-69-1 grid gap-10'>
        {types.length > 0 ? (
          types.map((weak, i) => (
            <p
              key={i}
              className={` text-lg px-10 py-5 mt-5 br-5 flex justify-content align-items ${getTypeColor(
                weak
              )}`}>
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
