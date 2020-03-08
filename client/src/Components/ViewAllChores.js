import React from 'react'

const ViewAllChores = () => {








  
  return (
    <>
      <div className="col-md-8 offset-md-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Chore</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Empty Dishwaser</td>
              <td>$1.00</td>
              <td className="form-group">
                    <h3 for="exampleInputPassword1">Date Completed</h3>
                    <input type="Amount" className="form-control" id="exampleInputAmount1"></input>
                </td>
              <th scope="col"><button type="button" className="btn btn-success">Completed</button></th>
            </tr>
            <tr>
              <td>Take out Trash</td>
              <td>$2.00</td>
              <td className="form-group">
                    <h3 for="exampleInputPassword1">Date Completed</h3>
                    <input type="Amount" className="form-control" id="exampleInputAmount1"></input>
                </td>
              <th scope="col"><button type="button" className="btn btn-success">Completed</button></th>
            </tr>
            <tr>
              <td>Vacuum</td>
              <td>$1.00</td>
              <td className="form-group">
                    <h3 for="exampleInputPassword1">Date Completed</h3>
                    <input type="Amount" className="form-control" id="exampleInputAmount1"></input>
                </td>
              <th scope="col"><button type="button" className="btn btn-success">Completed</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ViewAllChores;