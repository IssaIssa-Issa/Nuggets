import React from 'react'

const Transactions = () => {
    return (
      <div >
              <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/child" style={{ color: "white" }}>
          <img src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
        </a>
      </nav>

        <h1 style={{textAlign: "center"}}>Balance $10</h1>
        <div class="col-md-8 offset-md-2" style={{background: "white"}}>
        <table className="table" >
          <thead>
            <tr>
              <th scope="col">Date Completed</th>
              <th scope="col">Chore</th>
              <th scope="col">Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Date Approved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3/1/2020</td>
              <td>Empty Dishwaser</td>
              <td>$1.00</td>
              <td>Approved</td>
              <td>3/2/2020</td>

            </tr>
            <tr>
              <td>3/2/2020</td>
              <td>Take our Trash</td>
              <td>$2.00</td>
              <td>Approved</td>
              <td>3/2/2020</td>

            </tr>
            <tr>
              <td>3/3/2020</td>
              <td>Vacuum</td>
              <td>$1.00</td>
              <td>Try Again</td>
              <td>3/3/2020</td>

            </tr>
          </tbody>
        </table>

      </div>

    </div>
  )
}

export default Transactions