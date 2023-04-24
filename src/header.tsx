import frontendMentor from '../public/favicon-32x32.png'
import twitter from '../public/icon-twitter.svg'


function Header() {

    return (
      <header>
        {/* make an sr-only h1 */}
        <p>scottclingan</p>
        <nav className='nav-icons'>
            <img src={frontendMentor} alt=""></img>
            <img src={twitter} alt=""></img>
        </nav>
        <div className="profile-img">

        </div>
      </header>
    )
  }
  
  export default Header