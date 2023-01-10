import React ,{useState, useEffect}from 'react'

export default function Clock() {
    const [clock, setClock]= useState()

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setClock(date.toLocaleTimeString())
        },1000)
    },[])
        

  return (
    <div>
        <div className="clock-div">{clock}</div>
    </div>
  )
}
