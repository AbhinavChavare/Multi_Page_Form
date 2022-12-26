import React from 'react'
import { Route, Routes } from 'react-router'
import Porfile from './Info/Porfile'
import Plan from './Plan/Plan'

const Design1 = () => {
  return (
    <div>
          <div className="body-container">
    <div className="container">
<div className="sidebar">
    <div className="slide-cont">
        <div className="slide-num slide-num-back">1</div>
        <div className="slide-data">
            <h5>STEP 1</h5>
            <h4>YOUR INFO</h4>
        </div>
    </div>
    <div className="slide-cont">
        <div className="slide-num ">2</div>
        <div className="slide-data">
            <h5>STEP 2</h5>
            <h4>SELECT PLAN</h4>
        </div>
    </div>
    <div className="slide-cont">
        <div className="slide-num">3</div>
        <div className="slide-data">
            <h5>STEP 3</h5>
            <h4>ADD ONS</h4>
        </div>
    </div>
    <div className="slide-cont">
        <div className="slide-num">4</div>
        <div className="slide-data">
            <h5>STEP 4</h5>
            <h4>SUMMARY</h4>
        </div>
    </div>
  
    
</div>
<div className="profile-cont">

<Routes>
<Route path='/' element={<Porfile/>}></Route>
<Route path='/plan' element={<Plan/>}></Route>

  </Routes>

</div>
    </div>
    </div>
    </div>
  )
}

export default Design1
