

export const Generation = () => {
  return (
    <div className='filters__select'>
      <label htmlFor='' className='filters__label'>
        Select Pokemon From Generation
      </label>
      <select className='select'>
        <option value='1-151'>All Pokemons</option>
        <option value='1-151'>Generation I</option>
        <option value='152-251'>Generation II</option>
        <option value='252-386'>Generation III</option>
        <option value='389-493'>Generation IV</option>
        <option value='496-649'>Generation V</option>
        <option value='650-721'>Generation VI</option>
        <option value='722-809'>Generation VII</option>
        <option value='810-905'>Generation VIII</option>
        <option value='906-1010'>Generation IX</option>
        <option value='1011-'>Generation X</option>
      </select>
    </div>
  )
}
