import './navbar.css'
import { Search } from './Search'
import { Link, useLocation } from 'react-router-dom'
import { FiPlusCircle } from 'react-icons/fi'
import { useState } from 'react'
import { Menu } from './Menu'
export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenu = () => {
    setMenuOpen((prevState) => !prevState)
  }

  const { pathname } = useLocation()
  return (
    pathname !== '/' && (
      <>
        {/*

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
          </nav> */}
        {/* </div> */}
        <div className='navbar'>
          <div className='navbar__div'>
            <Link to='/home' className='link__home'>
              <img src='/pokeball.svg' alt='' />
              <p>PokemonApp</p>
            </Link>
            <Search />
            <div
              className={`menu-icon ${menuOpen ? 'rotate-45' : ''}`}
              onClick={handleMenu}>
              <FiPlusCircle size={35} />
            </div>
            <div className='navbar__links'>
              <Link to='/pokemonCreate'>New Pokemon</Link>
              <Link to='/types'>Type </Link>
              <Link to='/ability'>Abilities</Link>
              <Link to='/regions'>Regions</Link>
            </div>
          </div>
          <Menu menuOpen={menuOpen} />
        </div>
      </>
    )
  )
}
