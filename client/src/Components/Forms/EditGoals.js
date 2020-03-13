import React from 'react'

const EditGoals = () => {
    return (
        <>
        <nav className="navbar" style={{ backgroundColor: "#20638C" }}>
        <a className="navbar-brand" href="/child" style={{ color: "white" }}>
          <img src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
          <h3 className="header-title">Log Out</h3>

        </a>
      </nav>

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
    </>
        
    )
};

export default EditGoals