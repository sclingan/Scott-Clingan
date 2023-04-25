


function Contact() {

    return (
      <div className="contact">
        <h3>Contact</h3>
        <p>I would love to hear about your project and 
            how I could help. Please fill in the form, and
            I'll get back to you as soon as possible.
        </p>
        <form className="contact-form">
          <label htmlFor="name"></label>
          <input type='text'placeholder="Name"></input>
          <label htmlFor="email"></label>
          <input type='email' placeholder="email"></input>
          <label htmlFor="message"></label>
          <input type='text-area' placeholder="message"></input>
          <button>send message</button>
        </form>
      </div>
    )
  }
  
  export default Contact