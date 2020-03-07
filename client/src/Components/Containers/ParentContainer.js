import React from 'react'
import KidCard from '../Cards/KidCard'
import PendingTranList from '../PendingTranList'
import ManageFundsBtn from '../Buttons/manageFundsBtn'
// import ManageChoresBtn from '../Buttons/manageChoresBtn'

const ParentContainer = () => {
    return (
        <div>
            <nav className="navbar" style={{backgroundColor:"#20638C"}}>
  <a className="navbar-brand" href="#" style={{color:"white"}}>
    <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""></img>
    Chore Enforement Officer
  </a>
</nav>
<div style={{backgroundColor:"FEFFF0"}}>
<br></br>
<br></br>

                <KidCard />
                <br></br>
                <br></br>
                <br></br>
                <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-2">
                    <ManageFundsBtn /></div>
                {/* </div>
                <div className="col-md-2">
                    <ManageChoresBtn />
                </div> */}
                <div className="col-md-3"></div>

                </div>
                <br></br>
                <br></br>

                <PendingTranList />
                </div>
                <nav className="navbar" style={{backgroundColor:"#20638C"}}>
  <a className="navbar-brand" href="#">
    <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
  </a>
</nav>
            </div>
            )
            
            }
export default ParentContainer