import React from 'react'
import { useHistory } from 'react-router-dom';

const ManageFundsBtn = () => {

    routeChange=()=> {
        let path = `/managefundsform`;
        let history = useHistory();
        history.push(path);
      }

    return(
<button type="button" onClick={this.routeChange} class="btn btn-primary">Manage Funds</button>


    )};
    export default ManageFundsBtn