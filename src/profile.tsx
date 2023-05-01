import profile from '../public/image-colton.jpg'


function Profile() {

    return (
      <div className="profile">
        {/* placeholder image */}
        {/* <img src={profile} alt="" className='profile-img'></img> */}
       <h2>Nice to meet you!</h2>
       <h3>I'm <span className='underline'>Scott Clingan</span></h3>
       <p className='profile-p'>Based in the United States, I'm a front-end developer
        passionate about building accessible web
        apps that users love.
       </p>
       <a href='#contact'>contact me</a>
      </div>
    )
  }
  
  export default Profile