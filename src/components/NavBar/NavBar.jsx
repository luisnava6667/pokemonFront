import './navbar.css'
import pokemon from '../../images/Logo.png'
import { Search } from './Search'
import { Link, useLocation } from 'react-router-dom'
export const NavBar = () => {
  //vemos en que url estamos
  const { pathname } = useLocation()
  return (
    pathname !== '/' && (
      <div className='navbar'>
        <Link to='/home'>
          <img src={pokemon} alt='pokeball' className='navbar__img' />
        </Link>
        {pathname === '/home' && <Search />}
        {pathname !== '/pokemonCreate' ? (
          <Link to='/pokemonCreate' className='navbar__link'>
            New Pokemon
          </Link>
        ) : (
          <Link to='/pokemonCreate' className='navbar__link'>
            Go Back
          </Link>
        )}
      </div>
    )
  )
}
