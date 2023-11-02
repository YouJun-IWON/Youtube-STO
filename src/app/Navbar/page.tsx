import ActionButton from './ActionButton'
import Logo from './Logo'
import {NavigationMenuBar} from './NavigationBar'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-10 border-b'>

      <Logo />
      <NavigationMenuBar />
      <ActionButton />
      
    </div>
  )
}

export default Navbar