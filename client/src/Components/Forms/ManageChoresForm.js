import React from 'react'

const ManageChoresForm = () => {
    return (
        <>
        <div class="col-md-8 offset-md-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Chore</th>
                <th scope="col">Amount</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Empty Dishwaser</td>
                <td>$1.00</td>
                <td scope="col"><button type="button" className="btn btn-success">Delete</button></td>
              </tr>
              <tr>
                <td>Take out Trash</td>
                <td>$2.00</td>
                <td className="form-group"></td>
                <td scope="col"><button type="button" className="btn btn-success">Delete</button></td>
              </tr>
              <tr>
                <td>Vacuum</td>
                <td>$1.00</td>
                <td scope="col"><button type="button" className="btn btn-success">Delete</button></td>
              </tr>
            </tbody>
          </table>
        </div>
  
            <form>
                  <div class="col-md-6 offset-md-3">
                  <br></br>
            <br></br>

            <h3>Add Chores</h3>
                <div className="form-group">
                    <h3 for="exampleInputPassword1">Chore Name</h3>
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
        </>
    )
};

export default ManageChoresForm