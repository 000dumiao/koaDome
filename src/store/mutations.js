import {GET_DATA} from './mutation-types'

export default {
  [GET_DATA] (state, data) {
    state.articles = data
  }
}