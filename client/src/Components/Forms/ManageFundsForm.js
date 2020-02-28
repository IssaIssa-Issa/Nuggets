import React from 'react'

const ManageFundsForm = () => {
    return (
        <div>
                  <div class="col-md-6 offset-md-3">

            <h3>Add or Remove Funds</h3>

            <select className="form-control">
                <option>Add Funds</option>
                <option>Withdrawl Funds</option>
            </select>
            <br></br>
            <br></br>
            <h3>Choose which Child</h3>
            <select className="form-control">
                <option>Ben</option>
                <option>Jack</option>
            </select>
            <br></br>
            <br></br>

            <form>
                <div className="form-group">
                    <h3 for="exampleInputPassword1">Amount</h3>
                    <input type="Amount" className="form-control" id="exampleInputAmount1"></input>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    )
};

export default ManageFundsForm