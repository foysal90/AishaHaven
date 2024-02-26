import { Link } from 'react-router-dom'
import logoImg from '../../../assets/images/logo.png'

const Logo = () => {
  return (
    <Link to='/'>
     
       <h1 className="hidden md:block font-extrabold text-2xl italic first-letter:text-cyan-500">AishaHaven</h1>
    </Link>
  )
}

export default Logo
