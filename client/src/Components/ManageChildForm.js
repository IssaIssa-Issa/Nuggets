import React from 'react'

const ManageChildForm = () => {
    return (
            <form>
                  <div class="col-md-6 offset-md-3">

            <h3>Add or Remove Children</h3>

            <select className="form-control">
                <option>Add Child</option>
                <option>Remove Child</option>
            </select>
            <br></br>
            <br></br>
            <h3>Child Name</h3>
            <select className="form-control">
                <option>Ben</option>
                <option>Jack</option>
            </select>
            <br></br>
            <br></br>
                            </div>
            </form>
    
        
    )
};

export default ManageChildForm