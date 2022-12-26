import React, { useState } from 'react'

const Porfile = () => {
const [fname,setFname]=useState("")
const [email,setEmail]=useState("")
const [num,setNum]=useState("")
const [essen,setEssen]=useState("essential")


console.log(fname.length)
const checkEssential=()=>{
  if(fname.length<1){
    setEssen("")
  }
}

  return (
    <>
        <div>
    <h2>Personal Info</h2>
    <p>Please provide your name, email address, and phone number.    </p>

    <h4>Name</h4> <span className={`${essen}`}>please enter your name</span>
    <input type="text"  value={fname} onChange={(e)=>setFname(e.target.value)} placeholder="Enter your name" autoComplete="false"/>

    <h4>Email Address</h4><span className={`${essen}`} >please enter your Email</span>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}
    placeholder="Enter your email" autoComplete="false" />

    <h4>Phone Number</h4> <span className={`${essen}`} >please enter your Phone number</span>
    <input type="text" value={num} onChange={(e)=>setNum(e.target.value)} placeholder="+91 0000-000-000" autoComplete="false" />
    </div>
   
    <div className="btn-next">
        <button onClick={checkEssential}>Next Step</button>
    </div>
    </>
  )
}

export default Porfile
