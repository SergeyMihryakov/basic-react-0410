import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      const newArticleState = {}

      for (let id in articlesState) {
        if (id === payload.id) {
          continue
        }

        newArticleState[id] = articlesState[id]
      }

      return newArticleState

    default:
      return articlesState
  }
}
