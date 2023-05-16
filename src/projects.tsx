import placeholder from '../public/image-colton.jpg'
import social from '../public/social-proof.png'
import article from '../public/article.png'
import intro from '../public/intro.png'
import base from '../public/base.png'
import results from '../public/results.png'
import faq from '../public/FAQ.png'

function Projects() {

    return (
      <div className="projects-container">
        <div className='projects-header'>
        <h3 className="h3-projects">Projects</h3>
        <a href='#contact'>contact me</a>
        </div>
        <ul className="projects">
          <li>
            <img src={social} className='project-img'></img>
            <h4>Social Proof Section</h4>
            <div className='projects-elements'>
            <p>HTML</p>
            <p>CSS</p>
            </div>
            <a href='https://sclingan.github.io/social-proof-section' target='_blank' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
          <li>
            <img src={article} className='project-img'></img>
            <h4>Article Preview</h4>
            <div className='projects-elements'>
            <p>HTML</p>
            <p>CSS</p>
            </div>
            <a href='https://sclingan.github.io/article-preview' target='_blank' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
          <li> 
            <img src={intro} className='project-img'></img>
            <h4>Intro Component</h4>
            <div className='projects-elements'>
            <p>HTML</p>
            <p>CSS</p>
            </div>
            <a href='' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
          <li>
            <img src={base} className='project-img'></img>
            <h4>Base Apparel</h4>
            <div className='projects-elements'>
            <p>HTML</p>
            <p>CSS</p>
            </div>
            <a href='' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
          <li>
            <img src={results} className='project-img'></img>
            <h4>Results Summary</h4>
            <div className='projects-elements'>
            <p>HTML</p>
            <p>CSS</p>
            </div>
            <a href='' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
          <li>
            <img src={faq} className='project-img'></img>
            <h4>FAQ Accordion</h4>
            <div className='projects-elements'>
            <p>HTML</p>
            <p>CSS</p>
            </div>
            <a href='' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
      </ul>
      </div>
    )
  }
  
  export default Projects