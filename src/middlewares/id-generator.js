import Chance from 'chance'
import { CREATE_COMMENT_TO_ARTICLE } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type === CREATE_COMMENT_TO_ARTICLE) {
    const chance = new Chance()
    action.payload.id = chance.guid()
  }

  next(action)
}
