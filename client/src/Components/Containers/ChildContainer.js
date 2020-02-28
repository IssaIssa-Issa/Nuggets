import React from 'react'
import BalanceCard from '../Cards/BalanceCard'
import PendingTranList from '../PendingTranList'
import GoalCard from '../Cards/GoalCard'
import ChoreCard from '../Cards/ChoreCard'
import SpecialChoreCard from '../Cards/SpecialChoreCard'

const ChildContainer = () => {
return(
<div>
    <SpecialChoreCard />
    <BalanceCard />
    <GoalCard />
    <ChoreCard />

</div>
)

}
export default ChildContainer