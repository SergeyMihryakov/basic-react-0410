import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setSelect } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    selected: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.required,
        value: PropTypes.string.required
      })
    )
  }

  handleChange = (selected) => {
    this.props.setSelect(selected)
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles,
    selected: state.filter.selected
  }),
  { setSelect }
)(SelectFilter)
