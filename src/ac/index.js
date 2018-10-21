import {
  INCREMENT,
  DELETE_ARTICLE,
  SET_FILTER_SELECT,
  SET_FILTER_DATE_RANGE
} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function setSelect(selected) {
  return {
    type: SET_FILTER_SELECT,
    payload: { selected }
  }
}

export function setDateRange(dateRange) {
  return {
    type: SET_FILTER_DATE_RANGE,
    payload: { dateRange }
  }
}
