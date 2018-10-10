import React, { PureComponent } from 'react'
import toggleDecorator from '../decorators/toggle'

class Comments extends PureComponent {
  render() {
    const { isOpen, toggleOpen } = this.props
    const buttonText = `${isOpen ? 'Close' : 'Open'} comments`

    return (
      <div>
        <h5>
          Комментарии <button onClick={toggleOpen}>{buttonText}</button>
        </h5>
        {this.items}
      </div>
    )
  }

  get items() {
    const { comments, isOpen } = this.props

    if (!isOpen) return null

    if (!comments) {
      return <p>Комментариев нет.</p>
    }

    return (
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h4>{comment.user}</h4>
            {comment.text}
          </li>
        ))}
      </ul>
    )
  }
}

export default toggleDecorator(Comments)
