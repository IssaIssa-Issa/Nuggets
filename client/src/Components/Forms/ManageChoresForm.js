import React from 'react'

const ManageChoresForm = () => {
    return (
            <form>
                  <div class="col-md-6 offset-md-3">

            <h3>Add or Remove Chores</h3>

            <select className="form-control">
                <option>Add Chore</option>
                <option>Delete Chore</option>
            </select>
            <br></br>
            <br></br>
            <h3>Chore Name</h3>
            <select className="form-control">
                <option>Vaccuum</option>
                <option>Dishes</option>
            </select>
            <br></br>
            <br></br>

            
                <div className="form-group">
                    <h3 for="exampleInputPassword1">Amount</h3>
                    <input type="Amount" className="form-control" id="exampleInputAmount1"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
    
        
    )
};

export default ManageChoresForm