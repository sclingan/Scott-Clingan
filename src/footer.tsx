import frontendMentor from '../public/favicon-32x32.png'
import twitter from '../public/icon-twitter.svg'


function Footer() {

    return (
      <footer>
        <h4>scottclingan</h4>
        <nav className='nav-icons'>
            <img src={frontendMentor} alt=""></img>
            <img src={twitter} alt=""></img>
        </nav>
      </footer>
    )
  }
  
  export default Footer