//HOC === Higher Order Component == Decorator
import React, { Component } from 'react'

const accordionDecorator = (OriginalComponent) =>
  class AccordionDecorator extends Component {
    state = {
      openItemId: null
    }

    toggleOpenItem = (openItemId) => {
      if (openItemId === this.state.openItemId) {
        return this.setState({ openItemId: null })
      }

      this.setState({ openItemId })
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          toggleOpenItem={this.toggleOpenItem}
          openItemId={this.state.openItemId}
        />
      )
    }
  }

export default accordionDecorator
