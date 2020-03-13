import React from 'react'

const PendingTranList = () => {
  return (
    <>
      <div className="col-md-8 offset-md-2">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Date</th>
              <th scope="col">Child</th>
              <th scope="col">Chore</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>3/1/2020</td>
              <td>Jack</td>
              <td>Empty Dishwaser</td>
              <td>$1.00</td>
              <td>Pending</td>
              <th scope="col"><button type="button" className="btn btn-success">Approve</button></th>
              <th scope="col"><button type="button" className="btn btn-danger">Try Again</button></th>
            </tr>
            <tr>
              <td>2</td>
              <td>3/2/2020</td>
              <td>Ben</td>
              <td>Take out Trash</td>
              <td>$2.00</td>
              <td>Pending</td>
              <th scope="col"><button type="button" className="btn btn-success">Approve</button></th>
              <th scope="col"><button type="button" className="btn btn-danger">Try Again</button></th>
            </tr>
            <tr>
              <td>3</td>
              <td>3/3/2020</td>
              <td>Jack</td>
              <td>Vacuum</td>
              <td>$1.00</td>
              <td>Pending</td>
              <th scope="col"><button type="button" className="btn btn-success">Approve</button></th>
              <th scope="col"><button type="button" className="btn btn-danger">Try Again</button></th>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default PendingTranList;