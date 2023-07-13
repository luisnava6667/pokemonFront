
import './paginado.css'
export const Paginado = ({ charactersPerPage, allPokemons, paginado }) => {
  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(allPokemons / charactersPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div className='paginado'>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button 
            className='paginado__number'
            onClick={() => paginado(number)}
            key={number}>
            {number}
          </button>
        ))}
    </div>
  )
}
