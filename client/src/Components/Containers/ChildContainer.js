import React from 'react'
import BalanceCard from '../Cards/BalanceCard'
import GoalCard from '../Cards/GoalCard'
import ChoreCard from '../Cards/ChoreCard'
import "./style.css"

const ChildContainer = () => {
return(
    <>
    <div className="childContainer" style={{width:"480", marginLeft: "105", }}>
    <div className="row">
    <div className="col-md-6">
    <BalanceCard />
    </div>
    </div>
    <div className="row">
    <div className="col-md-6">
    <ChoreCard />
    </div>
    </div>
    <div className="row">
    <div className="col-md-6">
    <GoalCard />
    </div>
    </div>

    </div>
        <nav className="navbar childFooter" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/child" style={{ color: "white" }}>
          <img src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
        </a>
      </nav>
</>
)

}
export default ChildContainer