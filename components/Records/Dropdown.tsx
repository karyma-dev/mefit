import React, { useState } from 'react'

const Dropdown = ({ uniqueExerciseNames, setExercise }) => {
  const [toggle, onToggle] = useState(false)

  const dropdownItems = uniqueExerciseNames.map((exercise, i) => (
    <li key={`${exercise}_${i}`} onClick={() => setExercise(exercise)}>
      {exercise}
    </li>
  ))

  return toggle ? (
    <div>
      <ul>{dropdownItems}</ul>
    </div>
  ) : (
    <h1 onClick={() => onToggle(!toggle)}>Arrow</h1>
  )
}

export default Dropdown
