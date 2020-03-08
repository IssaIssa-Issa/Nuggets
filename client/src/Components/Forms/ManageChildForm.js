import React from 'react'

const ManageChildForm = () => {
    return (
        <>
        <nav className="navbar" style={{backgroundColor:"#20638C"}}>
        <a className="navbar-brand" href="/parent" style={{color:"white"}}>
        <img src="images/logo.png" width="100px" className="d-inline-block align-top" alt="Logo"></img>
          Chore Enforement Officer
        </a>
      </nav>
      <br></br>
            <br></br>

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
            <nav className="navbar" style={{backgroundColor:"#20638C"}}>
  <a className="navbar-brand" href="/parent">
    <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""></img>
  </a>
</nav>

    </>
        
    )
};

export default ManageChildForm