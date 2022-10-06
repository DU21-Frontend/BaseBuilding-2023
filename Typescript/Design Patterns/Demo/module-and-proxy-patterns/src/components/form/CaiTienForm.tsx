import React from 'react'
import { InputField } from './InputField'
import '../../styles/form.css'

export const CaiTienForm = () => {
  return (
    <form>
      <h1>CaiTienForm</h1>
      <InputField label="First Name" />
      <InputField label="Last Name" />
      <InputField label="Username" />
      <InputField label="Email" type="email" />
      <InputField label="Password" type="password" />
      <button>Submit</button>
    </form>
  )
}
