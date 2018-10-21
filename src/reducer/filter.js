import { SET_FILTER_SELECT, SET_FILTER_DATE_RANGE } from '../constants'

const initialFilter = {
  selected: null,
  dateRange: {
    from: null,
    to: null
  }
}

export default (filterState = initialFilter, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_FILTER_SELECT:
      return { ...filterState, selected: payload.selected }

    case SET_FILTER_DATE_RANGE:
      return { ...filterState, dateRange: payload.dateRange }

    default:
      return filterState
  }
}
