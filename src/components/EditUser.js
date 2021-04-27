import React from 'react';

export default function Form (props) {
  const { values, change, submit, disabled, errors} = props

  const onChange = evt => {
    const { name, value } = evt.target
    change(name, value)
  }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

  return (
    <>
<div>
    <div>

    <form onSubmit={onSubmit} id="Edit-User">
        <div>
          <em>
          <div>{errors.phoneNumber}</div>
          <div>{errors.password}</div>
          </em>
        </div>
        <div>
        <h3>{values.username}'s Profile</h3>
        <label><h4>Update Phone Number: {values.phoneNumber} </h4>
          <input
            type="number"
            value={values.phoneNumber}
            onChange={onChange}
            name="phoneNumber"
            id="number-input"
            placeholder="0000000000"
            maxLength="10"
          />
        </label>

        <label><h4>Update Password: {values.password} </h4>
          <input
            type="password"
            value={values.password}
            onChange={onChange}
            name="password"
            id="pwd-input"
            placeholder="Password"
            maxLength="30"
          />
        </label>
        <div id="submit-update">
          <button id="submit-update" disabled={disabled}>Submit Update</button>
        </div>
    </div>
    </form>
  </div>
</div>
</>
  )
}
