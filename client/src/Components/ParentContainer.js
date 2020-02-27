import React from 'react'
import KidCard from './KidCard'
import PendingTranList from './PendingTranList'
import AddChildBtn from './addChildBtn'

const ParentContainer = () => {
return(
<div>
    <AddChildBtn />
    <KidCard /> 
    <br></br>
    <br></br>
    <br></br>
    <PendingTranList />
</div>
)

}
export default ParentContainer