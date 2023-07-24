import { Link } from 'react-router-dom'
import image from '../../images/Logo.png'
export const LandingPage = () => {
  return (
    <div className='page'>
      <div className=' grid h-100 justify-center'>
        <img src={image} alt='logo' className='logo' />
        <div className='uppercase grid  justify-center'>
          <h1 className='title'>proyecto indivudal Henry</h1>
          <Link to='./home'>
            <button className='btn'>Ingresar</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
