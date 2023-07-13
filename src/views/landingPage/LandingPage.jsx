import { Link } from 'react-router-dom'
import './landing.css'
import image from '../../images/Logo.png'
export const LandingPage = () => {
  return (
    <div className='landing'>
      
      <div className='content'>
        <img src={image} alt='logo' className='logo' />
        <div className='contentTitle'>
          <h1 className='title'>proyecto indivudal Henry</h1>
          <Link to='./home'>
            <button className='btn'>Ingresar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
