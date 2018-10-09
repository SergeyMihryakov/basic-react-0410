import React, { PureComponent } from 'react'

class Comments extends PureComponent {
  state = {
    isOpen: true
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { isOpen } = this.state
    const buttonText = (isOpen ? 'Close' : 'Open') + ' comments'
    return (
      <div>
        <h5>
          Комментарии <button onClick={this.toggleOpen}>{buttonText}</button>
        </h5>
        {this.items}
      </div>
    )
  }

  get items() {
    const { comments } = this.props
    const { isOpen } = this.state

    if (!isOpen) return null

    if (comments) {
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

    return <p>Комментариев нет.</p>
  }
}

export default Comments
