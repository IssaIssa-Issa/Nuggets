import React from 'react'
import KidCard from './KidCard'
import PendingTranList from './PendingTranList'
import AddChildBtn from './addChildBtn'
import AddFundsBtn from './addFundsBtn'

const ParentContainer = () => {
return(
<div>
    <AddChildBtn />
    <AddFundsBtn />
    <KidCard /> 
    <br></br>
    <br></br>
    <br></br>
    <PendingTranList />
</div>
)

}
export default ParentContainer