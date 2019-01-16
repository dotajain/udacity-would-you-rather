import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { handleAddQuestion } from '../../actions/questions'
class AddQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false,
  }

  handleChangeOneText = e => {
    const optionOneText = e.target.value
    this.setState(() => ({
      optionOneText,
    }))
  }

  handleChangeTwoText = e => {
    const optionTwoText = e.target.value
    this.setState(() => ({
      optionTwoText,
    }))
  }

  handleSubmit = e => {
    const { optionOneText, optionTwoText } = this.state
    const { handleAddQuestion, userId } = this.props
    e.preventDefault()
    if (optionOneText && optionTwoText) {
      this.setState(
        () => ({
          toHome: true,
        }),
        () => {
          handleAddQuestion({ userId, optionOneText, optionTwoText })
        },
      )
    }
  }

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state
    if (toHome) {
      return <Redirect to="/" exact />
    }
    return (
      <div className="container">
        <div className="text-center">
          <h2>Add a New Question</h2>
          <h4 className="mb-5">Would You Rather</h4>
        </div>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <div className="form-row mb-4">
            <div className="col">
              <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                  <span className="input-group-text">Option One</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="option-one"
                  label="Option One"
                  value={optionOneText}
                  onChange={this.handleChangeOneText}
                />
              </div>
            </div>
            <div className="col">
              <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                  <span className="input-group-text">Option Two</span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="option-two"
                  label="Option Two"
                  value={optionTwoText}
                  onChange={this.handleChangeTwoText}
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={!optionOneText || !optionTwoText}
              className="btn btn-lg btn-primary"
            >
              Add Question
            </button>
          </div>
        </form>
      </div>
    )
  }
}

// export default connect()(AddQuestion);

AddQuestion.propTypes = {
  userId: PropTypes.string,
  handleAddQuestion: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  userId: state.users.selectedUser.id,
})
export default connect(
  mapStateToProps,
  { handleAddQuestion },
)(AddQuestion)
