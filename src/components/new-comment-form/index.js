import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class NewCommentForm extends PureComponent {
  static propTypes = {
    onSendComment: PropTypes.func
  }

  state = {
    user: '',
    text: ''
  }

  render() {
    return (
      <div className="new-comment-form__container">
        <form onSubmit={this.handleSubmit}>
          <div className="new-comment-form__user">
            <label>Your name:</label>
            <input
              type="text"
              value={this.state.user}
              name="user"
              onChange={this.handleChange}
            />
          </div>
          <div className="new-comment-form__text">
            <textarea
              value={this.state.text}
              name="text"
              onChange={this.handleChange}
            />
          </div>
          <div className="new-comment-form__button">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    )
  }

  handleChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()

    const { onSendComment } = this.props

    onSendComment && onSendComment(this.state.user, this.state.text)
  }
}

export default NewCommentForm
