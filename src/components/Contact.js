import React from 'react'

const Contact = () => {
  return (
    <div className='contact-wrapper'>
      <h2>Contact</h2>
      <form className='my-5'>
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="name" autoComplete='off' />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" autoComplete='off' />
              <label htmlFor="email">Email*</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating mb-3">
              <input type="tel" className="form-control" id="phone" autoComplete='off' />
              <label htmlFor="phone">Phone Number</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea className="form-control" id="coment"></textarea>
              <label htmlFor="coment">Comment</label>
            </div>
          </div>
        </div>
        <button>Send</button>
      </form>
    </div>
  )
}

export default Contact
