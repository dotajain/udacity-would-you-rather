import React from 'react';

const LoginForm = (props) => (
  <form className="login-form">
    <label htmlFor="username" className="sr-only">Email address</label>
    <input type="text" id="username" className="form-control" placeholder="User Name" required="" autoFocus="" />
    <label htmlFor="password" className="sr-only">Password</label>
    <input type="password" id="password" className="form-control" placeholder="Password" required="" />
    <div className="login-form-footer d-flex justify-content-between pt-3">
      <button className="btn btn-link p-0">Create Account</button>
      <button className="btn btn-primary">Sign In</button>
    </div>
  </form>
);

export default LoginForm;
