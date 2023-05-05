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
            <img src={social}></img>
            <h4>Social Proof Section</h4>
            <p>HTML</p>
            <p>CSS</p>
            <a href='' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
          <li>
            <img src={article}></img>
            <h4>Article Preview</h4>
            <p>HTML</p>
            <p>CSS</p>
            <a href='' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
          <li> 
            <img src={intro}></img>
            <h4>Intro Component</h4>
            <p>HTML</p>
            <p>CSS</p>
            <a href='' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
          <li>
            <img src={base}></img>
            <h4>Base Apparel</h4>
            <p>HTML</p>
            <p>CSS</p>
            <a href='' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
          <li>
            <img src={results}></img>
            <h4>Results Summary</h4>
            <p>HTML</p>
            <p>CSS</p>
            <a href='' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
          <li>
            <img src={faq}></img>
            <h4>FAQ Accordion</h4>
            <p>HTML</p>
            <p>CSS</p>
            <a href='' className='project-link'>View Project</a>
            <a href='' className='code-link'>View code</a>
          </li>
      </ul>
      </div>
    )
  }
  
  export default Projects