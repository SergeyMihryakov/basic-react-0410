import { createSelector } from 'reselect'

export const selectionSelector = (state) => state.filters.selected
export const dateRangeSelector = (state) => state.filters.dateRange
export const articleListSelector = (state) => state.articles
export const commentsSelector = (state) => state.comments
export const idSelector = (_, props) => props.id

export const filtratedArticlesSelector = createSelector(
  selectionSelector,
  dateRangeSelector,
  articleListSelector,
  (selected, dateRange, articles) => {
    console.log('---', 'article list selector')
    const { from, to } = dateRange

    const outputArticles = {}

    for (let id in articles) {
      const published = Date.parse(articles[id].date)

      if (
        (!selected.length ||
          selected.find((selected) => selected.value === id)) &&
        (!from || !to || (published > from && published < to))
      ) {
        outputArticles[id] = articles[id]
      }
    }
    return outputArticles
  }
)

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    return comments[id]
  })
