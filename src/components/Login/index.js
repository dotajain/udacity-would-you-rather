import React from 'react';
import _ from 'lodash';

const Login = () => {
  const userList = _.map(users).map((user, i) => {
    const background = {
      backgroundImage: `url("${user.avatarURL}")`
    }
    return (
      <label className="user-radio d-flex" htmlFor={user.id} key={i}>
        <input type="radio" id={user.id} name="user" onChange={(e) => console.log(e.target) } value={user.name} checked={i === 0 && true } />
        <span className="user-box d-flex align-items-center">
          <span className="user-avatar" style={background}></span>
          <span className="user-name pl-3">{user.name}</span>
        </span>
      </label>
    )
  });
return (
  <div className="login">
    <div className="content-center">
      <div className="login-card">
        <div className="login-card-left">
          <div className="login-card-header">
            <h1>Would You Rather</h1>
            <h2>Sign in</h2>
            <p>to continue to play</p>
          </div>
          <div className="login-users">
            {userList}
          </div>
        </div>
        <div className="login-card-right">
          <div className="login-card-header">
            <h2>Sign in with <span>user 1</span></h2>
            <p>to continue to play</p>
          </div>
          <form className="login-form">
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
            <div className="login-form-footer d-flex justify-content-between pt-3">
              <button className="btn btn-link p-0">Create Account</button>
              <button className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
);
}

export default Login;

const users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL: '../../assets/images/snow.jpg',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: '../../assets/images/tyler.jpg',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: '../../assets/images/leaf.jpg',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}
