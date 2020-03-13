import React from 'react'
import BalanceCard from '../Cards/BalanceCard'
import GoalCard from '../Cards/GoalCard'
import ChoreCard from '../Cards/ChoreCard'
import "./style.css"

const ChildContainer = () => {
return(
  <div className="childContainer" >
            <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/child" style={{ color: "white" }}>
          <img id="childFooterLogo" src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
        </a>
        <h3 className="header-title">Log Out</h3>

      </nav>

    <div>
    <br />
    <div className="row">
    <div className="col-md-6 offset-md-3">
    <BalanceCard />
    </div>
    </div>
    <div className="row">
    <div className="col-md-6 offset-md-3">
    <ChoreCard />
    </div>
    </div>
    <div className="row">
    <div className="col-md-6 offset-md-3">
    <GoalCard />
    </div>
    </div>

    </div>
    <br /><br /><br />
    <nav className="footer parentFooter" style={{ backgroundColor: "white" }}>
        <a className="navbar-brand" href="/parent"> <div className="footer-copyright text-gray font-small" style={{"font-size": 15 + "px"}}> © 2020 Copyright: Nuggets</div>
        </a>
      </nav>
</div>
)

}
export default ChildContainer