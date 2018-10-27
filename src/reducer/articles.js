import { normalizedArticles } from '../fixtures'
import { CREATE_COMMENT_TO_ARTICLE, DELETE_ARTICLE } from '../constants'

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

    case CREATE_COMMENT_TO_ARTICLE:
      const { id, articleId } = payload
      const commentedArticle = articlesState[articleId]

      return {
        ...articlesState,
        [articleId]: {
          ...commentedArticle,
          comments: commentedArticle.comments
            ? [...commentedArticle.comments, id]
            : [id]
        }
      }

    default:
      return articlesState
  }
}
