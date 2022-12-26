import React from 'react'

const Plan = () => {
  return (
    <>
        <div>
    <h2>Select your Plan</h2>
    <p>Please provide your name, email address, and phone number.    </p>
    <h4>Name</h4>
    <input type="text" placeholder="Enter your name" autocomplete="false"/>
    <h4>Email Address</h4>
    <input type="email" 
    placeholder="Enter your email" autocomplete="false" />
    <h4>Phone Number</h4>
    <input type="text" placeholder="+91 0000-000-000" autocomplete="false" />
    </div>
    <div className="btn-next">
        <button>Next Step</button>
    </div>
    <div className="btn">
        <button>Go Back</button>
    </div>
    </>
  )
}

export default Plan
