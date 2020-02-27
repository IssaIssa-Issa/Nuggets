import React from 'react'
import KidCard from './KidCard'
import PendingTranList from './PendingTranList'
import ManageChildBtn from './manageChildBtn'
import ManageFundsBtn from './manageFundsBtn'
import ManageChoresBtn from './manageChoresBtn'

const ParentContainer = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-2">
                    <ManageChildBtn />
                </div>
                <div className="col-md-2">
                    <ManageFundsBtn />
                </div>
                <div className="col-md-2">
                    <ManageChoresBtn />
                </div>
                <div className="col-md-3"></div>

                </div>
                <br></br>
                <br></br>

                <KidCard />
                <br></br>
                <br></br>
                <br></br>
                <PendingTranList />
            </div>
            )
            
            }
export default ParentContainer