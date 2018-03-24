import * as types from '../actions/app.action';

const initialState = {
    columns: [],
    map: {},
    center: []
};

export default function AppReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_COLUMN: {
      let columnName = action.column && action.column.map((data) => data.value)
      return Object.assign({}, state, {
         columns: columnName
      });
    }
    case types.SET_MAP: {
      let groupedData = action.mapData.reduce(function(groups, item) {
        const val = item['category']
        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
      }, {})
      return Object.assign({}, state, {
         map: groupedData,
         center: [action.mapData[0].lat, action.mapData[0].lng]
      });
    }
    case types.RESET: {
      return Object.assign({}, state, {
         map: {},
         columns: []
      });
    }
    default:
      return state;
  }
}
