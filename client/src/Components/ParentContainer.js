import React from 'react'
import KidCard from './KidCard'
import PendingTranList from './PendingTranList'
import AddChildBtn from './addChildBtn'
import AddFundsBtn from './addFundsBtn'
import AddChoresBtn from './addChoresBtn'

const ParentContainer = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-3"></div>

                <div className="col-md-2">
                    <AddChildBtn />
                </div>
                <div className="col-md-2">
                    <AddFundsBtn />
                </div>
                <div className="col-md-2">
                    <AddChoresBtn />
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