import React from 'react'
import BalanceCard from '../Cards/BalanceCard'
import PendingTranList from '../PendingTranList'
import GoalCard from '../Cards/GoalCard'
import ChoreCard from '../Cards/ChoreCard'
import SpecialChoreCard from '../Cards/SpecialChoreCard'
import EditGoalsCard from '../Cards/EditGoalsCard'
import "./style.css"

const ChildContainer = () => {
return(
    <div className="rectangle">
    <SpecialChoreCard />
    <div className="row">
    <div className="col-md-6">
    <BalanceCard />
    </div>
    <div className="col-md-6">
     <GoalCard />
    </div>
    </div>
    <div className="row">
    <div className="col-md-6">
    <ChoreCard />
    </div>
    <div className="col-md-6">
     <EditGoalsCard />
    </div>

</div>
</div>
)

}
export default ChildContainer