import React from 'react'
import '../../styles/form.css'

// Repeat multiple similar lines of code
export const NongDanForm = () => {
  return (
    <form>
      <h1>NongDanForm</h1>
      <div className="input-field">
        <label>First Name</label>
        <input type="text" />
      </div>
      <div className="input-field">
        <label>Last Name</label>
        <input type="text" />
      </div>
      <div className="input-field">
        <label>Username</label>
        <input type="text" />
      </div>
      <div className="input-field">
        <label>Email</label>
        <input type="email" />
      </div>
      <div className="input-field">
        <label>Password</label>
        <input type="password" />
      </div>
      <button>Submit</button>
    </form>
  )
}
