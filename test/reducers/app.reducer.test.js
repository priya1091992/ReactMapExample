import reducer from './../../src/reducers/app.reducer'
import * as types from './../../src/actions/app.action'
import { column, mapData, groupdExpectedData } from './../mockData/index'

describe('Product reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        columns: [],
        map: {},
        center: []
      }
    )
  })

  it('should handle SET_COLUMN', () => {
    expect(
      reducer([], {
        type: types.SET_COLUMN,
        column
      })
    ).toEqual(
      {
        columns: ['state', 'city', 'address', 'zip', 'category']
      }
    )
  })

  it('should handle SET_MAP', () => {
    expect(
      reducer([], {
        type: types.SET_MAP,
        mapData
      })
    ).toEqual(
      {
        map: groupdExpectedData,
        center: [987, 98.879]
      }
    )
  })

  it('should handle RESET', () => {
    expect(
      reducer([], {
        type: types.RESET
      })
    ).toEqual(
      {
        map: {},
        columns: []
      }
    )
  })

})
