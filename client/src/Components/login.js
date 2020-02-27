import React from 'react'

const Login = () => {
return(
    <form>
  <div class="row">
    <div class="col-md-4"></div>
    <div class="col-md-4">
  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
  </div>
  <div class="col-md-4"></div>
  </div>
</form>
)}

export default Login