import { useState } from "react"

const Counter=()=>{

   const [counter,setCounter]=useState<number>(0);
   const [incrementValue,setIncrementValue]=useState<number>(0);

   function handleClickOnIncrementBtn(){
      setCounter((prev)=>prev+1);
   }

   function onChangeIncrementValue(event:React.ChangeEvent<HTMLInputElement>){
      setIncrementValue(parseInt(event.target.value))
   }

   return(
    <div style={{textAlign:"center"}}>
        <h1>{counter}</h1>
        <button onClick={handleClickOnIncrementBtn} >Increment</button>
        <input type="Number" value={incrementValue} onChange={onChangeIncrementValue}/>
        <button onClick={()=>{
            return setCounter((prev)=>prev+incrementValue)
        }} >Increase By</button>
    </div>
   ) 
}
export default Counter