import './footer.css'
import pokemon from '../../images/Logo.png'
import henry from '../../images/favicon.ico'
import { useLocation } from 'react-router-dom'
export const Footer = () => {
  const { pathname } = useLocation()
  return (
    pathname !== '/' && (
      <footer className='footer'>
        <img src={henry} alt='henry' className='henry' />
        <p className='footer__text'>
          Proyecto individual. Todos los derechos reservados.{' '}
        </p>
        <img src={pokemon} alt='pokemon' className='pokemon' />
      </footer>
    )
  )
}
