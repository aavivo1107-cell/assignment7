import { useState } from 'react'
function Age(){
    const [age, setAge] = useState (20)
function add(){
    setAge(age+1)
  }
function subtract(){
    setAge(age-1)
  }
    return(
        <>
        <h3>อายุ = {age}</h3>
        <button onClick={add}>เพิ่ม</button>
        <button onClick={subtract}>ลด</button>
        </>
    )
}
export default Age