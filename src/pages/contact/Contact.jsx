import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <><div className="form-main">
    <div className="main-wrapper">
      <h2 className="form-head">Contact Form</h2>
      <form method='POST' action="https://formspree.io/f/moqojdov" className="form-wrapper">
        <div className="form-card">
          <input
            className="form-input"
            type="text"
            name="full_name"
            required
          />
          <label className="form-label" htmlFor="full_name">Full Name</label>
        </div>

        <div className="form-card">
          <input
            className="form-input"
            type="email"
            name="email"
            required
          />
          <label className="form-label" htmlFor="email">Email</label>
        </div>

        <div className="form-card">
          <input
            className="form-input"
            type="number"
            name="phone_number"
            required
          />
          <label className="form-label" htmlFor="phone_number">Phone number</label>
        </div>

        <div className="form-card">
          <textarea
            className="form-textarea"
            maxLength="420"
            rows="3"
            name="address"
            required
          ></textarea>
          <label className="form-textarea-label" htmlFor="address">Message</label>
        </div>

        <div className="btn-wrap">
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  </div>



  
  
    
    
    </>
  )
}

export default Contact