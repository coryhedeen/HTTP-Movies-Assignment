import React, { useState } from 'react';
import axios from 'axios';


const UpdateForm = props => {
  const [value, setValue] = useState({
    title: '',
    director: '',
    metascore: '',
    actor: ''
  })

const changeHandler = e => {
  setValue({[e.target.name]: e.target.value})
}

const submitHandler = (e, id, update) => {
  e.preventDefault()
  axios
    .put(`http://localhost:3000/update-movie/${id}`, update)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

  return (
    <form onSubmit={submitHandler} className="putForm">
      <input
        type="text"
        name="title"
        placeholder="title"
        onChange={changeHandler}
        value={value.title}
      />
      <input
        type="text"
        name="director"
        placeholder="director"
        onChange={changeHandler}
        value={value.director}
      />
      <input
        type="text"
        name="metascore"
        placeholder="metascore"
        onChange={changeHandler}
        value={value.metascore}
      />
      <input
        type="text"
        name="actor"
        placeholder="actor"
        onChange={changeHandler}
        value={value.actor}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default UpdateForm;
