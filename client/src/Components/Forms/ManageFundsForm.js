import React from 'react'

const ManageFundsForm = () => {
  return (
    <>
      <div>
        <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
          <a className="navbar-brand" href="/parent" style={{ color: "white" }}>
            <img src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
            Manage Funds
  </a>
        </nav>
        <br></br>
        <br></br>

        <div class="col-md-6 offset-md-3">

          <h3>Remove Funds</h3>

          {/* <select className="form-control">
                <option>Add Funds</option>
                <option>Withdrawl Funds</option>
            </select> */}
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
              <h3 for="exampleInputPassword1">Comment</h3>
              <input type="Amount" className="form-control" id="exampleInputAmount1"></input>
            </div>

            <div className="form-group">
              <h3 for="exampleInputPassword1">Amount</h3>
              <input type="Amount" className="form-control" id="exampleInputAmount1"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>

        </div>

      </div>
      <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/parent">
          <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
        </a>
      </nav>
    </>

  )
};

export default ManageFundsForm