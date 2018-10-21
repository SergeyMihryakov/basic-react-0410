import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordionDecorator from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    const { articles, openItemId, toggleOpenItem } = this.props
    return articles.map((article) => (
      <li key={article.id} className="test--article-list__item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

const ArticleListWithAccordion = accordionDecorator(ArticleList)

const filterArticle = (state) => {
  return state.articles.filter((article) => {
    const { selected, dateRange } = state.filter

    if (
      selected &&
      selected.length &&
      selected.map((item) => item.value).indexOf(article.id) === -1
    ) {
      return false
    }

    const articleDate = new Date(article.date)

    if (dateRange.from && articleDate <= dateRange.from) {
      return false
    }

    return !(dateRange.to && articleDate >= dateRange.to)
  })
}

export default connect((state) => ({
  articles: filterArticle(state)
}))(ArticleListWithAccordion)
