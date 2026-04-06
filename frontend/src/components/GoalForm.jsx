import {useState} from 'react'
import { useDispatch } from 'react-redux'
//import { useNavigate } from "react-router-dom"
//import {toast} from 'react-toastify'
import { createGoal, reset } from "../features/goals/goalSlice"
import goalService from '../features/goals/goalServices'
//import Spinner from "../components/Spinner"


function GoalForm() {
  const [text, setText] = useState('')

  //const navigate = useNavigate()
  const dispatch = useDispatch()
  const onSubmit = (e) => {
      e.preventDefault()
      dispatch(createGoal({text}))
      setText('')
  }


  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text">Goal</label>
          <input type="text" className="form-control" id="text" name="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your goal" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block">Add Goal</button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm