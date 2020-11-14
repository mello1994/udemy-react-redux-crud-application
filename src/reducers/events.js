import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (state = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return state
        default:
            return state
    }
}