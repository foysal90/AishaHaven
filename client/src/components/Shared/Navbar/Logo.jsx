import { Link } from 'react-router-dom'
import logoImg from '../../../assets/images/logo.png'

const Logo = () => {
  return (
    <Link to='/'>
     
       <h1 className="hidden md:block font-extrabold text-2xl italic first-letter:text-fuchsia-600"><span className='text-5xl  '>A</span>isha<span className='text-violet-500 text-5xl'>H</span>aven</h1>
    </Link>
  )
}

export default Logo
