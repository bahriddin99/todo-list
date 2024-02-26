import { useDispatch,useSelector } from "react-redux";
import { increment,decrement } from "../redux/reducer/counter";



export const Counters = ()=>{
 const data = useSelector((state)=>state.counter)
 const dispatch = useDispatch()
 return (
    <div>
        <h1>{data.count}</h1>
        <button onClick = {()=>dispatch(increment())}>+</button>
        <button onClick = {()=>dispatch(decrement())}>-</button>
    </div>
 )

}