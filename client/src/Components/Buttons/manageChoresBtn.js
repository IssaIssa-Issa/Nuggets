import React from 'react'
import { useHistory } from 'react-router-dom';

const ManageChoresBtn = () => {

        const history = useHistory();
      
        function handleClick() {
          history.push("/managechoresform");
        }
      
    return(
        
<button type="button" onClick={handleClick} className="btn btn-success" style={{backgroundColor:"149A21"}}>Manage Chores</button>


    )};
    export default ManageChoresBtn