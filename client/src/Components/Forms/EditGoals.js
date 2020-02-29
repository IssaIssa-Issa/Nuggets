import React from 'react'

const EditGoals = () => {
    return (
            <form>
                  <div class="col-md-6 offset-md-3">

            <h3>Add or Remove Goals</h3>

            <select className="form-control">
                <option>Add Goal</option>
                <option>Delete Goal</option>
            </select>
            <br></br>
            <br></br>
            <div className="form-group">
                    <h3 for="exampleInputPassword1">Goal Name</h3>
                    <input type="Amount" className="form-control" id="exampleInputAmount1"></input>
                </div>
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

export default EditGoals