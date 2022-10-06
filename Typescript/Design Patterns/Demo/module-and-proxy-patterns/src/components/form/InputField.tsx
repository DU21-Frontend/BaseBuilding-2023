import React, { HTMLInputTypeAttribute } from 'react'

type Props = {
  label: string
  type?: HTMLInputTypeAttribute
}

export const InputField = (props: Props) => {
  const { label, type = 'text' } = props

  return (
    <div className="input-field">
      <label>{label}</label>
      <input type={type} />
    </div>
  )
}
