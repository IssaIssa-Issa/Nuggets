import React from 'react'
import { useHistory } from 'react-router-dom';

const ManageChoresBtn = () => {

        const history = useHistory();
      
        function handleClick() {
          history.push("/managechoresform");
        }
      
    return(
        
<button type="button" onClick={handleClick} class="btn btn-primary">Manage Chores</button>


    )};
    export default ManageChoresBtn