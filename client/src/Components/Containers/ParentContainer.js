import React from 'react'
import KidCard from '../Cards/KidCard'
import PendingTranList from '../PendingTranList'
import ManageChildBtn from '../Buttons/manageChildBtn'
import ManageFundsBtn from '../Buttons/manageFundsBtn'
import ManageChoresBtn from '../Buttons/manageChoresBtn'

const ParentContainer = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3"></div>

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