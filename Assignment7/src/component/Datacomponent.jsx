import { useState } from 'react';
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";
import "./Datacomponent.css"
function Datacomponent(){
    const [data, setdata] = useState ([
        {Id:1,name:"เฮง",gender:"ชาย"},
        {Id:2,name:"เสก",gender:"ชาย"},
        {Id:3,name:"กระปุก",gender:"หญิง"},
        {Id:3,name:"ไอซ์",gender:"หญิง"}
    ]);
    const [show, setShow] = useState(true)
    return(
        <div className='container'>
            <div className='header'>
                <h2 style={{color:"red",fontSize:"30px"}}>จำนวนประชากร {data.length}</h2>
                <button onClick={()=>setShow(!show)}>{show ? "ซ่อน": "แสดง"}</button>
        </div>
        <ul>
            {show && data.map((item) => (
                <li key={item.Id} style={{borderStyle:"solid",borderColor:item.gender=="ชาย" ? "green" : "pink"}}>
                    <img src={item.gender=="ชาย" ? boy : girl} width={50} height={50} />
                    <p>{item.name}</p>
                <div className='control'>
                    <button>ลบ</button>
                </div>
            </li>
            ))}
        </ul>
        </div>
    )
}
export default Datacomponent