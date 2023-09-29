import { Add, Remove } from './ActionType'
import './App.css'
import { useDispatch,useSelector } from 'react-redux'


function App() {
  const count =useSelector((store)=>store)
  const Dispatch=useDispatch()

  return (
    <>
     <h1>Counter:{count}</h1>
     <button onClick={()=>Dispatch(Add())}>ADD</button>
     <button disabled={count==0} onClick={()=>Dispatch(Remove())}>REMOVE</button>
    </>
  )
}

export default App