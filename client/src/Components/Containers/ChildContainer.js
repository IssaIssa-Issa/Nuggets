import React from 'react'
import BalanceCard from '../Cards/BalanceCard'
// import PendingTranList from '../PendingTranList'
// import GoalCard from '../Cards/GoalCard'
import ChoreCard from '../Cards/ChoreCard'
// import SpecialChoreCard from '../Cards/SpecialChoreCard'
// import EditGoalsCard from '../Cards/EditGoalsCard'
import "./style.css"

const ChildContainer = () => {
return(
    <body>
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
    </body>
    
)

}
export default ChildContainer