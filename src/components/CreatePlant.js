import React from 'react';


export default function CreatePlant (props) {
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
      <h1> Create A New Plant</h1>

    <form onSubmit={onSubmit} id="create-form">
        <div className="errors">
            <em>
          <div>{errors.nickname}</div>
          <div>{errors.species}</div>
          <div>{errors.h2oFrequency}</div>
          <div>{errors.image}</div>
          </em>
        </div>
    <div>
        <label><h4>Nickname: </h4>
          <input
            type="text"
            value={values.nickname}
            onChange={onChange}
            name="nickname"
            id="nickname-input"
            placeholder="Nickname"
            maxLength="30"
          />
        </label>

        <label><h4>Species: </h4>
          <input
            type="text"
            value={values.species}
            onChange={onChange}
            name="species"
            id="species-input"
            placeholder="Species"
            maxLength="30"
          />
        </label>

      <label><h4>Watering Frequency: </h4>
          <select value={values.h2oFrequency} name="h2oFrequency" onChange={onChange} id="frequency-dropdown">
            <option value="">-- Select --</option>
            <option value="daily">Daily</option>
            <option value="twicePerWeek">Twice Per Week</option>
            <option value="weekly">Weekly</option>
          </select>
        </label>

        <label for="img">Select Image:
        <input type="file" id="image" name="image" value={values.image} accept="image/*" />
        </label>
        <div id="submit">
          <button id="submit" disabled={disabled}>Create A Plant</button>
        </div>
    </div>
    </form>
  </div>
   
</div>
</>
  )
}
