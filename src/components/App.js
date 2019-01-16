import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import LoadingBar from 'react-redux-loading-bar'

import { getUserList } from '../actions/users'
import { getQuestions } from '../actions/questions'

import Login from './Auth/Login'

import Header from './common/Header'
import Home from './Home'
import AddQuestion from './AddQuestion'
import LeadBoard from './LeadBoard'
import FourOFour from './FourOFour'

import QuestionPage from './QuestionPage'

class App extends Component {
  componentDidMount() {
    const { getUserList } = this.props
    getUserList()
  }

  render() {
    const { auth, loadingBar } = this.props
    return (
      <Fragment>
        <LoadingBar style={{ backgroundColor: '#f44336', height: '5px' }} />
        {auth.id && <Header />}
        {loadingBar.default === 0 && (
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/questions/:id" component={QuestionPage} />
            <PrivateRoute path="/add" component={AddQuestion} />
            <PrivateRoute path="/leadboard" component={LeadBoard} />

            <Route exact path="/login" component={Login} />
            <Route component={FourOFour} />
          </Switch>
        )}
      </Fragment>
    )
  }
}

App.propTypes = {
  getUserList: PropTypes.func.isRequired,
  getQuestions: PropTypes.func.isRequired,
  auth: PropTypes.shape({}).isRequired,
  loadingBar: PropTypes.shape({}).isRequired,
}
const mapStateToProps = state => ({
  auth: state.auth,
  loadingBar: state.loadingBar,
})
export default withRouter(
  connect(
    mapStateToProps,
    { getUserList, getQuestions },
  )(App),
)
