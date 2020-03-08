import React from 'react'
import KidCard from '../Cards/KidCard'
import PendingTranList from '../PendingTranList'
import ManageFundsBtn from '../Buttons/manageFundsBtn'
import ManageChoresBtn from '../Buttons/manageChoresBtn'

const ParentContainer = () => {
    return (
      <>
            <nav className="navbar" style={{backgroundColor:"#20638C"}}>
  <a className="navbar-brand" href="/parent" style={{color:"white"}}>
  <img src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
    Chore Enforement Officer
  </a>
</nav>
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
                <div className="col-md-2">
                    <ManageChoresBtn />
                </div>
                <div className="col-md-3"></div>

                </div>
                <br></br>
                <br></br>

                <PendingTranList />
                <nav className="navbar" style={{backgroundColor:"#20638C"}}>
  <a className="navbar-brand" href="/parent">
    <img src="/images/logo" width="30" height="30" alt=""></img>
  </a>
</nav>
</>

            )
            
            }
export default ParentContainer