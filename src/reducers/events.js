import _ from 'lodash';

import {
    CREATE_EVENTS,
    READ_EVENT,
    READ_EVENTS,
    UPDATE_EVENTS,
    DELETE_EVENTS
} from "../actions";

export default (events = {}, action) => {
    switch (action.type) {
        case CREATE_EVENTS:
        case READ_EVENT:
        case UPDATE_EVENTS:
            const data = action.response.data
            return { ...events, [data.id]: data }
        case READ_EVENTS:
            // action.response.dataのidをkeyとして配列を作成（keyの番号を呼び出すだけで情報の取得が可能）
            return _.mapKeys(action.response.data, 'id')
        case DELETE_EVENTS:
            console.log(action.id)
            delete events[action.id]
            return { ...events }
        default:
            return events
    }
}
