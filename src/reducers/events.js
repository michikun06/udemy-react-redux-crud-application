import _ from 'lodash';

import { READ_EVENTS } from "../actions";

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            // action.response.dataのidをkeyとして配列を作成（keyの番号を呼び出すだけで情報の取得が可能）
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}
