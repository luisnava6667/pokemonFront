import { Link } from 'react-router-dom'
import './menu.css'
export const Menu = ({ menuOpen }) => {
  return (
    <div className={`menu__Links ${menuOpen ? 'show-0' : 'show-125'}`}>
      {menuOpen && (
        <div className='links'>
          <Link to='/pokemonCreate'>New Pokemon</Link>
          <Link to='/pokemonCreate'>Type </Link>
          <Link to='/pokemonCreate'>Abilities</Link>
          <Link to='/pokemonCreate'>Regions</Link>
        </div>
      )}
    </div>
  )
}
