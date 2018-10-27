import {} from '../constants'
import { normalizedComments } from '../fixtures'
import { CREATE_COMMENT_TO_ARTICLE } from '../constants'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({
    ...acc,
    [comment.id]: comment
  }),
  {}
)

export default (state = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    case CREATE_COMMENT_TO_ARTICLE:
      const { id, user, text } = payload
      return {
        ...state,
        [id]: { id, user, text }
      }
      break

    default:
      return state
  }
}
